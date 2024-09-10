const FunctionalRegistration = () => {
    return (
        <section className="degree-section flex flex-column surface-100 border-2 border-200">
            <div className="degree-header flex justify-content-between align-items-center surface-200">
                <h3>Registro Funcional {index + 1}</h3>
                <Button
                    icon="pi pi-trash"
                    className="fc-remove bg-red-500 border-red-500"
                    label=""
                    onClick={handleRemoveFunctionalRegistration}
                    type="button"
                />
            </div>
            <div className="form-row flex">
                
            </div>
        </section>
    );
};

export default FunctionalRegistration;