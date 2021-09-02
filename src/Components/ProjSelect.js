import React from 'react';
import "../App.css";

function ProjSelect() {
    return (
        <div className="ProjSelect">

            <select className="selectProject">
                <option value="1">HE I</option>
                <option value="2">HE II</option>
                <option value="3">HE III</option>
                <option value="4">HE IV</option>
            </select>

            <button className="addButton">New Project</button>
        </div>
    );
    }

    export default ProjSelect;