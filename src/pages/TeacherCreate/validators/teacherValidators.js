const validateRG = (rg) => {
    const rgRegex = /^[0-9]{1,2}(\.[0-9]{3}){2}-[0-9X]$|^[A-Za-z]{1,2}-[0-9]{2}(\.[0-9]{3}){2}-[0-9X]$|^[0-9]{1,9}[A-Za-z0-9]*$/;
    const rgNormalized = rg.replace(/[.\-_\s]/g, '');

    return rgRegex.test(rg) || /^[0-9]+$/.test(rgNormalized);
};