function Pipe() {

	this.min = 50

	this.distance = random(150, 160);
	this.top = random(this.min, width*(5/8));
	this.bottom = this.top + this.distance;
	this.x = width;
	this.w = 30
	this.speed = 3.5;

	this.show = function() {
		fill(255);
		rect(this.x-this.w, 0, this.w, this.top);
		rect(this.x-this.w, this.bottom, this.w, height-this.bottom);
	}

	this.update = function () {
		this.x -= this.speed;
	}

	this.hit = function (bird) {
		if ((bird.x+bird.r > this.x && (bird.x-bird.r < (this.x + this.w)) && ((bird.y+bird.r < this.top) || (bird.y-bird.r > this.bottom)))) {
			return true;
		}
		return false;
	}
}