

const short=document.getElementById('short');
const short1=document.getElementById('short1');
const short2=document.getElementById('short2');
const short3=document.getElementById('short3');
const short4=document.getElementById('short4');
const short5=document.getElementById('short5');

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

//   dropdown
short1.addEventListener('click',()=>{
    short.innerText=short1.innerText;

});
short2.addEventListener('click',()=>{
    short.innerText=short2.innerText;

});
short3.addEventListener('click',()=>{
    short.innerText=short3.innerText;

});
short4.addEventListener('click',()=>{
    short.innerText=short4.innerText;

});
short5.addEventListener('click',()=>{
    short.innerText=short5.innerText;

});