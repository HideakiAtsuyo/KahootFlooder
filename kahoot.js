//YouTube: Hideaki Atsuyo
//https://www.youtube.com/channel/UCrErtqJnvWiz9FEKYTTpFUg?sub_confirmation=1

var Kahoot = require("kahoot.js-updated");
var colors = require("colors");

var p = "YouTube: Hideaki Atsuyo"

if(process.argv.length <= 2) 
	console.log("Usage: node kahoot.js <pin> <number of bots>".green);
	console.log("Example: \nnode kahoot.js 123456 120".green);
	process.exit(-1);
}

if(300 <= process.argv[3]) {//Si l'argument 3 est supérieur ou égale à 300
	console.log("WARNING: Trying to send more than 300 bots will return an error ETIMEDOUT and will disconnect all bots!\nIt can also cause a crash of your Internet connection depending on the number of sockets that can be managed at the same time....".yellow)
	console.log("Try to run this script online for more bandwidth(on a vps for example).".green)
}

var clients = [];
for (var i = 1; i <= process.argv[3]; ++i) {
	clients[i] = new Kahoot;
}
console.log("Sending bots successfully");
var e = 0;
for (var n in clients) {
	e++;
	console.log(`${p} a rejoint: ` + `${e} bots`)
	clients[n].setMaxListeners(Number.POSITIVE_INFINITY)
	clients[n].join(process.argv[2], `${p} (`+ `${e})`);
	clients[n].on("joined", () => {
		if (n == process.argv[3] - 70) {
			console.log("All bots are here!".cyan)
		}
	});
}

clients[n].on("questionStart", question => {
	question.answer(0);
	process.on('uncaughtException', function (exception) {
		n = 200;
	});
});
