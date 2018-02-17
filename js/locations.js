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
        address: '80 Rue Henri Point Carré, 06410 Biot',
        type: 1, //feu
        pos: {
            lat: 43.618969,
            lng: 7.075735
        }
    },
    {
        icon: 'assets/pics/eau.png',
        type: 2, //bouche d'incendie
        debit: 120,
        distance : '18 mètres',
        pos: {
            lat: 43.619067,
            lng: 7.074900
        }
    },
    {
        icon: 'assets/pics/eau-gris.png',
        type: 3, //bouche d'incendie fermée
        debit: 60,
        distance : '18 mètres',
        pos: {
            lat: 43.620643,
            lng: 7.074611
        }
    },
    {
        icon: 'assets/pics/eau.png',
        debit: 60,
        distance : '18 mètres',
        type: 2, //bouche d'incendie
        pos: {
            lat: 43.618839,
            lng: 7.076233
        }
    },
    {
        icon: 'assets/pics/eau-gris.png',
        debit: 120,
        distance : '18 mètres',
        type: 3, //bouche d'incendie fermée
        pos: {
            lat: 43.619006,
            lng: 7.075657
        }
    },
    {
        icon: 'assets/pics/eau.png',
        debit: 120,
        distance : '18 mètres',
        type: 2, //bouche d'incendie
        pos: {
            lat: 43.618305,
            lng: 7.076016
        }
    },
    {
        icon: 'assets/pics/eau-gris.png',
        debit: 60,
        distance : '18 mètres',
        type: 3, //bouche d'incendie fermée
        pos: {
            lat: 43.602413,
            lng: 7.091471
        }
    },
    {
        icon: 'assets/pics/eau-gris.png',
        debit: 60,
        distance : '18 mètres',
        type: 3, //bouche d'incendie fermée
        pos: {
            lat: 43.602778,
            lng: 7.089132
        }
    },
    {
        icon: 'assets/pics/eau.png',
        debit: 120,
        distance : '18 mètres',
        type: 2, //bouche d'incendie
        pos: {
            lat: 43.602576,
            lng: 7.086922
        }
    },
    {
        icon: 'assets/pics/eau.png',
        debit: 60,
        distance : '18 mètres',
        type: 2, //bouche d'incendie
        pos: {
            lat: 43.603275,
            lng: 7.089518
        }
    },
]