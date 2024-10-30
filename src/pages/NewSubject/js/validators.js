export const areRequiredFieldsFilled = (subject) => {
    const requiredFields = [
        'subjectName',
        'subjectCode'
    ];

    return requiredFields.every((field) => {
        const value = subject[field];
        if (typeof value === 'string') return value.trim() !== '';
        if (typeof value === 'number') return !isNaN(value);
        
        return false;
    });
};