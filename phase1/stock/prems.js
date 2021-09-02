var a = 10;
var b;
console.log(a);	// affiche 10
console.log(b);	// affiche undefined (ce qui n’est pas en soi une erreur)

console.log(c);	// affiche undefined (ce qui n’est toujours pas en soi une erreur)
var c = 20;

if (true) { var d = 30; }	// exemple 1
console.log(d);	// affiche 30

function test() { var e = 40; }	// exemple 2
console.log(e); // affiche une erreur référence inconnue
