const animalPairs = [
	["doe", ["buck", "stag"]], //0
	["ewe", "ram"], //1
	["peahen", "peacock"], //2
]

//To access 'ewe'
animalPairs[1][0] // ["ewe", "ram"]

//To access 'buck'
animalPairs[0][1][0]

//Updating a sub-array:
animalPairs[0][1].push("hart")
//apparently some people call male deer 'harts'.  idk.
