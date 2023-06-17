import scanf from "scanf"
import { characters, char } from "./Ficha dos Personagens.js"

function speedModifier(char) {
    let weight = 0
    char.items.forEach((item) => {
        weight += item.weight
    })
    console.log("Peso: ", weight)
    modSpeed = char.speed.current * (1 - weight / char.strength.current)

}
function resetAllDamage() {
    damage.impact = 0
    damage.slash = 0
    damage.total = 0
}

let chosenSuccess = 0
function resolvingDamage(fail, block, success1, success2) {
    skills[chosenSkill.name](resChar.impact.block, resChar.slash.block, 1)
    damageAgainst[0].block = damage.total
    resetAllDamage()
    skills[chosenSkill.name](resChar.impact.nv1, resChar.slash.nv1, 2)
    damageAgainst[1].block = damage.total
    resetAllDamage()
    skills[chosenSkill.name](resChar.impact.nv2, resChar.slash.nv2, 3)
    damageAgainst[2].block = damage.total
    resetAllDamage()
    skills[chosenSkill.name](resChar.impact.nv3, resChar.slash.nv3, 4)
    damageAgainst[3].block = damage.total
    resetAllDamage()
    let biggerDamage = 0
    damageAgainst.forEach((db) => {
        if (db.block > biggerDamage) {
            biggerDamage = db.block
        }
    })
    console.log("Capacidade de acerto: " + success + "\nEsquiva: " + fail + "\nBloqueio: " + block + "\nAcerto superficial: " + success1 + "\nAcerto mediano: ", success2)
    console.log("biggerDamage: ", biggerDamage)

    console.log("Escolha o tipo de acerto:\n (1)Esquiva: 0 de dano \n(2)Dano contra block: " + damageAgainst[0].block + "\n(3)Dano superficial: " + damageAgainst[1].block + "\n(4)Dano medio: " + damageAgainst[2].block + "\n(5)Dano em ponto fatal: ", damageAgainst[3].block)
    chosenSuccess = scanf("%d")
    if (chosenSuccess == 1) {
        if (success < 0) {
            success = (dodgeDef - atkSuccess) * 100 / dodgeDef
            console.log("Chance de esquiva: ", success)
        }
        atkCharacter.stamina.current -= (atkSuccess / 100)
        defCharacter.stamina.current -= (atkSuccess + atkSuccess * (1 + success / 100)) / 100
        console.log("Stamina atacante: ", + atkCharacter.stamina.current + ", Stamina defensor: ", defCharacter.stamina.current)
    } else if (chosenSuccess == 2) {
        skills[chosenSkill.name](resChar.impact.block, resChar.slash.block, 1)
        lifeDiscount("Bloqueio")
    } else if (chosenSuccess == 3) {
        skills[chosenSkill.name](resChar.impact.nv1, resChar.slash.nv1, 2)
        lifeDiscount("superficial")
    } else if (chosenSuccess == 4) {
        skills[chosenSkill.name](resChar.impact.nv2, resChar.slash.nv2, 3)
        lifeDiscount("importante")
    } else if (chosenSuccess == 5) {
        skills[chosenSkill.name](resChar.impact.nv3, resChar.slash.nv3, 4)
        lifeDiscount("fatal")
    } else { console.log("erro na escolha") }
}

let skills = {
    slashSword: function (impactRes, slashRes, charResMod) {
        damage.impact = (atkWeapon.damage.impact.base + atkWeapon.damage.impact.scale * atkCharacter.strength.current) - (impactRes + defCharacter.resistance.impact.current / charResMod)
        damage.slash = (atkWeapon.damage.slash.base + atkWeapon.damage.slash.scale * atkCharacter.dexterity.current) - (slashRes + defCharacter.resistance.slash.current / charResMod)
        if (damage.impact > 0) {
            damage.total += damage.impact
            console.log("Dano de impacto: ", damage.impact)
        } else {
            repel += damage.impact
            console.log("Defesa de impacto: ", damage.impact)
        }
        if (damage.slash > 0) {
            damage.total += damage.slash
            console.log("Dano de corte: ", damage.slash)
        } else {
            repel += damage.slash
            console.log("Defesa de corte: ", damage.slash)
        }
    },
    swordBlock: function () {
        resChar.impact.block += 4
        resChar.slash.block += 10
        hitChance.fail += -100
        hitChance.block += 10
        resolvingDamage(hitChance.fail, hitChance.block, hitChance.success1, hitChance.success2)
        if (chosenSuccess != 1) { atkSuccessStaminaResolution() }
    },
    mhBlock: function () {
        resChar.impact.block += 20
        resChar.slash.block += 20
        hitChance.fail += -100
        hitChance.block += 10
        resolvingDamage(hitChance.fail, hitChance.block, hitChance.success1, hitChance.success2)
        if (chosenSuccess == 2) { if (damageAgainst[1].block > 0) { defWeapon.durability.current -= damageAgainst[1].block } }
    },
    dodgeSkill: function () {
        hitChance.block == hitChance.fail
        resolvingDamage(hitChance.fail, hitChance.block, hitChance.success1, hitChance.success2)
        if (chosenSuccess != 1) { atkSuccessStaminaResolution() }
    }
}

