export const handleNameChange = (e, teacher, setTeacher) => {
    setTeacher({ ...teacher, teacherName: e.target.value });
};

export const handleBirthDateChange = (e, teacher, setTeacher) => {
    setTeacher({ ...teacher, teacherBirthDate: e.target.value });
};

export const handleCPFChange = (e, teacher, setTeacher) => {
    setTeacher({ ...teacher, teacherCPF: e.value });
};

export const handleRGChange = (e, teacher, setTeacher) => {
    setTeacher({ ...teacher, teacherRG: e.value });
};

export const handlePhoneNumberChange = (e, teacher, setTeacher) => {
    setTeacher({ ...teacher, teacherPhoneNumber: e.target.value });
};

export const handleEmailChange = (e, teacher, setTeacher) => {
    setTeacher({ ...teacher, teacherEmail: e.target.value });
};

export const handleBirthCityChange = (value, teacher, setTeacher) => {
    setTeacher({ ...teacher, teacherBirthCity: value });
};

export const handleBirthStateChange = (value, teacher, setTeacher) => {
    setTeacher({ ...teacher, teacherStateCity: value });
};

const handleWorkedHoursChange = (e, teacher, setTeacher) => {
    const { value } = e.target;
    
    if(/^\d*$/.test(value))
        setTeacher({ ...teacher, teacherTeachingHours: value });
    else
        console.error("ERROR: Only integer numbers are allowed in this input.");
};