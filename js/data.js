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
_fire._address = "Avenue Roumanille, ZAC St Philippe II, 06410 Biot";
_fire._signals = 3;
_fire._signalTime = "15:16";
_fire._type = "Feu de maison";
_fire._drivingTime = "23 minutes";
_fire._station = "La caserne";
_fire._comments = ["Attention au feu", "Le feu ça brûle"];

//Setting the current fires, thios is mocked too, IRL we'd get'em from somewhere else
let _currentFires = [];
_currentFires.push("485 Route du Pin Montard, 06560 Biot");
_currentFires.push("2650 Route des Colles, 06410 Biot");

//Setting the fire hydrants, mocked too
let _fireHydrants = [];


