import React from "react";

const DeleteDiscipline = () =>{
    
    const DeleteDiscipline = () =>{
        if(localStorage.getItem("disciplineCode") == localStorage.getItem("codeDelete")){
            localStorage.setItem("disciplineCode", "");
            localStorage.setItem("disciplineName", "");
        }
    }
}

export default DeleteDiscipline;