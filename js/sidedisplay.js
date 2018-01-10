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

    updateSideDisplay();
   function showSideDisplay()
   {
       //$("#side-display").css("marginLeft", "400px");

       const newmargin = $(window).width() - $("#side-display").width();
       console.log("NEWMARGIN = " + newmargin + $("#side-display").css("margin-left") + $("#side-display").width());
       
       $("#side-display").css("marginLeft", $(window).width() - $("#side-display").width());
   }


});