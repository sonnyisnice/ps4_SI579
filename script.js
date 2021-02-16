let part1 = document.querySelector("#part1");
let part2 = document.querySelector("#part2");
let shoppingList = document.querySelector("#shoppingList");
let addItem = document.querySelector("#addButton");
let currentSize = 20;
let visability = "yes";

function changeColor () {
    if (currentSize == 20   ) {
        part1.style.fontSize = "2rem";
        currentSize = "2rem"
    } else {
        part1.style.fontSize = "20px";
        currentSize = 20;
    }
}
function changeVisability () {
    if (visability == "yes") {
        part2.style.display = "none";
        visability = "no"
    } else {
        part2.style.display = "block";
        visability = "yes"
    }
}

part1.addEventListener("click", changeColor);
part1.addEventListener("mouseover", changeVisability)
part1.addEventListener("mouseout", changeVisability)
addItem.addEventListener("click", ()=>{
    let listArray = _.split(shoppingList.value, ',', 100)
    for (i=0; i < listArray.length; i++){
        let liNode = document.createElement("li");
        let textNode = document.createTextNode(listArray[i]);
        liNode.appendChild(textNode);
        document.getElementById("groceryList").appendChild(liNode);
    }
})
