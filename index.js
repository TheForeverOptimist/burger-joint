import {menuArray} from './data.js'

const selections = document.getElementById("selection")

const createItem = (items) => {
    console.log(items)
    items.forEach(function(item){
        selections.innerHTML += `
        <div class="menuItems">
        <div class="emoji">${item.emoji}</div>
        <div class="list">
            <h3>${item.name}</h3>
            <p>${item.ingredients}</p>
            <p>$${item.price}</p>
        </div>
        <i class="fa-solid fa-circle-plus"></i>
        </div>
        <hr />
        
        
        
        
        `;
    })
}

createItem(menuArray);