//ESCOLHA ATAQUE
console.log("Escolha o personagem atacante")
let characterName = "Meia Noite"  //scanf("%S")
let atkCharacter = characters.find(personagem => personagem.name == characterName)
//console.log(atkCharacter)
console.log("Escolha a arma de para atacar")
let weaponName = "sword" //scanf("%S")
let atkWeapon = atkCharacter.items.find(items => items.name == weaponName)
//console.log(atkWeapon)
console.log("Escolha a skill da arma")
let choosingSkill = "slashSword" //scanf("%S")
let chosenSkill = atkWeapon.skill.atk.find(items => items.name == choosingSkill)
//Somando atributos do atacante
let modSatminaAtk = atkCharacter.stamina.current / atkCharacter.stamina.max
let modSpeed = 0
speedModifier(atkCharacter)
let atkSuccess = 0
let modMhA = 0
console.log("Ditige o valor do dado do atacante")
if (chosenSkill.movementType == "fisic") {
    atkSuccess = ((atkCharacter.dexterity.current + atkCharacter.perception.current) + 2 * modSpeed) / 4
    atkSuccess = (atkSuccess + scanf("%f") * 10) * modSatminaAtk
} else if (chosenSkill.movementType == "mh") {
    modMhA = atkWeapon.durability.current / atkWeapon.durability.max
    atkSuccess += (atkCharacter.magicPower.current + scanf("%f") * 10) * modMhA
}
console.log("Poder de acerto de ataque: ", atkSuccess)

//ESCOLHA DE DEFESA
console.log("Escolha o personagem defensor")
characterName = "npc" //scanf("%S")
let defCharacter = characters.find(personagem => personagem.name == characterName)
//console.log(defCharacter)
console.log("Escolha a arma para defender")
weaponName = "sword" //scanf("%S")
let defWeapon = defCharacter.items.find(items => items.name == weaponName)
//console.log(atkWeapon)
console.log("Escolha o movimento de defesa")
choosingSkill = "swordBlock" //scanf("%S")
let chosenDefSkill = defWeapon.skill.def.find(items => items.name == choosingSkill)
// somando atributos do defensor
let modSatminaDef = defCharacter.stamina.current / defCharacter.stamina.max
speedModifier(defCharacter)
let dodgeDef = 0
let modMhD = 0
console.log("Ditige o valor do dado do defensor")
if (chosenDefSkill.movementType == "fisic") {
    dodgeDef = ((defCharacter.dexterity.current + defCharacter.perception.current) + 2 * modSpeed) / 4
    dodgeDef = (dodgeDef + scanf("%f") * 10) * modSatminaDef
} else if (chosenDefSkill.movementType == "mh") {
    modMhD = defWeapon.durability.current / defWeapon.durability.max
    dodgeDef = (defCharacter.magicPower.current + scanf("%f") * 10) * modMhD
}

//CALCULO DE ACERTO

//somando resistencia dos equipamentos
let resChar = {
    slash: { block: 0, nv1: 0, nv2: 0, nv3: 0 },
    impact: { block: 0, nv1: 0, nv2: 0, nv3: 0 }
}
defCharacter.items.forEach((item) => {
    if (item.equipped == true) {
        resChar.impact.block += item.resistance.impact.nv1
        resChar.impact.nv1 += item.resistance.impact.nv1
        resChar.impact.nv2 += item.resistance.impact.nv2
        resChar.impact.nv3 += item.resistance.impact.nv3
        resChar.slash.block += item.resistance.slash.nv1
        resChar.slash.nv1 += item.resistance.slash.nv1
        resChar.slash.nv2 += item.resistance.slash.nv2
        resChar.slash.nv3 += item.resistance.slash.nv3
    }
})
console.log("resChar.impact.nv1: " + resChar.impact.nv1 + ",  resChar.impact.nv2: " + resChar.impact.nv2 + " resChar.impact.nv3", resChar.impact.nv3)
console.log("resChar.slash.nv1: " + resChar.slash.nv1 + ",  resChar.slash.nv2: " + resChar.slash.nv2 + " resChar.slash.nv3", resChar.slash.nv3)

//calculando superioridade do acerto 
let success = (atkSuccess - dodgeDef) * 100 / atkSuccess
console.log("atkSuccess: ", + atkSuccess + ", dodgeDef: ", + dodgeDef + ", success: ", success)


//RESOLUÇÃO DE ACERTO E DANO
let damage = { impact: 0, slash: 0, total: 0 }
let repel = 0

//functions
function atkSuccessStaminaResolution() {
    if (chosenSkill.movementType == "fisic") {
        atkCharacter.stamina.current -= (atkSuccess / 100)
        atkCharacter.stamina.xp += atkSuccess / 1000
    }
    if (chosenDefSkill.movementType == "fisic") {
        defCharacter.stamina.current -= (dodgeDef / 100)
        defCharacter.stamina.xp += dodgeDef / 1000
    }
}
function lifeDiscount(typeDamage) {
    if (damage.total > 0) {
        defCharacter.life.current -= damage.total
        console.log("Dano: " + damage.total + " , em um ponto ", typeDamage)
        defCharacter.life.xp += damage.total / 10
    } else {
        console.log("dano: " + damage.total + " , em um ponto ", typeDamage)
    }
}


//resolvendo dano
let damageAgainst = [{ block: 0 }, { block: 0 }, { block: 0 }, { block: 0 }]
let hitChance = { fail: 0, block: 0, success1: 0, success2: 0 }
hitChance.fail += chosenSkill.hitChance.fail
hitChance.block += chosenSkill.hitChance.block
hitChance.success1 += chosenSkill.hitChance.success1
hitChance.success2 += chosenSkill.hitChance.success2
skills[chosenDefSkill.name]()
console.log("Vida atual do defensor: " + defCharacter.life.current + " Stamina atual do defensor: " + defCharacter.stamina.current + " stamina atual do atacente: ", atkCharacter.stamina.current)