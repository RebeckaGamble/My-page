export default function validateInfo(values) {
    let errors = {}

    if(!values.username.trim()){
        errors.username = "Användarnamnet är fel!"
    }

    if(!values.email) {
        errors.email = "E-post måste fyllas i!"
    } else if(!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "E-post addressen är fel!"
    }

    if(!values.password) {
        errors.password = "Lösenord krävs!"
    } else if (values.password.length < 6) {
        errors.password = "Lösenordet måste bestå av minst 6 tecken!"
    }

    if(!values.password2) {
        errors.password2 = "Lösenörd krävs!"
    } else if (values.password2 !== values.password) {
        errors.password2 = "Lösenorden måste överensstämma!"
    }

    return errors;
}