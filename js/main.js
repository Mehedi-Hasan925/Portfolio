$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }

        if(this.scrollY > 500){
            $('.scroll-up').addClass("show");
        }
        else{
            $('.scroll-up').removeClass("show");
        }
    });

    var typed = new Typed(".typing",{
        strings: ["Full Stack Developer","Freelancer"],
        typeSpeed: 150,
        backSpeed: 60,
        loop: true
    })

    var typed_about = new Typed(".typing-about",{
        strings: ["Developer","Freelancer"],
        typeSpeed: 150,
        backSpeed: 60,
        loop: true
    })

    //slide up
    $('.scroll-up').click(function(){
        $('html').animate({scrollTop:0})
    })

    // toggle navabr
    $('.menu-btn').click(function(){
        $('.menu').toggleClass("active")
        $('.menu-btn').toggleClass("active")
    });


    // typing animation


    
})