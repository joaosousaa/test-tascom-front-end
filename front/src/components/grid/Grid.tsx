import vector from '../../assets/Vector.svg';

const Grid = () => {
    return (
        <main className="custom-frame">
            <h1 className="custom-frameTitle">To do </h1>

            <section className='custom-frameSection'>
                <div className="custom-grid ">
                    <div className="custom-taskCard">
                        <p className='custom-taskName'>Mother breakfeast</p>
                        <p className='custom-taskDescription' >i need to do my mother breakfeast.</p>
                    </div>
                    <div className="custom-cardDateTime">
                        <p className='custom-dateTime'>17 September 2021 at 08:00 PM</p>
                    </div>
                    <button className="custom-buttonCompleted ">
                        <img src={vector} alt="button to complete task" className='custom-completedIcon' />
                    </button>
                </div>

                <div className="custom-grid ">
                    <div className="custom-taskCard">
                        <p className='custom-taskName'>Mother breakfeast</p>
                        <p className='custom-taskDescription' >i need to do my mother breakfeast.</p>
                    </div>
                    <div className="custom-cardDateTime">
                        <p className='custom-dateTime'>17 September 2021 at 08:00 PM</p>
                    </div>
                    <button className="custom-buttonCompleted ">
                        <img src={vector} alt="button to complete task" className='custom-completedIcon' />
                    </button>
                </div>

                <div className="custom-grid ">
                    <div className="custom-taskCard">
                        <p className='custom-taskName'>Mother breakfeast</p>
                        <p className='custom-taskDescription' >i need to do my mother breakfeast.</p>
                    </div>
                    <div className="custom-cardDateTime">
                        <p className='custom-dateTime'>17 September 2021 at 08:00 PM</p>
                    </div>
                    <button className="custom-buttonCompleted ">
                        <img src={vector} alt="button to complete task" className='custom-completedIcon' />
                    </button>
                </div>

                <div className="custom-grid ">
                    <div className="custom-taskCard">
                        <p className='custom-taskName'>Mother breakfeast</p>
                        <p className='custom-taskDescription' >i need to do my mother breakfeast.</p>
                    </div>
                    <div className="custom-cardDateTime">
                        <p className='custom-dateTime'>17 September 2021 at 08:00 PM</p>
                    </div>
                    <button className="custom-buttonCompleted ">
                        <img src={vector} alt="button to complete task" className='custom-completedIcon' />
                    </button>
                </div>

                <div className="custom-grid ">
                    <div className="custom-taskCard">
                        <p className='custom-taskName'>Mother breakfeast</p>
                        <p className='custom-taskDescription' >i need to do my mother breakfeast.</p>
                    </div>
                    <div className="custom-cardDateTime">
                        <p className='custom-dateTime'>17 September 2021 at 08:00 PM</p>
                    </div>
                    <button className="custom-buttonCompleted ">
                        <img src={vector} alt="button to complete task" className='custom-completedIcon' />
                    </button>
                </div>

            </section>
        </main>
    );
};

export default Grid;