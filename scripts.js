// JavaScript Document

window.onload = function () {

	var slider = document.getElementsByClassName('slider')[0],
		title = document.getElementById('title'),
		images = slider.getElementsByTagName('img'),
		counter = 0,
		nextBtn = slider.getElementsByClassName('next')[0],
		prevBtn = slider.getElementsByClassName('prev')[0];
	
	function showImage (index) {
		//Set classname on the image-elements (hide them)
		for (var i = 0; i <images.length; i += 1) {
			images[i].className = 'hideImage';
		}
		
		//Add the showImage classname to the img-element you want
		images[index].className = 'showImage';
		
		//take the content of the alt tag an write it inside the title div element
		title.innerHTML = images[index].alt;
	}
		
	function nextImg () {
		//counter variable gets the current img selected
		//if we have the last img, we switch back to the first one again
		
		if (counter < images.length -1) {
			counter += 1;
		} else {
			counter =0;
		}
		showImage(counter);
	}
	
	function prevImg () {
		//counter variable gets the current img selected
		//if we have the first img, we switch back to the last one again
		
		if (counter > 0) {
			counter -= 1;
		} else {
			counter = images.length -1;
		}
		showImage(counter);
	}
			
	//give the buttons an onclick event
	nextBtn.onclick = nextImg;
	prevBtn.onclick = prevImg;	
	
	//Says for the nextImg method to be called automatically every 100000 milliseconds)
	//window.setInterval(nextImg, 10000);
	
	//start the slider
	showImage(counter);	

};