

var mylist = document.getElementsByTagName("LI");
var i;
let no=document.querySelector('.item')

for (i = 0; i < mylist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "ope";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}


var ope = document.getElementsByClassName("ope");
var i;
for (i = 0; i < ope.length; i++) {
  ope[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


var list = document.querySelector('ul');
list.addEventListener('click', function(re) {
  if (re.target.tagName === 'LI') {
    re.target.classList.toggle('checked');
  }
}, false);

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "ope";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < ope.length; i++) {
    ope[i].onclick = function() {
        alert('this option deletes your task')
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}