/*
 *@Purpose : contains the markers of the map (won't need it till the end I think)
 *@Authors:
 *Thomas Monzein
 *Anthonny Giroud
 *Kevin Duglué
 *Rémy Kaloustian
 */

let locations = [{
        icon: 'assets/pics/caserne.ico',
        address: '930 Route des Colles, 06410 Biot',
        type: 0, //caserne
    },
    {
        icon: 'assets/pics/feu.png',
        address: '400 Avenue Roumanille, 06410 Biot',
        type: 1, //feu
    },
    {
        icon: 'assets/pics/eau.png',
        type: 2, //bouche d'incendie
        pos: {
            lat: 43.619067,
            lng: 7.074900
        }
    },
    {
        icon: 'assets/pics/eau-gris.png',
        type: 3, //bouche d'incendie fermée
        pos: {
            lat: 43.620643,
            lng: 7.074611
        }
    }
]