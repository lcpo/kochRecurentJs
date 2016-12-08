// tryforkoch.js


// declarations
const svg1 = document.getElementById("svg1");
const svg2 = document.getElementById("svg2");
let draw = '';
let array_xy = [];


function drawit1(k0x,k0y,k1x,k1y,k2x,k2y,k3x,k3y,k4x,k4y) {
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
}  // function drawit1


function fordrawit2(k0x,k0y,k1x,k1y,k2x,k2y,k3x,k3y,k4x,k4y) {
	array_xy.push(k1x,k1y,k2x,k2y,k3x,k3y,k4x,k4y);
}

function drawit2(startx,starty,myarray_xy) {
	todraw = `
		<path 
			style="fill:#ff0; stroke:#00f; stroke-width:0;"
			d="M ${startx},${starty}
	`;
	let array_xy_length = myarray_xy.length;
	for (let i = 0; i < array_xy_length ; i+=2 ) {
		todraw += `L ${myarray_xy[i]},${myarray_xy[i+1]} `;
	}
	todraw += `
			z"
		/>
	`;
	return todraw;
}

let myheight = 300 * Math.sqrt(3) / 2;

// first pic
kochRecurent(4, drawit1, 100,100, 400,100);
kochRecurent(4, drawit1, 400,100, 250,100+myheight);
kochRecurent(4, drawit1, 250,100+myheight, 100,100);
svg1.innerHTML = draw;

// second pic
kochRecurent(4, fordrawit2, 100,100, 400,100);
kochRecurent(4, fordrawit2, 400,100, 250,100+myheight);
kochRecurent(4, fordrawit2, 250,100+myheight, 100,100);
svg2.innerHTML = drawit2(100,100, array_xy);







