export const areRequiredFieldsFilled = (object, requiredFields) => {
    return requiredFields.every((field) => {
        const value = object[field];
        
        if (typeof value === 'string') return value.trim() !== '';
        if (typeof value === 'number') return !isNaN(value);
        if (typeof value === 'boolean') return value === true || value === false;
        if (Array.isArray(value)) return value.length > 0;
        if (value instanceof Date) return !isNaN(value.getTime());
        
        return value !== null && value !== undefined;
    });
};