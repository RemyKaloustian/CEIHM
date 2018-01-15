/*
*@Purpose : contains the data initialization
*@Authors:
*Thomas Monzein
*Anthonny Giroud
*Kevin Duglué
*Rémy Kaloustian
*/

//Address initialisation, this step is a mock cuz IRL we need to get the address from somewhere
let _fire = {};
_fire._address = "23 rue de la destruction des tétons";
_fire._signals = 3;
_fire._signalTime = "15:16";
_fire._type = "Feu de maison";
_fire._drivingTime = "23 minutes";
_fire._station = "La caserne des BGs";
_fire._comments = ["Attention au feu", "Le feu ça brûle"];

//Setting the current fires, thios is mocked too, IRL we'd get'em from somewhere else
let _currentFires = [];
_currentFires.push("34 rue la Fickenaisse");
_currentFires.push("897 chemin Kawaï");

//Setting the fire hydrants, mocked too
let _fireHydrants = [];


