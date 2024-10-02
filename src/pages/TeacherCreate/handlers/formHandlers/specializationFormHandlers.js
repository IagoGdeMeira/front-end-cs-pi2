export const handleAddSpecialization = (specializations, setSpecializations) => {
    const newSpecialization = {
        specializationCourseName: "",
        specializationCourseLocation: "",
        specializationConclusionDate: ""
    };

    setSpecializations([...specializations, newSpecialization]);
};

export const handleRemoveSpecialization = (index, specializations, setSpecializations) => {
    const updatedSpecializations = specializations.filter((_, i) => i !== index);

    setSpecializations(updatedSpecializations);
};

export const handleSpecializationChange = (e, index, specializations, setSpecializations) => {
    const { name, value } = e.target ? e.target : e;
    const updatedSpecializations = [...specializations];
    updatedSpecializations[index] = { ...updatedSpecializations[index], [name]: value };

    setSpecializations(updatedSpecializations);
};