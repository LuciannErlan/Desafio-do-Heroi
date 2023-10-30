let heroName = 'Luciann Erlãn'; // Coloque o nome do herói aqui
let xp = 3100; // Coloque o xp do herói aqui

let level = '';

if (xp < 1000) {
    level = "ferro";
} else if (xp>=1001 && xp<=2000){
    level = "bronze";
} else if (xp>=2001 && xp<=5000){
    level = "prata";
} else if (xp>=6001 && xp<=7000){
    level = "ouro";
} else if (xp>=5001 && xp<=8000){
    level = "platina";
} else if (xp>=8001 && xp<=9000){
    level = "ascendente";
} else if (xp>=9001 && xp<=10000){
    level = "imortal";
} else if (xp>=10001){
    level = "radiante";
}

console.log("O herói de nome " + heroName + " está no nível " + level);