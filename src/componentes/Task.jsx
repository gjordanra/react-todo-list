import React from "react";
import '../css/Task.css'

function Task( { text }) {
    return (
        <div className='taskcontainer'>
            <div className='texttarea'>
                { text }
            </div>
            <div className='taskicon'>
                x (sup)
            </div>
        </div>

    );
}
export default Task;