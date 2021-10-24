import { trimShip, renderItemsDOM, calculateTotal, getInputValues, clearInputs, choosenShip } from "./modules.js";
import { validateEdit, validateCreate } from "./validation.js";
import { getAllShips, postShip, deleteShip, updateShip } from "./api.js";

const cardDeck = document.getElementById("card-deck");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const sortCheckbox = document.getElementById("sort");
const countBtn = document.getElementById("count");
const countResults = document.getElementById("count_results");
const countTotal = document.getElementById("count_total");

const createButton = document.getElementById("create-button");
const editWindowButton = document.getElementById("edit-window-button");
const modalWindow = document.getElementById("create-window");
const modalEditWindow = document.getElementById("edit-window");
const modalDeleteWindow = document.getElementById("delete-window");
const modalCloseButton = document.getElementById("modal-close-button");
const createWindowButton = document.getElementById("create-window-button");
const deleteWindowButton = document.getElementById("delete-window-button");
const modalEditCloseButton = document.getElementById("modal-edit-close-button");
const modalDeleteCloseButton = document.getElementById("modal-delete-close-button");

const photoDropdownSelect = document.getElementById("photo-dropdown");
const inputName = document.getElementById("create-name-input");
const inputTonnage = document.getElementById("create-tonnage-input");
const inputCapacity = document.getElementById("create-capacity-input");

const photoEditDropdownSelect = document.getElementById("photo-edit-dropdown");
const inputEditName = document.getElementById("edit-name-input");
const inputEditTonnage = document.getElementById("edit-tonnage-input");
const inputEditCapacity = document.getElementById("edit-capacity-input");

let ships = [
    // {
    //     id: 1,
    //     shipName: "Venator Star Ship",
    //     tonnage: parseInt("8000000"),
    //     capacity: parseInt("7400"),
    //     image: "Venator-class-Star-Ship.jpg",
    // },
    // {
    //     id: 2,
    //     shipName: "Cosacks Submarine",
    //     tonnage: parseInt("0"),
    //     capacity: parseInt("5"),
    //     image: "Cosacks_submarine.jpg",
    // },
    // {
    //     id: 3,
    //     shipName: "Republic Gunship(LAAT)",
    //     tonnage: parseInt("30"),
    //     capacity: parseInt("30"),
    //     image: "Republic-gunship.jpg",
    // },
    // {
    //     id: 4,
    //     shipName: "Evergreen",
    //     tonnage: parseInt("100000"),
    //     capacity: parseInt("120"),
    //     image: "Evergreen.jpg",
    // },
    // {
    //     id: 5,
    //     shipName: "Titanic",
    //     tonnage: parseInt("46,328"),
    //     capacity: parseInt("3320"),
    //     image: "Titanic.jpg",
    // },
    // {
    //     id: 6,
    //     shipName: "Oxenfurt-Tretogor",
    //     tonnage: parseInt("1258"),
    //     capacity: parseInt("82"),
    //     image: "Redanian-oxenfurt-tretogor.jpg",
    // },
];

// for (const ship of ships) {
//     postShip(trimShip(ship));
// }

let shipsSorted = [];

searchButton.addEventListener("click", (event) => {
    event.preventDefault();
    let shipsFound = ships.filter(
        (ship) => ship.shipName.search(searchInput.value) !== -1);
    renderItemsDOM(shipsFound);
});

sortCheckbox.addEventListener("change", () => {
    let shipsSorted = Array.from(ships);
    if (sortCheckbox.checked) {
        shipsSorted.sort(
            (first, second) => first.tonnage - second.tonnage
        );
    }
    renderItemsDOM(shipsSorted);
});

countBtn.addEventListener("click", () => {
    countResults.classList.remove("hidden");
    const totalPrice = calculateTotal(ships, (ship) => ship.tonnage);
    countTotal.innerHTML = totalPrice;
});

createButton.addEventListener("click", () => {
    modalWindow.style.display = "block";
})

modalCloseButton.addEventListener("click", () => {
    modalWindow.style.display = "none";
})

modalEditCloseButton.addEventListener("click", () => {
    modalEditWindow.style.display = "none";
})

modalDeleteCloseButton.addEventListener("click", () => {
    modalDeleteWindow.style.display = "none";
})

createWindowButton.addEventListener("click", () => {
    event.preventDefault();
    if (validateCreate()) {
        postShip(getInputValues(photoDropdownSelect, inputName,
            inputTonnage, inputCapacity, "dropdown")).then(refetchAllShips);
        clearInputs(inputName, inputTonnage, inputCapacity);
    }
})

editWindowButton.addEventListener("click", () => {
    event.preventDefault();
    if (validateEdit()) {
        updateShip(choosenShip, getInputValues(photoEditDropdownSelect, inputEditName,
            inputEditTonnage, inputEditCapacity, "edit-dropdown"))
            .then(refetchAllShips);
    }
})

deleteWindowButton.addEventListener("click", () => {
    event.preventDefault();
    deleteShip(choosenShip).then(refetchAllShips);
    modalDeleteWindow.style.display = "none";
})

$('#dropdown').ddslick({
    onSelected: function (selectedData) { }
});

$('#edit-dropdown').ddslick({
    onSelected: function (selectedData) { }
});

export const refetchAllShips = async () => {
    const allShips = await getAllShips();
    ships = allShips;
    renderItemsDOM(ships);
};

ships = await getAllShips();
renderItemsDOM(ships);

export default ships;
export { cardDeck, ships };