export const handleCourseNameChange = (e, degree, setDegree) => {
    setDegree({ ...degree, degreeCourseName: e.target.value });
};

export const handleConclusionDateChange = (e, degree, setDegree) => {
    setDegree({ ...degree, degreeConclusionDate: e.target.value });
};

export const handleCourseLocationChange = (e, degree, setDegree) => {
    setDegree({ ...degree, degreeCourseLocation: e.target.value });
};