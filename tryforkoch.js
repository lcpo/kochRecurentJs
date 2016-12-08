// tryforkoch.js


// global declarations
const main_svg = document.getElementById("main_svg");
let draw = '';

function kochRecurent(depth, funct, point0x, point0y, point1x, point1y) {
	const wspolcz = Math.sqrt(3)/6;
	
	let p1x = point1x - point0x;
	let p1y = point1y - point0y;
	let p2x = p1x / 3;			// 1/3 the line
	let p2y = p1y / 3;
	let p3x = p1x * 2 / 3;		// 2/3 the line
	let p3y = p1y * 2 / 3;
	let p4x = p1x / 2;			// middle of the line
	let p4y = p1y / 2;
	let p5x = p4x + (p1y * wspolcz);		// the interesting point (montain peak)
	let p5y = p4y - (p1x * wspolcz);
	let point2x = point0x + p2x;
	let point2y = point0y + p2y;
	let point3x = point0x + p3x;
	let point3y = point0y + p3y;
	let point5x = point0x + p5x;
	let point5y = point0y + p5y;

	if (depth <= 0) {
		funct(point0x, point0y, point2x, point2y, point5x, point5y, point3x, point3y, point1x, point1y);
	} else {
		depth--;
		kochRecurent(depth, funct, point0x, point0y, point2x, point2y);
		kochRecurent(depth, funct, point2x, point2y, point5x, point5y);
		kochRecurent(depth, funct, point5x, point5y, point3x, point3y);
		kochRecurent(depth, funct, point3x, point3y, point1x, point1y);
	}
}


function drawit(k0x,k0y,k1x,k1y,k2x,k2y,k3x,k3y,k4x,k4y) {
	console.log(k0x,k0y,k1x,k1y,k2x,k2y,k3x,k3y,k4x,k4y);
	let todraw = `
		<path 
			style="fill:none; stroke:#00f; stroke-width:1; stroke-opacity:1"
			d="M ${k0x},${k0y}
				L ${k1x},${k1y}
				L ${k2x},${k2y}
				L ${k3x},${k3y}
				L ${k4x},${k4y}
			"
		/>
	`;
	draw += todraw;
}

let myheight = 300 * Math.sqrt(3) / 2;
kochRecurent(4, drawit, 100,100, 400,100);
kochRecurent(4, drawit, 400,100, 250,100+myheight);
kochRecurent(4, drawit, 250,100+myheight, 100,100);
main_svg.innerHTML = draw;
