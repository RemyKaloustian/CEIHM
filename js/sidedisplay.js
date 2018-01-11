/*
*@Purpose : Contains the management of the side display
*@Authors:
*Thomas Monzein
*Anthonny Giroud
*Kevin Duglué
*Rémy Kaloustian
*/

function updateSideDisplay()
{
    $("#address").text(_fire._address);
}

$(document).ready(function()
{

   $("#side-button").click(showSideDisplay);
   $("#close-side-display").click(closeSideDisplay);

    setSideDisplay();
    updateSideDisplay();

   function showSideDisplay()
   {
       //$("#side-display").css("marginLeft", "400px");

       const newmargin = $(window).width() - $("#side-display").width();
       console.log("NEWMARGIN = " + newmargin + $("#side-display").css("margin-left") + $("#side-display").width());
       
   // $("#side-display").css("marginLeft", $(window).width() - $("#side-display").width());
    $('#side-display').transition({ x: -$("#side-display").width()});
       const newleft = parseInt($("#side-display").width()).toString();
      
   }

   function setSideDisplay()
   {
       $("#side-display").append("<p>"+ _fire._signals +" signalements</p>");
       $("#side-display").append("<p>Signalé à "+ _fire._signalTime +"</p>");
       $("#side-display").append("<p>"+ _fire._type +"</p>");
       $("#side-display").append("<p>Caserne : "+ _fire._station +"</p>");
       $("#side-display").append("<div id=\"comments\"></div>");

        for (let index = 0; index < _fire._comments.length; index++)
        {
            $("#comments").append("<p>"+_fire._comments[index]+"</p>");             
        }       
   }

   function closeSideDisplay()
   {
        $('#side-display').transition({ x: $("#side-display").width()});       
   }

});