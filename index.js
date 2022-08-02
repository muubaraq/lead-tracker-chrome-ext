let myLeads = []
let oldLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}


// listen for double clicks on the delte btn,  When clicked, clear localStorage, myLeads, and the DOM
deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
})




//localStorage.setItem("myLeads", "google.com")
//console.log(localStorage)

//localStorage.getItem("myLeads")
//console.log(localStorage)

//localStorage.clear("myLeads")
//localStorage.clear()
//console.log(localStorage)

// HINTS:
// localStorage.setItem(key, value)
// localStorage.getItem(key)
// localStorage.clear()
// PS: both key and value need to be strings

// 1. Turn the myLeads string into an array
//myLeads = JSON.parse(myLeads)
// 2. Push a new value to the array
//myLeads.push("www.lead2.com")
// 3. Turn the array into a string again
//myLeads = JSON.stringify(myLeads)
// 4. Console.log the string using typeof to verify that it's a string
//console.log(typeof myLeads)