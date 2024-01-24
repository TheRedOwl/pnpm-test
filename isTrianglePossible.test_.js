import { text,expect } from "@jest/globals";
import { isTrianglePossible } from "./isTrianglePossible";

test("megvan benne a 3 szám",()=>{
    const result=isTrianglePossible(4,3,6)
    expect(result).toBe(true)
})

test("nincs meg a 3 szám",()=>{
    const result1=isTrianglePossible(4,3)
    expect(result1).toBe(false)
    const result2=isTrianglePossible(4)
    expect(result2).toBe(false)
    const result3=isTrianglePossible()
    expect(result3).toBe(false)
})

test("mind a 3 karakter egy szám",()=>{
    const result=isTrianglePossible(4,3,6)
    expect(result).toBe(true)
})

test("megvan a 3 karakter, de nem mindegyik szám",()=>{
    const result=isTrianglePossible(4,"a",6)
    expect(result).toBe(false)
})

test("mindegyik pozitív",()=>{
    const result=isTrianglePossible(4,3,6)
    expect(result).toBe(true)
})

test("van negatív vagy 0 szám is",()=>{
    const result1=isTrianglePossible(-4,3,6)
    expect(result1).toBe(false)
    const result2=isTrianglePossible(0,3,6)
    expect(result2).toBe(false)
})

test("minden szám pozitív és megfelel a háromszög képzési szabálynak",()=>{
    const result=isTrianglePossible(4,3,6)
    expect(result).toBe(true)
})

test("minden szám pozitív, de nem felel meg a háromszög képzési szabálynak",()=>{
    const result=isTrianglePossible(3,3,6)
    expect(result).toBe(false)
})