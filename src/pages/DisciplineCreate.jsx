import React from "react";

const DiscipçineCreate = () =>{
    return(
        <Card title="Advanced Card" subTitle="Card subtitle" className="md:w-24rem">
            <div className="card flex justify-content-center">
                <InputText Keyfilter="int" placeholder="Nome Disciplina"/>
                <InputToxt Keyfilter="int" placeholder="Codigo disciplina"/>
                <Button label="Salvar"/>
            </div>
        </Card>
    );
}