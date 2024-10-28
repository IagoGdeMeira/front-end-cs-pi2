export const areRequiredFieldsFilled = (discipline) => {
    const requiredFields = [
        'disciplineName',
        'disciplineCode'
    ];

    return requiredFields.every((field) => {
        const value = discipline[field];
        if (typeof value === 'string') return value.trim() !== '';
        if (typeof value === 'number') return !isNaN(value);
        
        return false;
    });
};