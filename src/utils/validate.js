
export const checkValidData = (email,password) =>{

    const isEmailValid = /(.+)@(.+){2,}\.(.+){2,}/.test(email);
    const isPasswordValid = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);

    if(!isEmailValid) return "Email ID is not Valid";
    if(!isPasswordValid) return "Password is not Valid";
    return null;
}