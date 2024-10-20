import { useEffect, useState } from 'react';
import axios from 'axios';
import { URL } from '../../utils/constants'
const TaskCounter = () => {
  const [completedTasks, setCompletedTasks] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCompletedTasks = async () => {
    try {
      const response = await axios.get(`${URL}/api/todo/count`);
      setCompletedTasks(response.data.data);
      setIsLoading(false);
      setError(null);
    } catch (error) {
      setIsLoading(false);
      setError('Erro ao buscar contagem de tarefas');
      console.error('Erro ao buscar contagem de tarefas:', error);
    }
  };

  useEffect(() => {
    const pollCompletedTasks = async () => {
      await fetchCompletedTasks();
      setTimeout(pollCompletedTasks, 2000);
    };

    pollCompletedTasks();

    return () => {
      setTimeout(() => {}, 0);
    };
  }, []);

  if (isLoading) {
    return <div className='message'>Loading...</div>;
  }

  if (error) {
    return <div className='message'>Error: {error}</div>;
  }

  return (
    <div className="custom-count">
      <h1 className="custom-title">Finished tasks quantity</h1>
      <span className="text-[56px]">{completedTasks}</span>
    </div>
  );
};

export default TaskCounter;
