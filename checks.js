import scanf from "scanf"
import { characters, char } from "./Ficha dos Personagens.js"

let attributesXpMod = 0
function addXp(att) {
    attributesXpMod = 0
    attributesXp[att] = attributesXp[att] / i
    attributesXpMod = attributesXp[att] / attributes
    attributesXp[att] += attributesXpMod * dice
    character[att].xp += attributesXp[att] / 10
    console.log("Xp de " + att + ": ", character[att].xp)
}

console.log("Selecione o personagem que fara o teste")
let characterName = scanf("%S")
let character = characters.find(personagem => personagem.name == characterName)
console.log("Digite o atributos do teste, quando acabar digite finish")
let answer = scanf("%S")
let i = 0
let attributes = 0
let attributesXp = {
    life: 0,
    strength: 0,
    resistance: 0,
    stamina: 0,
    will: 0,
    speed: 0,
    dexterity: 0,
    charisma: 0,
    perception: 0,
    manaEnergy: 0,
    magicPower: 0
}
while (answer != 'finish') {
    attributes += character[answer].current
    attributesXp[answer] += character[answer].current
    i++
    answer = scanf("%S")
}
attributes = attributes / i
console.log("Digite o valor do dado")
let dice = scanf("%f") * 10
addXp("life")
addXp("strength")
addXp("resistance")
addXp("stamina")
addXp("will")
addXp("speed")
addXp("dexterity")
addXp("charisma")
addXp("perception")
addXp("manaEnergy")
addXp("magicPower")
attributes += dice
console.log("Teste de habilidade = ", attributes)