import "./styles.css"

import * as DataBusiness from "./data-business";
import * as Utils from "./utils";

DataBusiness.getAllCharacters().then(characters => {
    document.getElementById("root").innerText = "";

    const nodes = [];

    for (let character of characters) {
        const node = Utils.createCharacterRow(character);
        
        node.onclick = function () {
            Utils.showCharacter(character);
        }

        nodes.push(node);
    }

    for (let node of nodes) {
        document.getElementById("root").append(node);
    }
})
