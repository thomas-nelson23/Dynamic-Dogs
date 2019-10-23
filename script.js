const dogArray = [
    {
        id: 0,
        name: "Pumper",
        breed: "boxer",
        size: "medium",
        color: "brown",
        age: 2,
        needs: {
            toys: [" bow-tie", " ball "],
            shelter: "sunroom",
            medication: true,
            cupsOfFood: 1.5,
        }
    },
    {
        id: 1,
        name: "Jerry",
        breed: "terrier",
        size: "small",
        color: "green",
        age: 3,
        needs: {
            toys: [" underpants", " squeaker "],
            shelter: "rescue shelter",
            medication: true,
            cupsOfFood: 1,
        }
    },
    {
        id: 2,
        name: "Curly",
        breed: "poodle",
        size: "large",
        color: "black",
        age: 2,
        needs: {
            toys: [" bone", " squeaker", " frisbee"],
            shelter: "house",
            medication: false,
            cupsOfFood: 2,
        }
    },
    {
        id: 3,
        name: "Disco",
        breed: "lab",
        size: "big",
        color: "black",
        age: 1,
        needs: {
            toys: [" bone", " shoes", " hats"],
            shelter: "house",
            medication: false,
            cupsOfFood: 3,
        }
    },
    {
        id: 4,
        name: "Toro",
        breed: "bull mastiff",
        size: "huge",
        color: "brown",
        age: 6,
        needs: {
            toys: [" small children", " large children", " squirrels", " squeaker"],
            shelter: "outside",
            medication: false,
            cupsOfFood: 6,
        }
    },
    {
        id: 5,
        name: "Ivy",
        breed: "stafford bull terrier",
        size: "medium",
        color: "yellow",
        age: 7,
        needs: {
            toys: [" fat rat", " squeaker", " slippers"],
            shelter: "wherever she wants",
            medication: false,
            cupsOfFood: 2.5,
        }
    },
    {
        id: 6,
        name: "Biscuit",
        breed: "american eskimo",
        size: "medium",
        color: "white",
        age: 0.5,
        needs: {
            toys: [" bunny", " sticks", " bathtub"],
            shelter: "kennel",
            medication: false,
            cupsOfFood: 2,
        }
    },
    {
        id: 7,
        name: "Bunny",
        breed: "pomsky",
        size: "small",
        color: "black triad",
        age: 1,
        needs: {
            toys: [" biscuit", " kong"],
            shelter: "house",
            medication: false,
            cupsOfFood: 2,
        }
    },
    {
        id: 8,
        name: "Spice",
        breed: "golden retriever",
        size: "medium",
        color: "yellow",
        age: 18,
        needs: {
            toys: [" baby doll", " rubber bone"],
            shelter: "den",
            medication: true,
            cupsOfFood: 3,
        }
    },
    {
        id: 9,
        name: "Kyzer",
        breed: "german shepherd",
        size: "large",
        color: "black",
        age: 6,
        needs: {
            toys: [" bone", " stick"],
            shelter: "doghouse",
            medication: true,
            cupsOfFood: 5,
        }
    },
    {
        id: 10,
        name: "Gonzo",
        breed: "schnauzer",
        size: "small",
        color: "black and white",
        age: 4,
        needs: {
            toys: [],
            shelter: "streets",
            medication: false,
            cupsOfFood: 0,
        }
    },
    {
        id: 11,
        name: "Daisy",
        breed: "golden retriever",
        size: "medium",
        color: "golden",
        age: 3,
        needs: {
            toys: ["does not like things"],
            shelter: "???",
            medication: null,
            cupsOfFood: "",
        }
    }
];

console.log(dogArray);

let dogDiv = document.getElementById('dogs');
var dogDescription = "";

for (var counter = 0; counter < dogArray.length; counter++) {
    dogOfMoment = dogArray[counter];

    //variables for header and paragraph
    var dogId = dogOfMoment.id;
    var dogName = dogOfMoment.name;
    var dogBreed = dogOfMoment.breed;
    var dogSize = dogOfMoment.size;
    var dogColor = dogOfMoment.color;
    var dogAge = dogOfMoment.age;

    //variables for dog needs

    var dogToys = dogOfMoment.needs.toys;
    var dogShelter = dogOfMoment.needs.shelter;
    var dogMedication = dogOfMoment.needs.medication;
    var dogFood = dogOfMoment.needs.cupsOfFood;



    if (dogMedication) {
        dogMedication = "Medz";
    } else {
        dogMedication = "No Medz";
    }

    //insert table
    var dogNeedsTable =
        `<table class="dogTable">
<tr><td class="dogTable" id="stats">STATS:</td><td class="dogTable">Sleeps in ${dogShelter}</td></tr>
<td colspan="2" class="dogTable">${dogToys}</td>
<tr><td class="dogTable">${dogMedication}</td><td class="dogTable">Eats ${dogFood} cups per day</td></tr></table>`;

    //dog description
    var dogDescription = `<p> ${dogName} is a ${dogBreed} who is ${dogAge} years old. 
    ${dogName} is ${dogSize} sized and a beautiful ${dogColor}.`;

    //best dog if statement
    if (dogId == 3) {
        dogDescription += ` ${dogName} is the best dog.</p > `;
    } else {
        dogDescription += ` ${dogName} is a good dog.</p> `;
    }

    //variables inserting dynamic 
    var dogHeader = `<h4> ${dogOfMoment.name}</h4> `;
    dogDiv.innerHTML += `<div class=card> ${dogHeader} ${dogDescription} ${dogNeedsTable}</div> `;


}


