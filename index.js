// Solicita ao usuário o nome do herói e o XP
var nomeheroi = prompt("Digite o nome do herói:");
var xp = parseInt(prompt("Digite a quantidade de experiência (XP) do herói:"));

// Verifica o nível do herói com base no XP
var nivelheroi;

if (xp < 1000) {
  nivelheroi = "ferro";
} else if (xp >= 1001 && xp <= 2000) {
  nivelheroi = "bronze";
} else if (xp >= 2001 && xp <= 5000) {
  nivelheroi = "prata";
} else if (xp >= 6001 && xp <= 7000) {
  nivelheroi = "ouro";
} else if (xp >= 5001 && xp <= 8000) {
  nivelheroi = "platina";
} else if (xp >= 8001 && xp <= 9000) {
  nivelheroi = "ascendente";
} else if (xp >= 9001 && xp <= 10000) {
  nivelheroi = "imortal";
} else if (xp >= 10001) {
  nivelheroi = "radiante";
}

// Exibe a mensagem com o nome e o nível do herói
console.log("O herói de nome " + nomeheroi + " está no nível " + nivelheroi);