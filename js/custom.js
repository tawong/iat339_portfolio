$(function(){
    
    $(".brand-style").each(function(){
        var text = $(this).text();
        $(this).attr("data-content", text);
        console.log(text);
    });
    
//    
//    $(".project-card").hover(function(){
//       $( ".project-title" ).animate({
//          right: "0%",
//          opacity: "1",
//        }, {
//          duration: 250,
//          queue: true
//        }); 
//        $( ".project-type" ).animate({
//          right: "0%",
//          opacity: "1",
//        }, {
//          duration: 250,
//          queue: true
//        }); 
//        $( ".project-role" ).animate({
//          right: "0%",
//          opacity: "1",
//        }, {
//          duration: 250,
//          queue: true
//        }); 
//        $( ".project-tech" ).animate({
//          right: "0%",
//          opacity: "1",
//        }, {
//          duration: 250,
//          queue: true
//        }); 
//    });

});
