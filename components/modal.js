var modal = document.getElementById('modal');
var btn = document.getElementByID('btn');
var span = document.getElementsByClassName('close')[0];

btn.onclick = function() {
	modal.style.display = "block";
}

span.onclick = function() {
	modal.style.display = 'none';
}