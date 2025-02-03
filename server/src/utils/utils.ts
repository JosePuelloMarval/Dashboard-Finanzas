export const validatorEmail = (email: string): boolean => {
    const pattern = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,10}$/;
    return pattern.test(email);
};

export const validaTel = (tel: string): boolean => {
    const pattern = /^\+?\d{1,3}?[-.\s]?\(?\d{2,4}\)?[-.\s]?\d{3,4}[-.\s]?\d{4}$/;
    return pattern.test(tel);
};