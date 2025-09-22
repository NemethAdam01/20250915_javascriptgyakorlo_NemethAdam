function emailValidator(email)
{
    let char = "@"
    if (char.test(email)) {
        return true
    }
    if (!char.test(email)) {
        return false
    }
}
let a = prompt("írja be az emailjét:")
console.log(emailValidator(a))