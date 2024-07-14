document.addEventListener("DOMContentLoaded", function(){
    let rentCars1 = document.querySelector("#rent #brandsSection #slider #contentPage") ;
    let rentCars2 = document.querySelector("#rent #brandsSection #slider #scroller") ;
    let left = document.querySelector("#swipe #left").onclick = scrollLeft;
    let right = document.querySelector("#swipe #right").onclick = scrollRight ;

    let screenSize = window.innerWidth ;
    function scrollLeft(){
        if(screenSize >= 992 && screenSize <= 1199){
            rentCars1.style.transform = "translatex(-91vw)" ;
            rentCars2.style.transform = "translateX(-93vw)" ;
        }else if(screenSize >= 1200 && screenSize <= 1399){
            rentCars1.style.transform = "translatex(-92vw)" ;
            rentCars2.style.transform = "translateX(-94vw)" ;
        }else if(screenSize >= 1400 && screenSize <= 1535){
            rentCars1.style.transform = "translatex(-94vw)" ;
            rentCars2.style.transform = "translateX(-96.5vw)" ;
        }else if(screenSize >= 1536){
            rentCars1.style.transform = "translatex(-94vw)" ;
            rentCars2.style.transform = "translateX(-96vw)" ;
        }
    
        console.log("clicked??")
    }
    
    function scrollRight(){
        rentCars1.style.transform = "translateX(0vw)" ;
        rentCars2.style.transform = "translatex(0vw)" ;
        console.log("clicked??")
    }

    let reviewSlides = document.querySelector("#ride #bgColor #reviewSlides") ;

    let sliderCircle1 = document.querySelector("#ride #slider #sliderCircle1");
    let sliderCircle2 = document.querySelector("#ride #slider #sliderCircle2");
    let sliderCircle3 = document.querySelector("#ride #slider #sliderCircle3");
    let sliderCircle4 = document.querySelector("#ride #slider #sliderCircle4");

    sliderCircle1.onclick = reviewsPage1 ;
    function reviewsPage1(){

        if(screenSize >= 1400 && screenSize <= 1535){
            reviewSlides.style.transform = "translateX(0.5vw)" ;
        }else{
            reviewSlides.style.transform = "translateX(0vw)" ;
        }
        
        if(sliderCircle1.classList.contains("unactive")){
            console.log("Moveddd!!");
            sliderCircle1.classList.replace("unactive", "active") ;
            sliderCircle1.classList.replace("fa-regular", "fa-solid")
            
            sliderCircle2.classList.replace("active", "unactive") ;
            sliderCircle2.classList.replace("fa-solid", "fa-regular")

            sliderCircle3.classList.replace("active", "unactive") ;
            sliderCircle3.classList.replace("fa-solid", "fa-regular")

            sliderCircle4.classList.replace("fa-solid", "fa-regular")
            sliderCircle4.classList.replace("active", "unactive") ;
        }
    }

    sliderCircle2.onclick = reviewsPage2 ;
    function reviewsPage2(){
        if(screenSize >= 992 && screenSize <= 1199){
            reviewSlides.style.transform = "translateX(-101.6vw)" ;
        }else if(screenSize >= 1200 && screenSize <= 1399){
            reviewSlides.style.transform = "translateX(-99.6vw)" ;
        }else if(screenSize >= 1400 && screenSize <= 1535){
            reviewSlides.style.transform = "translateX(-98vw)" ;
        }else if(screenSize >= 1536){
            reviewSlides.style.transform = "translateX(-98vw)" ;
        }
        
        if(sliderCircle2.classList.contains("unactive")){
            console.log("Moveddd!!");
            sliderCircle2.classList.replace("unactive", "active") ;
            sliderCircle2.classList.replace("fa-regular", "fa-solid")
            
            sliderCircle1.classList.replace("active", "unactive") ;
            sliderCircle1.classList.replace("fa-solid", "fa-regular")

            sliderCircle3.classList.replace("active", "unactive") ;
            sliderCircle3.classList.replace("fa-solid", "fa-regular")

            sliderCircle4.classList.replace("fa-solid", "fa-regular")
            sliderCircle4.classList.replace("active", "unactive") ;
        }
    }

    sliderCircle3.onclick = reviewsPage3 ;
    function reviewsPage3(){
        
        if(screenSize >= 992 && screenSize <= 1199){
            reviewSlides.style.transform = "translateX(-203vw)" ;
        }else if(screenSize >= 1200 && screenSize <= 1399){
            reviewSlides.style.transform = "translateX(-199.6vw)" ;
        }else if(screenSize >= 1400 && screenSize <= 1535){
            reviewSlides.style.transform = "translateX(-197vw)" ;
        }else if(screenSize >= 1536){
            reviewSlides.style.transform = "translateX(-196vw)" ;
        }
        

        if(sliderCircle3.classList.contains("unactive")){
            console.log("Moveddd!!");
            sliderCircle3.classList.replace("unactive", "active") ;
            sliderCircle3.classList.replace("fa-regular", "fa-solid")
            
            sliderCircle2.classList.replace("active", "unactive") ;
            sliderCircle2.classList.replace("fa-solid", "fa-regular")

            sliderCircle1.classList.replace("active", "unactive") ;
            sliderCircle1.classList.replace("fa-solid", "fa-regular")

            sliderCircle4.classList.replace("fa-solid", "fa-regular")
            sliderCircle4.classList.replace("active", "unactive") ;
        }
    }

    sliderCircle4.onclick = reviewsPage4 ;
    function reviewsPage4(){
        if(screenSize >= 992 && screenSize <= 1199){
            reviewSlides.style.transform = "translateX(-304vw)" ;
        }else if(screenSize >= 1200 && screenSize <= 1399){
            reviewSlides.style.transform = "translateX(-298.6vw)" ;
        }else if(screenSize >= 1400 && screenSize <= 1535){
            reviewSlides.style.transform = "translateX(-295.6vw)" ;
        }else if(screenSize >= 1536){
            reviewSlides.style.transform = "translateX(-294vw)" ;
        }
        
        if(sliderCircle4.classList.contains("unactive")){
            console.log("Moveddd!!");
            sliderCircle4.classList.replace("unactive", "active") ;
            sliderCircle4.classList.replace("fa-regular", "fa-solid")
            
            sliderCircle2.classList.replace("active", "unactive") ;
            sliderCircle2.classList.replace("fa-solid", "fa-regular")

            sliderCircle3.classList.replace("active", "unactive") ;
            sliderCircle3.classList.replace("fa-solid", "fa-regular")

            sliderCircle1.classList.replace("fa-solid", "fa-regular")
            sliderCircle1.classList.replace("active", "unactive") ;
        }
    }

    let email = document.querySelector("footer #email section div input");
    let arrowButton = document.querySelector("footer #email section i") ;
    
    arrowButton.onclick = sendEmail ;

    function sendEmail(){
        email.value = "" ;
    }


    let audi = document.querySelector("#rent #topBrands #carOptions #audi") ;
    let honda = document.querySelector("#rent #topBrands #carOptions #honda") ;
    let toyota = document.querySelector("#rent #topBrands #carOptions #toyota") ;
    let nissan = document.querySelector("#rent #topBrands #carOptions #nissan") ;
    let telsa = document.querySelector("#rent #topBrands #carOptions #telsa") ;

    let brandsSection = document.querySelector("#rent #brandsSection") ;

    audi.onclick = addSelectInAudi ;
    honda.onclick = addSelectInHonda ;
    toyota.onclick = addSelectInToyota ;
    nissan.onclick = addSelectInNissan ;
    telsa.onclick = addSelectInTelsa ;

    function addSelectInAudi(){
        if(!audi.classList.contains("selected")){
            audi.classList.add("selected") ;
            honda.classList.remove("selected") ;
            toyota.classList.remove("selected") ;
            nissan.classList.remove("selected") ;
            telsa.classList.remove("selected") ;
            
            changeCars() ;
        }
    }

    function addSelectInHonda(){
        if(!honda.classList.contains("selected")){
            audi.classList.remove("selected") ;
            honda.classList.add("selected") ;
            toyota.classList.remove("selected") ;
            nissan.classList.remove("selected") ;
            telsa.classList.remove("selected") ;
            
            changeCars() ;
        }
    }

    function addSelectInToyota(){
        if(!toyota.classList.contains("selected")){
            audi.classList.remove("selected") ;
            honda.classList.remove("selected") ;
            toyota.classList.add("selected") ;
            nissan.classList.remove("selected") ;
            telsa.classList.remove("selected") ;
            
            changeCars() ;
        }
    }

    function addSelectInNissan(){
        if(!nissan.classList.contains("selected")){
            audi.classList.remove("selected") ;
            honda.classList.remove("selected") ;
            toyota.classList.remove("selected") ;
            nissan.classList.add("selected") ;
            telsa.classList.remove("selected") ;
            
            changeCars() ;
        }
    }

    function addSelectInTelsa(){
        if(!telsa.classList.contains("selected")){
            audi.classList.remove("selected") ;
            honda.classList.remove("selected") ;
            toyota.classList.remove("selected") ;
            nissan.classList.remove("selected") ;
            telsa.classList.add("selected") ;

            changeCars() ;
        }
    }

    function changeCars(){
        brandsSection.classList.remove("addAnimation");
        void brandsSection.offsetWidth; // this forces a reset to the animation, to it's actual style-
        brandsSection.classList.add("addAnimation");
    }

});

