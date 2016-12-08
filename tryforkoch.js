// tryforkoch.js


// main program
const main_svg = document.getElementById("main_svg");

function main() {
	let draw = '';

	function drawit(k0x,k0y,k1x,k1y,k2x,k2y,k3x,k3y,k4x,k4y) {
//		console.log(k0x,k0y,k1x,k1y,k2x,k2y,k3x,k3y,k4x,k4y);
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
	}  // function drawit

	let myheight = 300 * Math.sqrt(3) / 2;
	kochRecurent(4, drawit, 100,100, 400,100);
	kochRecurent(4, drawit, 400,100, 250,100+myheight);
	kochRecurent(4, drawit, 250,100+myheight, 100,100);
	main_svg.innerHTML = draw;
}

main();
