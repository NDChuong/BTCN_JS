var image = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];

var slide = document.getElementById('Slide');

var micro_slide_1 = document.getElementById('img1');
var micro_slide_2 = document.getElementById('img2');
var micro_slide_3 = document.getElementById('img3');
var micro_slide_4 = document.getElementById('img4');

var i = 1;
var i_slide = 1;



function setImage(nextImage) {
    return '<img src="image/' + image[nextImage] + '">';
}

function getNextImage() {
    var rel;
    if (i >= 4) {
        i = 0;
        rel = setImage(0);
    } else {
        i++;
        rel = setImage(i);
    }
    return rel;
}

function switch_image() {
    //change the slide image in order
    if (i_slide === 5) {
        i_slide = 0;
        slide.innerHTML = '<img src="image/Originals/' + image[i_slide] + '">';
    } else {
        slide.innerHTML = '<img src="image/Originals/' + image[i_slide] + '">';
    }
    i_slide++;

    micro_slide_1.innerHTML = getNextImage(); //i=2
    micro_slide_2.innerHTML = getNextImage(); //i=3
    micro_slide_3.innerHTML = getNextImage(); //i=4
    micro_slide_4.innerHTML = getNextImage(); //i=0
    
    if (i === 3) {
        i = 0;
    }
    else if (i === 4) {
        i = 1;
    }
    else{
    	i = i + 2;
    }
}
var status = true;

function start() {
    if (status) {
        document.getElementById('button').innerHTML = '<img src="image/pause.jpg">'
        status = false;
        setInterval(switch_image, 2000);
    } else {
        document.getElementById('button').innerHTML = '<img src="image/play.jpg">'
        status = true;
        clearInterval(switch_image);
    }
}