import React from "react";
import '../css/Formcomponent.css';

function Formtarea ( {props} ) {
    return (
        <form className="task-form">
            <input 
              className='task-input'
              type='text'
              placeholder='write your task!'
              name='text'
              />
              <bottom className='botom-task'>
                Add Task
              </bottom>
        </form>
    );
} 
export default Formtarea;