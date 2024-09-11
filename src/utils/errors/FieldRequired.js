import ValidationError from './ValidationError';

class FieldRequiredError extends ValidationError {
    constructor(field) {
        super(`The field ${field} is required`, field);
        this.name = "FieldRequiredError";
    }
}

export default FieldRequiredError;