// parameters
let p1x = 200;
let p1y = 200 * Math.sqrt(3);

// from page
var main_svg = document.getElementById("main_svg");


// counted
const wspolcz = Math.sqrt(3)/6;
let p2x = p1x / 3;			// 1/3 the line
let p2y = p1y / 3;
let p3x = p1x * 2 / 3;		// 2/3 the line
let p3y = p1y * 2 / 3;
let p4x = p1x / 2;			// middle of the line
let p4y = p1y / 2;
let p5x = p4x + (p1y * wspolcz);		// the interesting point
let p5y = p4y - (p1x * wspolcz);


let todraw = `
	<path 
		id="path1"
		style="fill:none; stroke:#00f; stroke-width:2; stroke-opacity:1"
		d="M 0,0
			L ${p2x},${p2y}
			L ${p5x},${p5y}
			L ${p3x},${p3y}
			L ${p1x},${p1y}
		"
	/>
`
main_svg.innerHTML = todraw;
console.log(path);
