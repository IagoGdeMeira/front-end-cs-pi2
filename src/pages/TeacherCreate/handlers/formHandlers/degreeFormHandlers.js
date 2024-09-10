export const handleAddDegree = (degrees, setDegrees) => {
    const newDegree = {
        degreeCourseName: "",
        degreeCourseLocation: "",
        degreeConclusionDate: ""
    };

    setDegrees([...degrees, newDegree]);
};

export const handleRemoveDegree = (index, degrees, setDegrees) => {
    const updatedDegrees = degrees.filter((_, i) => i !== index);

    setDegrees(updatedDegrees);
};

export const handleDegreeChange = (e, index, degrees, setDegrees) => {
    const { name, value } = e.target ? e.target : e;
    const updatedDegrees = [...degrees];
    updatedDegrees[index] = { ...updatedDegrees[index], [name]: value };

    setDegrees(updatedDegrees);
};
