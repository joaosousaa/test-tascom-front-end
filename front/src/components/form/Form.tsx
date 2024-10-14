import { useForm, SubmitHandler } from "react-hook-form";

interface Inputs {
    name: string;
    description: string;
}

function Form() {

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
    };

    return (
        <form className="custom-form" onSubmit={handleSubmit(onSubmit)}>

            <h1 className="custom-title">Add new to do</h1>

            <div>
                <label className="custom-label">Task Name :</label>
                {errors.name && <p className="custom-alert " >{errors.name.message}</p>}
            </div>

            <input className="custom-input"
                type="text"
                placeholder="Placeholder..."
                {...register("name", { required: "* Mandatory name" })} />

            <div>
                <label className="custom-label">Task Description:</label>
                {errors.description && <p className="custom-alert">{errors.description.message}</p>}
            </div>

            <input className="custom-input"
                type="text"
                placeholder="Placeholder..."
                {...register("description", { required: "* mandatory description" })} />

            <button className="custom-button" type="submit">Create Todo</button>
            
        </form>
    );
}

export default Form;
