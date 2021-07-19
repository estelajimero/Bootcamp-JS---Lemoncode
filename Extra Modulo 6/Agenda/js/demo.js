const WORK_HOURS = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "15:00 - 16:00",
    "16:00 - 17:00"
];

let myTeam = [
    {
        name: "María",
        availability: new Array(8).fill(true)
    },
    {
        name: "Pedro",
        availability: new Array(8).fill(true)
    },
    {
        name: "Esther",
        availability: new Array(8).fill(true)
    },
    {
        name: "Marcos",
        availability: new Array(8).fill(true)
    },
];

// Generación aleatoria de disponibilidad
let getRandom = () =>  Math.random() < 0.5;

for (member of myTeam) {
    console.log("---- Disponibilidad de ", member.name, " ----");
    for (let i = 0; i < member.availability.length; i ++) {
        member.availability[i] = getRandom();

        if (member.availability[i] === true) {
            console.log(WORK_HOURS[i]," - Sí");
        } else {
            console.log(WORK_HOURS[i]," - No");
        }
    }
}


// console.log("Hueco encontrado en el horario ", WORK_HOURS[i]);
// console.log("Lo siento. No hay hueco disponible en el equipo.");




    