export const handleSpecializationChange = (index, field, value, specializations, setSpecializations) => {
    const updatedSpecializations = [...specializations];

    updatedSpecializations[index] = {
        ...updatedSpecializations[index],
        [field]: value
    };
    
    setSpecializations(updatedSpecializations);
};

export const handleAddSpecialization = (specializations, setSpecializations) => {
    setSpecializations([...specializations, {
        specializationCourseName: '',
        specializationCourseLocation: '',
        specializationConclusionDate: ''
    }]);
};