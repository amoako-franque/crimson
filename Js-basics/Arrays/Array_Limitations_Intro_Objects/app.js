// ARRAYS ARE NOT IDEAL FOR STORING ALL TYPES OF DATA.

// We could use an array if we made sure we always follow the same pattern:
//index 0: total steps
//index 1: total floors
//etc.
const fitBitData = [308756, 1814, 211]
const fitData = [
	{ steps: 308756, timeSpent: 1814, sleepTime: 211, time_stamp: 1231298319823 },
	{ steps: 308756, timeSpent: 1814, sleepTime: 211 },
	{ steps: 308756, timeSpent: 1814, sleepTime: 211 },
	{ steps: 308756, timeSpent: 1814, sleepTime: 211 },
	{ steps: 308756, timeSpent: 1814, sleepTime: 211 },
]
console.log(fitData.sleepTime)

//We have no insight into WHAT we are storing at each index

//And we could mess things up super easily if we're not careful
const lucyFitbitData = [12344, 1814, 211]

// OBJECTS TO THE RESCUE!
