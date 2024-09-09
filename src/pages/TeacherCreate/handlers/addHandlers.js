export const handleAddSpecialization = (specializations, setSpecializations) => {
    setSpecializations([...specializations, {
        specializationCourseName: '',
        specializationCourseLocation: '',
        specializationConclusionDate: ''
    }]);
};
