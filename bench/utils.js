const arrayCache = [];
for (let i = 0; i < 100; i++) {
	const l = 1 + Math.random() * 10;
	arrayCache.push(Array.from({ length: l }, () => Math.random()));
}

/** Returns an array of random length with random contents. */
function randomArray() {
	return arrayCache[Math.floor(Math.random() * arrayCache.length)];
}

module.exports = {
	randomArray,
};