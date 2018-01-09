$(document).ready(function()
{

    console.log("Address done");

    $("#validate-address").click(validateAddress);

    function validateAddress()
    {
        $("#address-popup").hide();
    }

});