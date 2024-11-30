export const validateRG = (rg) => {
    const rgPatterns = [
        /\d{2}\.\d{3}\.\d{3}-\d{1}/,
        /[A-Z]{2}-\d{2}\.\d{3}\.\d{3}/,
        /\d{2}\/\d{6}-\d{1}/,
    ];

    return rgPatterns.some((pattern) => pattern.test(rg));
};

export const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
};

export const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /\(\d{2}\) \d{4,5}-\d{4}/;

    return phoneNumberPattern.test(phoneNumber);
};