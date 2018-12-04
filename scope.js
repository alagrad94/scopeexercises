const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]

for (let y = 0; y < cookies.length; y++) {
    const currentCookie = cookies[y]
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
};


const conjunction = function (firstWord, secondWord) {
    const conjoinedWord = `${firstWord}${secondWord}`
    return conjoinedWord;
};

console.log(conjunction("Master", "Card"));

{
const ModSquad = {
    "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
    "series": {
        "start": "1968",
        "end": "1973"
    }
}

let HTMLRepresentation = `<h1>The Mod Squad</h1>`

ModSquad.members.forEach(member => {
    HTMLRepresentation += `<div>${member}</div>`
});


document.querySelector(".show-info").innerHTML = HTMLRepresentation
}

{
const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]
let invalidLocations = 0;
for (let k = 0; k < locations.length; k++) {
    const currentLocation = locations[k]

    if (currentLocation[0] > 2) {
        const invalidLocation = true
        if (invalidLocation) {
            console.log("This location is invalid")
            invalidLocations ++;
        }
    }
}
console.log(`There were ${invalidLocations} invalid locations`)
}