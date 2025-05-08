import React from "react";
import './Task.css';
import ellipse from '../../icons/Ellipse.svg';
import tick from '../../icons/tick-square.svg';
import krest from '../../icons/close-square.svg'; 

const task = [
    {
        description: 'Участвовать в 10 разных турнирах по CS2',
        date: '12.12.2025 12:00',
        icon: tick
    },
    {
        description: 'Участвовать в 10 разных турнирах по CS2',
        date: '12.12.2025 12:00',
        icon: krest
    },
    {
        description: 'Участвовать в 10 разных турнирах по CS2',
        date: '12.12.2025 12:00',
        icon: tick
    },
    {
        description: 'Участвовать в 10 разных турнирах по CS2',
        date: '12.12.2025 12:00',
        icon: krest
    },
]



function Task(){
    return(
        <div className='task'>
            <h4>Задания</h4>

            <div>
                {
                    task.map((tasks, index) => {
                        return(
                            <div class="task-one">
                                <div class="condition-one" id="condition">
                                    <div className='Point-Task'>
                                        <img src={ellipse} alt="" class="point"/>
                                        <h5 class="condition">{tasks.description}</h5>
                                    </div>
                                    <img src={tasks.icon} alt="" class="state"/>
                                </div>
                                <p class="term">До {tasks.date}</p>

                                {index < task.length - 1 && (
                                <div className="line-task">
                                    <hr color="#0B4EA1" size="0.5"/>
                                </div>
                            )}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Task;