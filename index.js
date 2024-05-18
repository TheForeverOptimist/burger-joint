import {menuArray} from './data.js'

const selections = document.getElementById("selection")

const createItem = (items) => {
    console.log(items)
    items.forEach(function(item){
        selections.innerHTML += 
        `<div class="emoji">${item.emoji}</div>
        <hr />
        
        
        
        
        `
    })
}

createItem(menuArray);