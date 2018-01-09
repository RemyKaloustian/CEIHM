$(document).ready(function()
{
    let _address = {};
    _address.fullName = "23 rue de la destruction des tétons";
    $("#address-popup h4").text(_address.fullName);

    let _currentFires = [];
    _currentFires.push("34 rue la Fickenaisse");
    _currentFires.push("897 chemin Kawaï");


    let _fireHydrants = [];
    _fireHydrants.push("3 rue du charisme");
    _fireHydrants.push("45 boulevard du communisme");
    _fireHydrants.push("7272 allée des Quicksopes");

    showFireHydrants();
    showCurrentFires();

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