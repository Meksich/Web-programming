
import Venator from '../Venator-class-Star-Ship.jpg';
import Titanic from '../Titanic.jpg';
import Gunship from '../Republic-gunship.jpg';
import OxenfurtTretogor from '../Redanian-oxenfurt-tretogor.jpg';
import Evergreen from '../Evergreen.jpg';
import CosacksSubmarine from '../Cosacks_submarine.jpg';

export const data = [
    {
        id: "1",
        title: "Venator Star Ship",
        tonnage: parseInt("8000000"),
        capacity: parseInt("7400"),
        image: Venator,
        price: "3000000",
        class: "battle",
        destination: "space",
    },
    {
        id: "2",
        title: "Titanic",
        tonnage: parseInt("46328"),
        capacity: parseInt("3320"),
        image: Titanic,
        price: "5000",
        class: "passenger",
        destination: "sea",
    },
    {
        id: "3",
        title: "Republic Gunship",
        tonnage: parseInt("30"),
        capacity: parseInt("30"),
        image: Gunship,
        price: "30",
        class: "passenger",
        destination: "space",
    },
    {
        id: "4",
        title: "Oxenfurt Tretogor",
        tonnage: parseInt("1258"),
        capacity: parseInt("82"),
        image: OxenfurtTretogor,
        price: "500",
        class: "battle",
        destination: "sea",
    },
    {
        id: "5",
        title: "Evergreen",
        tonnage: parseInt("100000"),
        capacity: parseInt("120"),
        image: Evergreen,
        price: "20000",
        class: "cargo",
        destination: "sea",
    },
    {
        id: "6",
        title: "Cosacks Submarine",
        tonnage: parseInt("0"),
        capacity: parseInt("5"),
        image: CosacksSubmarine,
        price: "300",
        class: "passenger",
        destination: "sea",
    },
];

export const descriptions = [
    {
        description: "The Venator-class Star Destroyer, also known as the " + 
        "Republic attack cruiser or Jedi cruiser, was a line of wedge-shaped cruiser-classed Star Destroyers" + 
        " in service with the Galactic Republic and Galactic Empire. Was decomisioned in 13 BBY."
    },
    {
        description: "RMS Titanic was a British passenger liner operated by the White Star Line that sank in the "+
        "North Atlantic Ocean on 15 April 1912, after striking an iceberg during her maiden voyage from Southampton to New York City."+
        "Probably, most popular ship in the world"
    },
    {
        description: "Also known as the Low Altitude Assault Transport, or LAAT, "+
        "was a line of gunship used by the Grand Army of the Republic."+
        " When Acclamator-class transgalactic military assault ships were not able to land on the ground,"+ 
        " the Republic Army depended on LAAT gunships for materiel and soldiers."
    },
    {
        description: "His Majesty's Ship Oxenfurt-Tretogor is a Redanian royal ship and among the best military vessels in the Northern Kingdoms. "+
        "The ship was funded with donations by noblewomen. "+
        "HMS Oxenfurt-Tretogor closely resembles Maltese galleys of the Knights of St. John from the 1500s."
    },
    {
        description: "Oh, no, stepbrother, i'm stuck.",
    },
    {
        description: "Well, i'm  sick of writing these texts. Nobody reads this descriptions after all.",
    },
];