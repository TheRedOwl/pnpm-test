export function isTrianglePossible(a, b, c){
    const enoughArg = arguments.length==3
    const allIsNumber = [a,b,c].every(nr=>typeof(nr)=="number")
    const allIsPositive = [a,b,c].every(nr=>nr>0)
    const isPossible = a+b>c && a+c>b && b+c>a
    return enoughArg && allIsNumber && allIsPositive && isPossible
}

console.log(isTrianglePossible(4,3,6))
//console.log(typeof(1));