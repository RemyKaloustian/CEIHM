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

function showSideDisplay()
   {
       const newmargin = $(window).width() - $("#side-display").width();
       console.log("NEWMARGIN = " + newmargin + $("#side-display").css("margin-left") + $("#side-display").width());
       
        $('#side-display').transition({ x: -$("#side-display").width()});
        $("#close-side-display").transition({ x: -160, delay: 400});
        $('#close-side-display').css({ rotate: '-180deg' });
      
   }

$(document).ready(function()
{

   $("#side-button").click(showSideDisplay);
   $("#close-side-display").click(closeSideDisplay);

    setSideDisplay();
    updateSideDisplay();

   

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