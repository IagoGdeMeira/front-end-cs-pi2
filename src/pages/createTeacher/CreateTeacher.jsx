import './CreateTeacher.css';

import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";


function CreateTeacher() {
    const [name, setName] = useState('');

    return (
        <div className="card flex justify-content-center">
            <FloatLabel>
                <InputText id="name" value={name} onChange={(e) => setName(e.target.value)} />
                <label for="name">Nome do professor</label>
            </FloatLabel>
        </div>
    );
}

export default CreateTeacher;