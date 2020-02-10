$(document).ready(function()
 {

   $('ul').on('click','#delete',function(event){
       $(this).parent().fadeOut(500,function(){
           $(this).remove();
       });
       event.stopPropagation();
   });

   $('ul').on('click','#tick',function(event){
    $(this).parent().toggleClass("completed");
   });

   $("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var toDoText= $(this).val();
        $(this).val("");
        $("ul").append("<li><span id='delete'><i class='fas fa-trash-alt'></i></span> " + toDoText + "<span id='tick'><i class='fas fa-check'></i></span></li>")
    }
   });

   $(".fa-pencil-alt").click(function(){
    $("input[type='text']").fadeToggle()
   })
});