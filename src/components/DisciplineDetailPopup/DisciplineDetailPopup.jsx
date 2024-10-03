import React from "react";
import "primeicons/primeicons.css";
import { Button } from "primereact/button";
import { Card } from "primereact/card";

const DisciplineDetailPopup = () =>{


    return(
        <Card>
            <title>Nome da disciplina</title>
            <div>
                <Button>
                    <i class="pi pi-times-circle"/>
                </Button>
            </div>
            
        </Card>
    );
}

export default DisciplineDetailPopup;