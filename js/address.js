/*
*@Purpose : contains the address treatment 
*@Authors:
*Thomas Monzein
*Anthonny Giroud
*Kevin Duglué
*Rémy Kaloustian
*/

$(document).ready(function()
{
   //Showing the real address
    $("#address-popup h4").text(_address.fullName);    
    //Both added in their respective popups
    showFireHydrants();
    showCurrentFires();

    //Binding the clicks
    $("#validate-address").click(validateAddress);
    $("#new-address").click(showNewAddress);
    $("#validate-new-address").click(validateNewAddress);
    $("#cancel-new-address").click(cancelNewAddress);

    function showFireHydrants()
    {
        for(var i = 0; i<_fireHydrants.length ; ++i)
        {
            $("#fire-hydrants").append("<p>" + _fireHydrants[i] +"</p>");
        }
    }

    function showCurrentFires()
    {
        for(var i = 0; i<_currentFires.length ; ++i)
        {
            $("#current-fires").append("<br><a href=\"javascript:void(0)\">" + _currentFires[i] +"</a>");
        }
    }

    function validateAddress()
    {
        $("#address-popup").hide();
        //TODO : Make stylish animations & data check
    }

    function showNewAddress()
    {
        $("#address-popup").hide();
        $("#new-address-popup").show();

        //TODO : Make stylish animations
    }

    function validateNewAddress()
    {
        $("#new-address-popup").hide();
        //TODO : center the map on the new address
    }

    function cancelNewAddress()
    {
        $("#new-address-popup").hide();
        $("#address-popup").show();
        
    }
});