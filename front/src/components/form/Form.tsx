import { useForm, SubmitHandler } from "react-hook-form";

interface Inputs {
    name: string;
    description: string;
}

function Form() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
        reset();
    };

    return (
        <form className="custom-form" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="custom-formTitle">Add new to do</h1>

            <div>
                <label className="custom-formLabel">Task Name :</label>
                {errors.name && <p className="custom-formAlert">{errors.name.message}</p>}
            </div>
            <input
                className="custom-formInput"
                type="text"
                placeholder="Placeholder..."
                {...register("name", { required: "* Mandatory" })}
            />

            <div>
                <label className="custom-formLabel">Task Description:</label>
                {errors.description && <p className="custom-formAlert">{errors.description.message}</p>}
            </div>
            <input
                className="custom-formInput"
                type="text"
                placeholder="Placeholder..."
                {...register("description", { required: "* mandatory" })}
            />

            <button className="custom-formButton" type="submit">Create Todo</button>
        </form>
    );
}

export default Form;
