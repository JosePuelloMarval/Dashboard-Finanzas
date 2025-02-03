export const validatorEmail = (email: string): boolean => {
    const pattern = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,10}$/;
    return pattern.test(email);
};