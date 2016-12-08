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
