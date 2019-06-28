$(document).ready(function() {
    $("nav img").click(function() {
        window.location.href = "home.html";
    });
                
    $(function () {
        $(document).scroll(function () {
            var $nav = $("nav");
            $nav.toggleClass('whitenav', $(this).scrollTop() > $nav.height());
            var $links = $(".container nav .innernav a");
            $links.toggleClass('blacka', $(this).scrollTop() > $nav.height());
            var $img = $(".container nav > a");
            $img.toggleClass('imga', $(this).scrollTop() > $nav.height());
        });
    });
    
    $(".ticketbutton").click(function() {
        var ticket = parseInt(window.prompt("How many tickets do you want to buy?"));
        
        if(isNaN(ticket)) {
           
           } else {
               if(ticket == 0) {
                window.alert("You can't buy 0 tickets.");
           } else if(ticket == 1) {
               window.alert("Thank you for buying " + ticket + " ticket.");
           } else {
               window.alert("Thank you for buying " + ticket + " tickets.");
           }
           }
    });
    
    $(".booking button").click(function() {
        var choice = window.confirm("Do you really want to book a concert?");
        if(choice == true) {
           window.alert("Your concert was successfully booked.");
           } else {
           window.alert("You failed to book a concert.");
           }
    });
    
    $(".mobilenavigation").hide();
    
    $(".container .mobilenav").click(function() {
        $(".container .mobilenav .line1").toggleClass("line1anim");
        $(".container .mobilenav .line2").toggleClass("line2anim");
        $(".mobilenavigation").slideToggle(800);
    });
    
    $(".container .mobilenavigation a").click(function() {
        $(".container .mobilenavigation").hide(500);
        $(".container .mobilenav .line1").toggleClass("line1anim");
        $(".container .mobilenav .line2").toggleClass("line2anim");
    });
});