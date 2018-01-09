$(document).ready(function()
{

    console.log("Address done");

    $("#validate-address").click(validateAddress);
    $("#new-address").click(showNewAddress);
    $("#validate-new-address").click(validateNewAddress);

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

});