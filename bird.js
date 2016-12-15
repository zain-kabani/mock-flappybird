function Bird() {
	this.x = 68;
	this.y = height/2;
	this.r = 35;

	this.gravity = 0.9;
	this.velocity = 0;
	this.upForce = -30;

	this.show = function() {
		ellipse(this.x, this.y, this.r, this.r)
	}

	this.update = function() {
		this.velocity += this.gravity;
		this.velocity *= 0.9;
		this.y += this.velocity;
		if (this.y > height) {
			this.y = height;
			this.velocity = 0;
		} else if (this.y < 0) {
			this.y = 0;
			this.velocity = 0;
		}
	}

	this.up = function () {
		this.velocity += this.upForce;
	}
}