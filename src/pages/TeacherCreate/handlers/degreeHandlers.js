export const handleDegreeChange = (index, field, value, degrees, setDegrees) => {
    const updatedDegrees = [...degrees];

    updatedDegrees[index] = {
        ...updatedDegrees[index],
        [field]: value
    };

    setDegrees(updatedDegrees);
};

export const handleAddDegree = (degrees, setDegrees) => {
    setDegrees([...degrees, {
        degreeCourseName: '',
        degreeCourseLocation: '',
        degreeConclusionDate: ''
    }]);
};