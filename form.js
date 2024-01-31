// let data = []
// let form = document.querySelector("#myform")
// getData()
// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   let nameValue = document.querySelector("#name").value
//   let ageValue = document.querySelector("#age").value
//   let emailValue = document.querySelector("#email").value
//   let numberValue = document.querySelector("#number").value

//   let userData = {
//     name: nameValue,
//     age: ageValue,
//     email: emailValue,
//     number: numberValue
//   }
//   data.push(userData)
//   localStorage.setItem("users", JSON.stringify(data))
//   getData()
// })

// function getData() {
//   data = localStorage.getItem("users") !== null ? JSON.parse(localStorage.getItem("users")) : []
//   let list = document.querySelector("#list")
//   list.innerHTML = ""
//   data.map((element, i) => {
//     console.log(element);
//     list.innerHTML += `<tr>
//     <td>${element.name}</td>
//     <td>${element.age}</td>
//     <td>${element.email}</td>
//     <td>${element.number}</td>
//     <td><button id="delete" onClick={deletedata(${i})}>Delete</button></td>
//     <td><button id="edit" onClick={editdata(${i})}>Edit</button></td>
//     </tr>`
//   })
// }
// function deletedata(id) {
//   data = data.filter((item, index) => index !== id)
//   localStorage.setItem("users", JSON.stringify(data))
//   getData()
// }


// function editdata(idValue) {

//  let editable = data.filter((item, index) => index === idValue)
//  console.log(editable);
//  document.querySelector("#name").value = editable[0].name
//   document.querySelector("#age").value= editable[0].age
//   document.querySelector("#email").value= editable[0].email
//  document.querySelector("#number").value= editable[0].number

//   data = data.filter((item, index) => index !== idValue)
// localStorage.setItem("users", JSON.stringify(data))

// }

let form = document.querySelector("#myform")
let userData = []
getData()
form.addEventListener("submit", function (event) {
    let nameValue = document.querySelector("#name").value
    let ageValue = document.querySelector("#age").value
    let numberValue = document.querySelector("#number").value
    let emailValue = document.querySelector("#email").value

    let data = {
        name: nameValue,
        age: ageValue,
        number: numberValue,
        email: emailValue,
    }
    userData.push(data)
    localStorage.setItem("users", JSON.stringify(userData))
    getData()
})

function getData() {
    userData = localStorage.getItem("users")!==null? JSON.parse(localStorage.getItem("users")) : []
    let list = document.querySelector("#list")
    list.innerHTML = ''
    userData.map((item, index) => {
        list.innerHTML += `
        <tr><td>${item.name}</td>
        <td>${item.age}</td>
        <td>${item.email}</td>              
        <td>${item.number}</td>
        <td><button id="delete" onclick={deletedata(${index})}>Delete</button></td>
        <td><button id="edit" onClick={editdata(${index})}>Edit</button></td>
        </tr>
        `
    })
}

function deletedata(id) {
    userData = userData.filter((elem, index) => index !== id)
    localStorage.setItem("users", JSON.stringify(userData))
    getData()

}
function editdata(id) {
    let filterdata = userData.filter((ele, index) => index == id)
    document.querySelector("#name").value = filterdata[0].name
    document.querySelector("#age").value = filterdata[0].age
    document.querySelector("#number").value = filterdata[0].number
    document.querySelector("#email").value = filterdata[0].email

    userData = userData.filter((elem, index) => index !== id)
    localStorage.setItem("users", JSON.stringify(userData))
}


