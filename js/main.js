console.log("connected")




 
 

// Create an html div
var element = document.createElement("DIV");
// add a class to that element
    element.classList.add("mystyle");
    // add a class to that element
    element.classlist.add("style");
    // put your created element into the body
document.body.appendChild(element);
 // document.getElementById("myDIV").innerHTML.style.backgroundcolor = "blue";
    element.innerHTML = "Content";
    element.style.backgroundColor = "purple";

var element2 = document.createElement("myDIV");
  var h1 = document.createElement('h1').textContent;
    document.body.appendChild(h1);

 function myFunction(text) {
    var h = document.createElement("H1");
    var t = document.createTextNode(text);
       h.appendChild(t);
       document.body.appendChild(h);
}



// var img = document.createElement('img').innerHTML;
// img.src = 'panda.png';
// document.body.appendChild(img);


//  function changeImage() {

//         if (document.getElementById("imgClickAndChange").src == "panda.png") 
//         {
//             document.getElementById("imgClickAndChange").src = "waves.png";
//         }
//         else 
//         {
//             document.getElementById("imgClickAndChange").src = "waves.png";
//         }
//     }


var images = [
{
path: "img/panda.png",

desc:"This is panda"
},

{
path:"img/waves.png",

desc:"This is waves"
}

];

var image= document.getElementById("panda");
var image= document.getElementById("waves");


function changeImage() {
	counter++;
 if(counter>=images.length){
	counter=0;
}

image.src=  images[counter].path;
image.src=  images[counter].desc;

}