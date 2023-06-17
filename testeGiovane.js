// let MeiaNoite = [1,2,3] , meiodia = [3,4,5]
// console.log(MeiaNoite[0]+meiodia[0])
/*console.log(Personagens[0].nome)
console.log(Personagens[1].destreza)*/

import { personagens } from "./Ficha dos Personagens"

personagens
personagens.push({
    nome: "Biluleibe",
    destreza: 5
})
/*console.log(Personagens)
console.log(Personagens.find(personagem => personagem.nome == "Meia Noite"))
let personagem_encontrado = Personagens.find(personagem => personagem.nome == "Meia Noite")
console.log(personagem_encontrado)*/
let PersonagensRapidos = personagens.filter(p => p.destreza > 2)
console.log(PersonagensRapidos)