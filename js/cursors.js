(function() {
	const cursorTag=document.querySelector("div.cursor");
	if (!cursorTag) {
		console.warn("Cursor element not found, using default cursor");
		document.body.style.cursor = 'auto';
		return;
	}
	const balls=cursorTag.querySelectorAll("div");
	if (!balls || balls.length === 0) {
		console.warn("Cursor balls not found, using default cursor");
		document.body.style.cursor = 'auto';
		return;
	}

	let aimX=0;
	let aimY=0;

	balls.forEach((ball, index) =>{
		let currentX=0;
		let currentY=0;
		let speed =0.6 - index * 0.03;

		const animate = function(){
			currentX += (aimX - currentX) * speed
			currentY += (aimY - currentY) *speed

			ball.style.left = currentX + "px"
			ball.style.top = currentY +"px"

			requestAnimationFrame(animate)
		}

		animate()
	})

	document.addEventListener('mousemove', function(e){
		aimX= e.pageX;
		aimY= e.pageY;
	});
})();