const container=document.getElementById('container')
const gallery=document.getElementById('gallery')
const images=document.querySelectorAll('#gallery img')
const popout=document.getElementById("popOut")
const zoomimg=document.getElementById("zoomimg")
images.forEach(function(image){
    image.addEventListener("click",function(){
        container.style.display='none';
        popout.style.display='block';
        zoomimg.setAttribute('src',image.getAttribute('src'));
    })

});

const closebutton=document.getElementById("close");
closebutton.addEventListener("click",function(){
    container.style.display='block';
        popout.style.display='none';
})

