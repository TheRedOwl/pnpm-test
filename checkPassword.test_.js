import { text,expect } from "@jest/globals";

import { checkPassword } from "./checkPassword";

test("7-nél kevesebb karakter esetén false-t ad vissza",()=>{
    const result=checkPassword("uaA1")
    expect(result).toBe(false)
})

test("Nincs benne nagybetű",()=>{
    const result=checkPassword("asdas11")
    expect(result).toBe(false)
})

test("Nincs benne kisbetű",()=>{
    const result=checkPassword("ASDSAS11")
    expect(result).toBe(false)
})

test("Nincs benne szám",()=>{
    const result=checkPassword("asdasAS")
    expect(result).toBe(false)
})

test("van benne felkiáltó jel vagy alsó vonal",()=>{
    const result=checkPassword("a_dAS1!")
    expect(result).toBe(true)
})

test("Nincs benne felkiáltó jel vagy alsó vonal",()=>{
    const result=checkPassword("asASs11")
    expect(result).toBe(false)
})