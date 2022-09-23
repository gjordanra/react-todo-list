import React from "react";
import '../css/Task.css';
import { AiFillRest } from "react-icons/ai";

function Task( { text, compleat }) {
    return (
        <div className={compleat ? 'taskcontainer compleated' : 'taskcontainer'}>
            <div className='texttarea'>
                { text }
            </div>
            <div className='taskiconscontainer'>
                <AiFillRest className="taskicon"/>
            </div>
        </div>

    );
}
export default Task;