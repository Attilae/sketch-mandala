/**
 * Original source
 * https://twitter.com/acha_for_cs/status/1610708445505937408?s=12&t=RFvK9dKpiGu1vxPxPdyLQQ
 */
let t = 0;
let down = false;
let fade;
let fadeAmount = 1;
let bg = 255;

function setup() {
	createCanvas((W = 800), W);
	colorMode(RGB);
	noFill();
	F = 400;
	background(bg);
	fade = 0;
}

function draw() {
	d = 3;

	for (r = 0; r < TAU; r += PI / 8) {
		a = r + (sin(t / 50) / 3) * d;
		l = noise(t / 100) * F;
		x = cos(a) * l + F;
		y = sin(a) * l + F;
		stroke((t % F) + d, 50 + d, 100, fade);
		circle(x, y, t % F);
		d = -d;
	}
	if (fade == 0) {
		clear();
	}
	if (t >= 300) {
		down = true;
	}
	if (t < 0) {
		down = false;
	}
	if (t <= 300 && !down) {
		t++;
	} else {
		t--;
	}

	if (fade < 0) fadeAmount = 1;

	if (fade > 255) fadeAmount = -10;

	fade += fadeAmount;
}
