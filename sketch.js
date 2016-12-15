var bird;

var pipes = [];

function setup() {
	createCanvas(600, 600);
	bird = new Bird();
	pipes.push(new Pipe());
}

function draw() {
	background(0);
	bird.show();
	bird.update();
	for (var i = 0; i < pipes.length; i++) {
		

		pipes[i].update();

		pipes[i].show();

		if (pipes[i].hit(bird)) {
			console.log("hit");
			createCanvas(600, 600);
		}
	}
		
	
	if (frameCount % 80 == 0) {
		pipes.push(new Pipe());
	}
	for (var i = 0; i < pipes.length; i++) {
		
		if (pipes[i].x < 0) {
			pipes.splice(i, 1);		
		}
	}

}

function keyPressed() {
	if (key === ' ') {
		bird.up();
	}

}