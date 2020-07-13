const navbar= document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;
const section =document.
querySelectorAll('section');
const navbarLinks = document.querySelectorAll('.navbar-link');


window.addEventListener("scroll", () => {
    if(window.pageYOffset >= 
        navbarOffsetTop){
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
        navLinks.classList.toggle("close");
        navLinks.forEach(link => {
            link.classList.toggle("fade");
            
        });
    }
    section.forEach((section,i) => {
        if(window.pageYOffset >= 
            section.offsetTop -10){
                navbarLinks.forEach(navbarLink =>{
                
                    navbarLink.classList.remove("change");
                })
                navbarLinks[i].classList.add
                ("change");
           
            }
          
            
    });
   
});
const hamburger =document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.ul.nav-links a');
const navnavbar = document.querySelectorAll('.nav navbar');


hamburger.addEventListener("click", () => {
navLinks.classList.toggle("open");
links.forEach(link => {
   link.classList.toggle("fade");
   

 
     
    

  
});
});

