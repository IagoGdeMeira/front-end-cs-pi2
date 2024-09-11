import ValidationError from './ValidationError';

class IntegerValidationError extends ValidationError {
    constructor(field) {
        super(`The field ${field} must be an integer`, field);
        this.name = "IntegerValidationError";
    }
}

export default IntegerValidationError;