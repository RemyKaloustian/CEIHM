/*
*@Purpose : Add style that can't be done in CSS, serves responsiveness purposes
*@Authors:
*Thomas Monzein
*Anthonny Giroud
*Kevin Duglué
*Rémy Kaloustian
*/

$(document).ready(function()
{
    $("#new-address-popup").css("marginLeft", "-2000px");

    //Centering the popup content vertically
    const marginTop =($( window ).height() - $(".popup-content").height())/2;
    $(".popup-content").css("marginTop", marginTop - 100);

    //Setting the side display properties
    $("#side-display").css("marginLeft", $(window).width());

});