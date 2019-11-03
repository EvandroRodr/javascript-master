var database = [
	{
		username: "vondrae",
		password: "torishua"
	},
	{
		username: "jord",
		password: "user@1"
	},
	{
		username: "jvctl",
		password: "champione"
	},
	{
		username: "noel",
		password: "fsociety"
	},
	{
		username: "parthur",
		password: "coffee"
	},
	{
		username: "jvictor",
		password: "perdigueiro"
	},
];

var newsFeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function signIn(user, pass) {
	if ((user === database[0].username && pass === database[0].password) ||
		(user === database[1].username && pass === database[1].password) ||
		(user === database[2].username && pass === database[2].password) ||
		(user === database[3].username && pass === database[3].password) ||
		(user === database[4].username && pass === database[4].password) ||
		(user === database[5].username && pass === database[5].password)) {
		console.log(newsFeed);
	} else {
		alert("Sorry, wrong username or password!");
	}
}

signIn(userNamePrompt, passwordPrompt);