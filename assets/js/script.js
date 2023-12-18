const table = document.querySelector("#table")
const divForm = document.querySelector("#form")
table.style.display = "none"

const form = document.querySelector("form");
const formArray = [...form.elements]
const formArraySelect = formArray.filter((formItem) => {
    return formItem.localName == "select"
})

const formArrayInput = formArray.filter((formItem) => {
    return formItem.localName == "input"
})

const formArrayFinal = [...formArrayInput, ...formArraySelect]

let user = {}
form.addEventListener('submit', e => {
    e.preventDefault();
    let isValid = true;

    formArrayFinal.forEach((input) => {
        if (['fullname', 'email', 'telephone'].indexOf(input.name) > -1 && !input.value){
            let p = document.createElement('p')
            divForm.appendChild(p)
            p.innerHTML = "Você deixou de preencher um campo obrigatório."
            p.style.color = "red"
            p.style.fontWeight = "bold"
            isValid = false;
        }
        user[input.name] = [input.value].join(" ")

    });
        if (!isValid){
            return false
        }
    console.log(user)
    const tr = document.createElement("tr")
    tr.innerHTML = `
            <td>${user.fullname}</td>
            <td>${user.email}</td>
            <td>${user.telephone}</td>
            <td>${user.gender}</td>
            <td>${user.area}</td>
            <td>${user.address}</td>
            <td>${user.number}</td>
            <td>${user.complement}</td>
            <td>${user.city}</td>
            <td>${user.state}</td>`
    table.appendChild(tr)
    table.style.display = "block"
});