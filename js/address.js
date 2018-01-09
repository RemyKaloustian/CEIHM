$(document).ready(function()
{

    console.log("Address done");

    $("#validate-address").click(validateAddress);
    $("#new-address").click(showNewAddress);

    function validateAddress()
    {
        $("#address-popup").hide();
    }

    function showNewAddress()
    {
        $("#address-popup").hide();
        $("#new-address-popup").show();
    }

});