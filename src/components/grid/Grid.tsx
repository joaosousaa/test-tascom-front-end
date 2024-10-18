import vector from '../../assets/Vector.svg';
import check from '../../assets/check.svg';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';
import axios from 'axios';
interface Task {
  id: string;
  title: string;
  description: string;
  created_at: string;
  status: 'CREATED' | 'COMPLETED' | 'CANCELED';
}
import { URL } from '../../utils/constants'
const fetchTasks = async (): Promise<Task[]> => {
  const response = await axios.get(`${URL}/api/todo/show`);
  return response.data.data;
};

const Grid = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const pollTasks = async () => {
    try {
      const newTasks = await fetchTasks();
      setTasks(newTasks);
    } catch (err: any) {
      setError(err);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      pollTasks();
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);


  if (isLoading) {
    return <div className='message'>Loading...</div>;
  }

  if (!Array.isArray(tasks)) {
    return <div className='message'>No tasks found.</div>;
  }

  const formatDateTime = (dateString: string) => {
    const date = new Date(dateString);
    return format(date, "dd MMMM yyyy 'at' hh:mm a", { locale: enUS });
  };


  const updateTask = async (taskId: string, newStatus: 'COMPLETED' | 'CANCELED') => {
    try {
      const response = await axios.put(`${URL}/api/todo/edit/${taskId}/${newStatus}`);
      console.log(response.data);
      const updatedTasks = tasks.map(task =>
        task.id === taskId ? { ...task, status: newStatus } : task
      );
      setTasks(updatedTasks);
    } catch (error: any) {
      console.error('Erro ao atualizar a tarefa:', error.response.data.message);
    }
  };

  return (
    <main className="custom-frame">

      {tasks.length > 0 ? <>
        <h1 className="custom-frameTitle">To do</h1>

        <section className='custom-gridSection'>
          {tasks.map((task) => (
            <div key={task.id} className="custom-list">
              <div className="custom-taskCard">
                <p className='custom-taskName'>{task.title}</p>
                <p className='custom-taskDescription'>{task.description}</p>
              </div>
              <div className="custom-cardDateTime">
                <p className='custom-dateTime'>{formatDateTime(task.created_at)}</p>
              </div>
              <button
                className="custom-buttonCompleted"
                onClick={() => updateTask(task.id, 'COMPLETED')}
              >
                <img src={check} alt="button to complete task" className='custom-completedIcon' />
              </button>
              <button
                className="custom-buttonCanceled"
                onClick={() => updateTask(task.id, 'CANCELED')}
              >
                <img src={vector} alt="button to cancel task" className='custom-canceledIcon' />
              </button>
            </div>
          ))}
        </section></> : <><div className='message'>No tasks found.</div> </>}

    </main>
  );
};

export default Grid;
