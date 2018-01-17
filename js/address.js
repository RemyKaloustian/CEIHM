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
    $("#address-popup h4").text(_fire._address);    
    //Both added in their respective popups
    showCurrentFires();

    //Binding the clicks
    $("#validate-address").click(validateAddress);
    $("#new-address").click(showNewAddress);
    $("#validate-new-address").click(validateNewAddress);
    $("#cancel-new-address").click(cancelNewAddress);

    $(".current-fire").click(function(event){
        setAddress($(event.target).text());
    });

    $("#change-address-btn").click(showNewAddress);

    

    function showCurrentFires()
    {
        for(var i = 0; i<_currentFires.length ; ++i)
        {
            $("#current-fires").append("<br><a href=\"javascript:void(0)\" class=\"current-fire\"\>" + _currentFires[i] +"</a>");
        }
    }

    function validateAddress()
    {
        closePopUpAnimation($("#address-popup"));
        //TODO : Make stylish animations & data check

       
        //MAP : center on the address (if not already done)
        
    }

    function showNewAddress()
    {
        closePopUpAnimation($("#address-popup"));
        //$("#new-address-popup").show();
        showPopUpAnimation($("#new-address-popup"));

        //TODO : Make stylish animations
    }

    function validateNewAddress()
    {
        
        if($("#new-address-popup input").val().trim() != "")
        {
            closePopUpAnimation($("#new-address-popup"));            
            _fire._address = $("#new-address-popup input").val();
            updateSideDisplay();
            showNewAddressNotif();    
        }
       
        //TODO : center the map on the new address

        //MAP :Remove old pointer, add new pointer to new address & Center on the new address
        console.log("New address = " + _fire._address );
        
    }

    function cancelNewAddress()
    {
        //$("#new-address-popup").hide();
        closePopUpAnimation($("#new-address-popup"));
        showPopUpAnimation($("#address-popup"));
        //$("#address-popup").show();
    }

    function setAddress(newaddress)
    {
        console.log("BC:"+$("#new-address-popup input").val());
        $("#new-address-popup input").val(newaddress);
        console.log("AC: "+$("#new-address-popup input").val());
    }

    function closePopUpAnimation(popup)
    {
        popup.animate(
            {
                opacity: 0.25,
                left: "-=2000",
                
            }, 500, function() {
            // Animation complete.
          });
    }

    function showPopUpAnimation(popup)
    {
        popup.animate(
            {
                opacity: 1,
                left: "+=2000",
                
            }, 500, function() {
            // Animation complete.
          });
    }

    function showNewAddressNotif()
    {
        $("#notif").transition({ scale: 1, delay: 300 });
        $('#notif').transition({ scale: 0, delay: 1000 });
    }
});