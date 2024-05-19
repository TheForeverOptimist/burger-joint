import {menuArray} from './data.js'

const selections = document.getElementById("selection")
let total = 0;

const createItem = (items) => {
    selections.innerHTML = '';
    items.forEach(function(item){

        selections.innerHTML += `
        <div class="menuItems">
        <div class="emoji">${item.emoji}</div>
        <div class="list">
            <h3>${item.name}</h3>
            <p class="ingredients">${item.ingredients.join(', ')}</p>
            <p>$${item.price}</p>
        </div>
        <i class="fa-solid fa-circle-plus" data-add="${item.id}"></i>
        </div>
        <hr />
        
        
        
        
        `;
    })
}

createItem(menuArray);

const newItem = document.getElementById("yourOrder")

document.addEventListener("click", function(e){
    if(e.target.dataset.add){
        const itemId = e.target.dataset.add
        const addedItem = menuArray.find(item => item.id == itemId)
        if(addedItem){
            addOrderItem(addedItem)
            updateTotal(addedItem.price)
        }
    }
})

const addOrderItem = (addedItem) => {
    newItem.innerHTML += `
        <h4>Your order</h4>
        <div class="item-line">
            <h5>${addedItem.name}</h5>
            <button class="removeBtn">remove</button>
            <p>${addedItem.price}</p>
        </div>
    
    
    `
}

const updateTotal = (price) => {
    total += price;
}