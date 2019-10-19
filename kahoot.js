//YouTube: Dany
//https://www.youtube.com/channel/UCrErtqJnvWiz9FEKYTTpFUg?sub_confirmation=1

var Kahoot = require("kahoot.js-updated");
var colors = require("colors");

var p = "YouTube: Dany"

if(process.argv.length <= 2) {//Si l'argument 2 est vide
	console.log("Utilisation: node kahoot.js <pin> <nombre de bots>".green);
	console.log("Exemple: \nnode kahoot.js 123456 120".green);
	process.exit(-1);
}

if(300 <= process.argv[3]) {//Si l'argument 3 est supérieur ou égale à 300
	console.log("ATTENTION: Essayer d'envoyer plus de 300 bots renverra une erreur ETIMEDOUT et déconnectera tous les bots!\nCela peut également provoquer un crash de votre connexion Internet en fonction du nombre de sockets qui peuvent être gérés en même temps...".yellow)
	console.log("Essayer d'exécuter ce script en ligne pour plus de bande passante(sur un vps ou un rdp par exemple).".green)
}

var clients = [];
for (var i = 1; i <= process.argv[3]; ++i) {
	clients[i] = new Kahoot;
}
console.log("Envoie des bots avec succès");
var e = 0;
for (var n in clients) {
	e++;
	console.log(`${p} a rejoint: ` + `${e} bots`)
	clients[n].setMaxListeners(Number.POSITIVE_INFINITY)
	clients[n].join(process.argv[2], `${p} (`+ `${e})`);
	clients[n].on("joined", () => {
		if (n == process.argv[3] - 70) {
			console.log("Tout les bots sont présents!".cyan)
		}
	});
}

clients[n].on("questionStart", question => {
	question.answer(0);
	process.on('uncaughtException', function (exception) {
		n = 200;
	});
});
