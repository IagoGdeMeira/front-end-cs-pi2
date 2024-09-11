export const handleAddFunctionalRegistration = (functionalRegistrations, setFunctionalRegistrations) => {
    const newFunctionalRegistration = {
        functionalRegistrationDiscipline: "",
        functionalLine: "",
        functionalRegistrationLink: ""
    };

    setFunctionalRegistrations([...functionalRegistrations, newFunctionalRegistration]);
};

export const handleRemoveFunctionalRegistration = (index, functionalRegistrations, setFunctionalRegistrations) => {
    const updatedFunctionalRegistrations = functionalRegistrations.filter((_, i) => i !== index);

    setFunctionalRegistrations(updatedFunctionalRegistrations);
};

export const handleFunctionalRegistrationChange = (e, index, functionalRegistrations, setFunctionalRegistrations) => {
    const { name, value } = e.target ? e.target : e;
    const updatedFunctionalRegistrations = [...functionalRegistrations];
    updatedFunctionalRegistrations[index] = { ...updatedFunctionalRegistrations[index], [name]: value };

    setFunctionalRegistrations(updatedFunctionalRegistrations);
};
