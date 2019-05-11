function fontSize() {
    document.getElementById("sampletext").style.fontSize = "24pt";
}

function textStyle(){
var a = document.getElementById("pimp");
var c = document.getElementById("sampletext");
	if(a.checked){
		c.style.fontWeight = "bold";
        c.style.textDecoration = "underline blink";
        c.style.color = "green";
	}else{
		c.style.fontWeight = "normal";
        c.style.textDecoration = "none";
        c.style.color = "black";
	}

}

function snoopify() {
	var c = document.getElementById("sampletext");
	var parts = c.value.split(" ");
	c.value = parts.join("_");
    c.value = c.value.toUpperCase();
    c.value = c.value.split(".").join("-izzle.");
}