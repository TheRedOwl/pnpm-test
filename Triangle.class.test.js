import { text,expect } from "@jest/globals";
import { Triangle } from "./Triangle.class";

describe("isAllNumber()",()=>{
    test("megkap 3 számot",()=>{
        const triangle=new Triangle(2,3,4)
        expect(triangle.isAllNumber()).toBe(true)
    })
    test("nincs 3 adat",()=>{
        const triangle=new Triangle(2,3)
        expect(triangle.isAllNumber()).toBe(false)
    })
    test("nem kap adatot",()=>{
        const triangle=new Triangle()
        expect(triangle.isAllNumber()).toBe(false)
    })
    test("nem számot kapott adatnak",()=>{
        const triangle=new Triangle(2,3,"a")
        expect(triangle.isAllNumber()).toBe(false)
    })
})

describe("isPossible()",()=>{
    test("minden adat egy szám és megfelel a háromszög képzésnek",()=>{
        const triangle=new Triangle(2,3,4)
        expect(triangle.isPossible()).toBe(true)
    })
    test("valamelyik adat(ok) túl kicsi(k) vagy túl nagy(ok)",()=>{
        const triangle=new Triangle(2,3,50)
        expect(triangle.isPossible()).toBe(false)
    })
})

describe("equilateral()",()=>{
    test("nem 3 egyforma szám van megadva",()=>{
        const triangle=new Triangle(2,3,4)
        expect(triangle.equilateral()).toBe(false)
    })
    test("3 egyforma szám van megadva",()=>{
        const triangle=new Triangle(2,2,2)
        expect(triangle.equilateral()).toBe(true)
    })
})

describe("isosceles()",()=>{
    test("2 egyforma számot kap és egy harmadik különbözőt",()=>{
        const triangle=new Triangle(2,2,3)
        expect(triangle.isosceles()).toBe(true)
    })
    test("nem kap két egyforma számot",()=>{
        const triangle=new Triangle(2,3,4)
        expect(triangle.isosceles()).toBe(false)
    })
})

describe("rectangular()",()=>{
    test("pitagorasz tételnek megfelelő számokat adtunk meg",()=>{
        const triangle=new Triangle(3,4,5)
        expect(triangle.rectangular()).toBe(true)
    })
    test("nem felelnek meg a számko a pitagorasz tételnek",()=>{
        const triangle=new Triangle(2,2,3)
        expect(triangle.rectangular()).toBe(false)
    })
})

describe("result()",()=>{
    test("egy általános háromoszöget kapsz meg",()=>{
        const triangle=new Triangle(4,5,6)
        expect(triangle.result()).toBe("általános")
    })
    test("egy derékszögű háromszöget kapsz",()=>{
        const triangle=new Triangle(3,4,5)
        expect(triangle.result()).toBe("a háromszög derékszögű")
    })
    test("egy egyenlő oldalú háromszöget kapsz",()=>{
        const triangle=new Triangle(2,2,2)
        expect(triangle.result()).toBe("a háromszög egyenlő oldalú")
    })
    test("egy egyenlő szárú háromszöget kapsz",()=>{
        const triangle=new Triangle(2,2,3)
        expect(triangle.result()).toBe("a háromszög egyenlő szárú")
    })
    test("nem megfelelő adatokat kapott",()=>{
        const triangle=new Triangle(2,2,50)
        expect(triangle.result()).toBe("a háromszög nem szerkeszthető")
    })
    test("nem kapott elég adatot",()=>{
        const triangle=new Triangle(2,2)
        expect(triangle.result()).toBe("hibás argumentumok")
    })
    
})