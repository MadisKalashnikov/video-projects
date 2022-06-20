const setUpItems = () => {
    let items = getLocalStorage()
    if (items.length > 0) {
        items.forEach(item => {
            createListItem(item.id, item.value)
        })
    groceryContainer.classList.add("show-container")
    }
}
// ****** SELECT ITEMS **********
const alert = document.querySelector(".alert")
const form = document.querySelector(".grocery-form")
const grocery = document.getElementById("grocery")
const submitBtn = document.querySelector(".submit-btn")
const groceryContainer = document.querySelector(".grocery-container")
const groceryList = document.querySelector(".grocery-list")
const clearBtn = document.querySelector(".clear-btn")
// edit option
let editElement
let editFlag = false
let editId = ""
// ****** FUNCTIONS **********
const addItem = (e) => {
    e.preventDefault()
    const value = grocery.value
    const id = new Date().getTime().toString()
    if (value && !editFlag) {
        createListItem(id, value)
        // display alert
        displayAlert(`Added ${value} to list`, "success")
        // show container
        groceryContainer.classList.add("show-container")
        // add to local storage
        addToLocalStorage(id, value)
        // back to default
        setBackToDefault()
    } else if (value && editFlag) {
        editElement.innerHTML = value
        displayAlert("value edited", "success")
        // edit local storage
        editLocalStorage(editId, value)
        setBackToDefault()
    } else {
        displayAlert("enter value", "danger")
    }
}
const clearList = () => {
    const items = document.querySelectorAll(".grocery-item")
    if (items.length > 0) {
        items.forEach(item => groceryList.removeChild(item))
    }
    groceryContainer.classList.remove("show-container")
    displayAlert("Cleared list", "danger")
    localStorage.removeItem("list")
    setBackToDefault()
}
const editItem = (e) => {
    const element = e.currentTarget.parentElement.parentElement
    // set edit item
    editElement = e.currentTarget.parentElement.previousElementSibling
    // set form value
    grocery.value = editElement.innerHTML
    editFlag = true
    editId = element.dataset.id
    submitBtn.textContent = "edit"
}
const deleteItem = (e) => {
    const element = e.currentTarget.parentElement.parentElement
    const id = element.dataset.id
    groceryList.removeChild(element)
    if (groceryList.children.length === 0) {
        groceryContainer.classList.remove("show-container")
    }
    displayAlert("item removed", "danger")
    setBackToDefault()
    //remove from local storage
    removeFromLocalStorage(id)
}
// back to default function
const setBackToDefault = () => {
    grocery.value = ""
    editFlag = false
    editId = ""
    submitBtn.textContent = "Add"
}
// display alert
const displayAlert = (text, action) => {
    alert.textContent = text
    alert.classList.add(`alert-${action}`)
    // remove alert
    setTimeout(() => {
        alert.textContent = ""
        alert.classList.remove(`alert-${action}`)
    }, 1000)
}
// ****** EVENT LISTENERS **********
// form submit
form.addEventListener("submit", addItem)
// clear items
clearBtn.addEventListener("click", clearList)
// load items
window.addEventListener("DOMContentLoaded", setUpItems)
// ****** LOCAL STORAGE **********
const addToLocalStorage = (id, value) => {
    const groceries = {id,value}
    let items = getLocalStorage()
    console.log(items)
    items.push(groceries)
    localStorage.setItem("list", JSON.stringify(items))
}
const editLocalStorage = (id, value) => {
    let items = getLocalStorage()
    items = items.map(item => {
        if (item.id === id) {
            item.value = value
        }
        return item
    })
    localStorage.setItem("list", JSON.stringify(items))
}
const removeFromLocalStorage = (id) => {
    let items = getLocalStorage()
    items = items.filter(item => {
        if(item.id !== id) {
            return item
        }
    })
    localStorage.setItem("list", JSON.stringify(items))
}
const getLocalStorage = () => {
    return localStorage.getItem("list") ? 
    JSON.parse(localStorage.getItem("list")) :
    [];
}
// ****** SETUP ITEMS **********

const createListItem = (id, value) => {
    const element = document.createElement("article")
        // add clas to element
        element.classList.add("grocery-item")
        // add id to element
        const attribute = document.createAttribute("data-id")
        attribute.value = id
        element.setAttributeNode(attribute)
        element.innerHTML = `<p class="title">${value}</p>
        <div class="btn-container">
          <button type="button" class="edit-btn">
            <em class="fas fa-edit"></em>
          </button>
          <button class="delete-btn">
            <em class="fa fa-trash"></em>
          </button>
        </div>`
        const deleteBtn = element.querySelector(".delete-btn")
        deleteBtn.addEventListener("click", deleteItem)
        const editBtn = element.querySelector(".edit-btn")
        editBtn.addEventListener("click", editItem)
        // append to list
        groceryList.appendChild(element)
}