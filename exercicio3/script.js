//Crie a const para a frase aqui
const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\""

const fraseTrocada = frase.replace("verde","rosa").replace("azul","laranja")

console.log(fraseTrocada.includes("verde")+"\n"+fraseTrocada.includes("laranja"))



const index=fraseTrocada.indexOf("\"")

const frase1=fraseTrocada.slice(0,index)
const frase2=fraseTrocada.slice(index).toUpperCase()

console.log(frase1+frase2)