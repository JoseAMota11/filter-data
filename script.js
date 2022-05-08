const input = document.querySelector("#searchInput")
const ol = document.querySelector("#users")

let users = []

window.addEventListener("DOMContentLoaded", async () => {
    const data = await loadUsers()
    users = data.data
    renderUsers(users)
})

async function loadUsers() {
    const response = await fetch("https://fakerapi.it/api/v1/users?_quantity=100")
    return await response.json()
}

input.addEventListener("keyup", e => {
    const newUsers = users.filter(user => `${user.firstname.toLowerCase()} ${user.lastname.toLowerCase()}`.includes(input.value.toLowerCase()))
    renderUsers(newUsers)
})

const createUserItem = arrUsers => {
    return arrUsers.map(user => `<li class="text-[#eee]">${user.firstname} ${user.lastname}</li>`).join(" ")
}

function renderUsers(arrayUsers) {
    const itemString = createUserItem(arrayUsers)
    ol.innerHTML = itemString
}