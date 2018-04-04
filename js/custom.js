$(function(){
    
    $(".brand-style").each(function(){
        var text = $(this).text();
        $(this).attr("data-content", text);
        console.log(text);
    });
    


});
