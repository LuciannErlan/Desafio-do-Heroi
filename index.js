// Solicita ao usuário o nome do herói e o XP
var nomeHeroi = prompt("Digite o nome do herói:");
var xp = parseInt(prompt("Digite a quantidade de experiência (XP) do herói:"));

// Verifica o nível do herói com base no XP
var nivelHeroi;

if (xp < 1000) {
  nivelHeroi = "ferro";
} else if (xp >= 1001 && xp <= 2000) {
  nivelHeroi = "bronze";
} else if (xp >= 2001 && xp <= 5000) {
  nivelHeroi = "prata";
} else if (xp >= 6001 && xp <= 7000) {
  nivelHeroi = "ouro";
} else if (xp >= 5001 && xp <= 8000) {
  nivelHeroi = "platina";
} else if (xp >= 8001 && xp <= 9000) {
  nivelHeroi = "ascendente";
} else if (xp >= 9001 && xp <= 10000) {
  nivelHeroi = "imortal";
} else if (xp >= 10001) {
  nivelHeroi = "radiante";
}

// Exibe a mensagem com o nome e o nível do herói
console.log("O herói de nome " + nomeHeroi + " está no nível " + nivelHeroi);