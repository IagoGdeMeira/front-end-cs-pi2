export const handleCourseNameChange = (e, specialization, setSpecialization) => {
    setSpecialization({ ...specialization, specializationCourseName: e.target.value });
};

export const handleConclusionDateChange = (e, specialization, setSpecialization) => {
    setSpecialization({ ...specialization, specializationConclusionDate: e.target.value });
};

export const handleCourseLocationChange = (e, specialization, setSpecialization) => {
    setSpecialization({ ...specialization, specializationCourseLocation: e.target.value });
};