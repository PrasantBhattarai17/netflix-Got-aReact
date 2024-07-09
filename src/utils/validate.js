
export const validateData = (email,password) => {
 
    const iSEmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);


    if(!iSEmail)  return "Email is not valid!";
    if(!isPassword)  return "Passwod is not valid!"

    else return null;


};

