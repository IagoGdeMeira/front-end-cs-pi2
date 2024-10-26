export const areRequiredFieldsFilled = (discipline) => {
    const requiredFields = [
        'disciplineName',
        'disciplineCode'
    ];

    return requiredFields.every((field) => {
        return discipline[field] && discipline[field].trim() !== '';
    });
};