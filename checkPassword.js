export function checkPassword(pw){
    const upper=/[A-Z]/.test(pw)
    const lower=/[a-z]/.test(pw)
    const number=/\d/.test(pw)
    const length=pw.length==7
    const icon=/[!,_]/.test(pw)
    return upper && lower && number && length && icon
}