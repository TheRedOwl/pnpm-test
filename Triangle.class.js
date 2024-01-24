export class Triangle{
    constructor(a,b,c){
        this.a=a
        this.b=b
        this.c=c
    }

    isAllNumber(){
        return [this.a,this.b,this.c].every(nr=>typeof(nr)=="number")
    }
    isPossible(){
        return this.a+this.b>this.c && this.a+this.c>this.b && this.b+this.c>this.a
    }
    equilateral(){
        return this.a == this.b && this.a == this.c
    }
    isosceles(){
        return this.a == this.b || this.b == this.c || this.c == this.a
    }
    rectangular(){
        return this.a**2 + this.b**2 == this.c**2 || this.b**2 + this.c**2 == this.a**2 || this.c**2 + this.a**2 == this.b**2
    }
    

    result(){
        if(!this.isAllNumber()) return "hibás argumentumok"
        if(!this.isPossible()) return "a háromszög nem szerkeszthető"
        if(this.equilateral()) return "a háromszög egyenlő oldalú"
        if(this.isosceles() && this.rectangular()) return "a háromszög egyenlő szárú és derékszögű is"
        if(this.isosceles()) return "a háromszög egyenlő szárú"
        if(this.rectangular()) return "a háromszög derékszögű"
        return "általános"
    }


}   

let h1=new Triangle(5,5,(3*Math.sqrt(2)))
console.log(h1.result());