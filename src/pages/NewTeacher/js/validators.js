export const areRequiredFieldsFilled = (teacher) => {
    const requiredFields = [
        'teacherName',
        'teacherCPF',
        'teacherRG',
        'teacherPhoneNumber',
        'teacherEmail'
    ];

    return requiredFields.every((field) => {
        return teacher[field] && teacher[field].trim() !== '';
    });
};

export const validateRG = (rg) => {
    const rgPatterns = [
        /^[0-9]{1,2}\.[0-9]{3}\.[0-9]{3}-[0-9X]$/,
        /^[A-Za-z]{1,2}-[0-9]{2}\.[0-9]{3}\.[0-9]{3}-[0-9X]$/,
        /^[0-9]{1,9}[A-Za-z0-9]*$/,
    ];

    return rgPatterns.some((pattern) => pattern.test(rg));
};

export const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
};