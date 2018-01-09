$(document).ready(function()
{
    let address = {};
    address.fullName = "23 rue de la destruction des tétons";
    $("#address-popup h4").text(address.fullName);



    $("#validate-address").click(validateAddress);
    $("#new-address").click(showNewAddress);
    $("#validate-new-address").click(validateNewAddress);
    $("#cancel-new-address").click(cancelNewAddress);

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