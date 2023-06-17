let char = {
    atk: null,
    def: null
}
let characters = [{
    name: "Meia Noite",
    life: { max: 30, current: 30, xp: 0 },
    strength: { max: 30, current: 30, xp: 0 },
    resistance: {
        impact: { max: 50, current: 30, xp: 0 },
        slash: { max: 50, current: 30, xp: 0 },
    },
    stamina: { max: 30, current: 30, xp: 0 },
    will: { max: 30, current: 30, xp: 0 },
    speed: { max: 30, current: 30, xp: 0 },
    dexterity: { max: 30, current: 30, xp: 0 },
    charisma: { max: 30, current: 30, xp: 0 },
    perception: { max: 30, current: 30, xp: 0 },
    manaEnergy: { max: 30, current: 30, xp: 0 },
    magicPower: { max: 30, current: 30, xp: 0 },
    skills: [

    ],
    items: [{
        name: "sword",
        weight: 1,//Kg
        damage: {
            slash: { base: 7, scale: 0.7 },
            impact: { base: 2, scale: 0.2 },
        },
        resistance: {
            slash: { nv1: 1, nv2: 0, nv3: 0 },
            impact: { nv1: 0.5, nv2: 0, nv3: 0 }
        },
        durability: { max: 40, current: 40 },
        skill: {
            atk: [
                {
                    name: "slashSword",
                    description: "Golpe normal com a espada",
                    hitChance: { fail: 0, block: 10, success1: 20, success2: 35 },
                    movementType: "fisic"
                },
                {
                    name: "stab",
                    description: "Estocada com a espada",
                    hitChance: { fail: -10, block: 0, success1: 10, success2: 25 },
                    movementType: "fisic"
                },
            ],
            def: [
                {
                    name: "swordBlock",
                    description: "bloquear ataque usando a espada",
                    hitChanceMod: { fail: -30, block: 5, success1: 5, success2: 5 },
                    movementType: "fisic"
                }
            ]
        },
        equipped: true,
        // }, {
        //     name: "gloves",
        //     weight: 1.6,//Kg
        //     damage: {
        //         slash: { base: 0, scale: 0 },
        //         impact: { base: 0, scale: 0 },
        //     },
        //     resistance: {
        //         slash: { nv1: 4, nv2: 0, nv3: 0 },
        //         impact: { nv1: 2, nv2: 0, nv3: 0 }
        //     },
        //     skill: {
        //         atk: [
        //         ],
        //         def: [
        //         ]
        //     },
        //     equipped: true,
        // }, {
        //     name: "boots",
        //     weight: 1.6,//Kg
        //     damage: {
        //         slash: { base: 0, scale: 0 },
        //         impact: { base: 0, scale: 0 },
        //     },
        //     resistance: {
        //         slash: { nv1: 4, nv2: 0, nv3: 0 },
        //         impact: { nv1: 2, nv2: 0, nv3: 0 }
        //     },
        //     skill: {
        //         atk: [
        //         ],
        //         def: [
        //         ]
        //     },
        //     equipped: true,
        // }, {
        //     name: "pants",
        //     weight: 5,//Kg
        //     damage: {
        //         slash: { base: 0, scale: 0 },
        //         impact: { base: 0, scale: 0 },
        //     },
        //     resistance: {
        //         slash: { nv1: 2, nv2: 5, nv3: 0 },
        //         impact: { nv1: 1, nv2: 2, nv3: 0 }
        //     },
        //     skill: {
        //         atk: [
        //         ],
        //         def: [
        //         ]
        //     },
        //     equipped: true,
        // }, {
        //     name: "armor",
        //     weight: 10,//Kg
        //     damage: {
        //         slash: { base: 0, scale: 0 },
        //         impact: { base: 0, scale: 0 },
        //     },
        //     resistance: {
        //         slash: { nv1: 0, nv2: 5, nv3: 2 },
        //         impact: { nv1: 0, nv2: 2, nv3: 1 }
        //     },
        //     skill: {
        //         atk: [
        //         ],
        //         def: [
        //         ]
        //     },
        //     equipped: true,
        // }, {
        //     name: "helmet",
        //     weight: 1.6,//Kg
        //     damage: {
        //         slash: { base: 0, scale: 0 },
        //         impact: { base: 0, scale: 0 },
        //     },
        //     resistance: {
        //         slash: { nv1: 0, nv2: 0, nv3: 3 },
        //         impact: { nv1: 0, nv2: 0, nv3: 1 }
        //     },
        //     skill: {
        //         atk: [
        //         ],
        //         def: [
        //         ]
        //     },
        //     equipped: true,
    }
    ],
}, {
    name: "npc",
    life: { max: 30, current: 30, xp: 0 },
    strength: { max: 30, current: 30, xp: 0 },
    resistance: {
        impact: { max: 50, current: 30, xp: 0 },
        slash: { max: 50, current: 30, xp: 0 },
    },
    stamina: { max: 30, current: 30, xp: 0 },
    will: { max: 30, current: 30, xp: 0 },
    speed: { max: 30, current: 30, xp: 0 },
    dexterity: { max: 30, current: 30, xp: 0 },
    charisma: { max: 30, current: 30, xp: 0 },
    perception: { max: 30, current: 30, xp: 0 },
    manaEnergy: { max: 30, current: 30, xp: 0 },
    magicPower: { max: 30, current: 30, xp: 0 },
    skills: [

    ],
    items: [{
        name: "sword",
        weight: 1,//Kg
        damage: {
            slash: { base: 7, scale: 0.7 },
            impact: { base: 2, scale: 0.2 },
        },
        resistance: {
            slash: { nv1: 1, nv2: 0, nv3: 0 },
            impact: { nv1: 0.5, nv2: 0, nv3: 0 }
        },
        durability: { max: 40, current: 40 },
        skill: {
            atk: [
                {
                    name: "slashSword",
                    description: "Golpe normal com a espada",
                    hitChance: { fail: 0, block: 10, success1: 20, success2: 35 },
                    movementType: "fisic"
                },
                {
                    name: "stab",
                    description: "Estocada com a espada",
                    hitChance: { fail: -10, block: 0, success1: 10, success2: 25 },
                    movementType: "fisic"
                },
            ],
            def: [
                {
                    name: "swordBlock",
                    description: "bloquear ataque usando a espada",
                    hitChanceMod: { fail: -30, block: 5, success1: 5, success2: 5 },
                    movementType: "fisic"
                }
            ]
        },
        equipped: true,
        // }, {
        //     name: "gloves",
        //     weight: 1.6,//Kg
        //     damage: {
        //         slash: { base: 0, scale: 0 },
        //         impact: { base: 0, scale: 0 },
        //     },
        //     resistance: {
        //         slash: { nv1: 4, nv2: 0, nv3: 0 },
        //         impact: { nv1: 2, nv2: 0, nv3: 0 }
        //     },
        //     skill: {
        //         atk: [
        //         ],
        //         def: [
        //         ]
        //     },
        //     equipped: true,
        // }, {
        //     name: "boots",
        //     weight: 1.6,//Kg
        //     damage: {
        //         slash: { base: 0, scale: 0 },
        //         impact: { base: 0, scale: 0 },
        //     },
        //     resistance: {
        //         slash: { nv1: 4, nv2: 0, nv3: 0 },
        //         impact: { nv1: 2, nv2: 0, nv3: 0 }
        //     },
        //     skill: {
        //         atk: [
        //         ],
        //         def: [
        //         ]
        //     },
        //     equipped: true,
        // }, {
        //     name: "pants",
        //     weight: 5,//Kg
        //     damage: {
        //         slash: { base: 0, scale: 0 },
        //         impact: { base: 0, scale: 0 },
        //     },
        //     resistance: {
        //         slash: { nv1: 2, nv2: 5, nv3: 0 },
        //         impact: { nv1: 1, nv2: 2, nv3: 0 }
        //     },
        //     skill: {
        //         atk: [
        //         ],
        //         def: [
        //         ]
        //     },
        //     equipped: true,
        // }, {
        //     name: "armor",
        //     weight: 10,//Kg
        //     damage: {
        //         slash: { base: 0, scale: 0 },
        //         impact: { base: 0, scale: 0 },
        //     },
        //     resistance: {
        //         slash: { nv1: 0, nv2: 5, nv3: 2 },
        //         impact: { nv1: 0, nv2: 2, nv3: 1 }
        //     },
        //     skill: {
        //         atk: [
        //         ],
        //         def: [
        //         ]
        //     },
        //     equipped: true,
        // }, {
        //     name: "helmet",
        //     weight: 1.6,//Kg
        //     damage: {
        //         slash: { base: 0, scale: 0 },
        //         impact: { base: 0, scale: 0 },
        //     },
        //     resistance: {
        //         slash: { nv1: 0, nv2: 0, nv3: 3 },
        //         impact: { nv1: 0, nv2: 0, nv3: 1 }
        //     },
        //     skill: {
        //         atk: [
        //         ],
        //         def: [
        //         ]
        //     },
        //     equipped: true,
    }],
}, {
    name: "Nglawan",
    life: { max: 40, current: 30, xp: 0 },
    strength: { max: 60, current: 30, xp: 0 },
    resistance: {
        impact: { max: 50, current: 30, xp: 0 },
        slash: { max: 50, current: 30, xp: 0 },
    },
    stamina: { max: 60, current: 30, xp: 0 },
    will: { max: 30, current: 30, xp: 0 },
    speed: { max: 30, current: 30, xp: 0 },
    dexterity: { max: 30, current: 30, xp: 0 },
    charisma: { max: 30, current: 30, xp: 0 },
    perception: { max: 30, current: 30, xp: 0 },
    manaEnergy: { max: 30, current: 30, xp: 0 },
    magicPower: { max: 30, current: 30, xp: 0 },
    skills: [

    ],
    items: [{
        name: "Mãos magicas",
        weight: 0,//Kg
        damage: {
            slash: { base: 0, scale: 0 },
            impact: { base: 7, scale: 0.7 },
        },
        resistance: {
            slash: { nv1: 0, nv2: 0, nv3: 0 },
            impact: { nv1: 0, nv2: 0, nv3: 0 }
        },
        durability: { max: 40, current: 40 },
        skill: {
            atk: [
                {
                    name: "mhPunch",
                    description: "Soco com a Mão magica",
                    hitChance: { fail: 0, block: 10, success1: 20, success2: 35 },
                    movementType: "mh"
                },
            ],
            def: [
                {
                    name: "mhBlock",
                    description: "bloquear ataque usando a mão magica",
                    hitChanceMod: { fail: -30, block: 5, success1: 5, success2: 5 },
                    movementType: "mh"
                }
            ]
        },
        equipped: true,
    }],
}]
export { characters, char }