import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useState, useEffect } from "react";

interface Inputs {
    title: string;
    description: string;
}

function Form() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>();
    const [message, setMessage] = useState<string>("");

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            const response = await axios.post('http://localhost:3333/api/todo/create', data);
            console.log(response.data);
            setMessage("Task created successfully!");
            reset();
        } catch (error) {
            console.error("Erro ao enviar os dados:", error);
            setMessage("Error: Could not create task.");
        }
    };


    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                setMessage("");
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [message]);

    return (
        <form className="custom-form" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="custom-formTitle">Add new to do</h1>

            <div>
                <label className="custom-formLabel">Task Name :</label>
                {errors.title && <p className="custom-formAlert">{errors.title.message}</p>}
            </div>
            <input
                className="custom-formInput"
                type="text"
                placeholder="Placeholder..."
                {...register("title", { required: "* Mandatory" })}
            />

            <div>
                <label className="custom-formLabel">Task Description:</label>
                {errors.description && <p className="custom-formAlert">{errors.description.message}</p>}
            </div>
            <input
                className="custom-formInput"
                type="text"
                placeholder="Placeholder..."
                {...register("description", { required: "* Mandatory" })}
            />

            <button className="custom-formButton" type="submit">Create Todo</button>

            {message && <p className="custom-formMessage">{message}</p>}
        </form>
    );
}

export default Form;
