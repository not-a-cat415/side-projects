const usernameHTML = document.getElementById("username")
const passwordHTML = document.getElementById("password")
const statusHTML = document.getElementById("status")

document.getElementById("submit").addEventListener("click", async () => {
    try {
        const response = await fetch("./details.json")
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const data = await response.json()
        const username = usernameHTML.value
        const password = passwordHTML.value

        if (data.passwords[username] !== password) {
            statusHTML.textContent = "Login failed."
        } else {
            statusHTML.textContent = "Login successful."
        }
    } catch (error) {
        statusHTML.textContent = "Could not load login details."
        console.error("Error loading JSON:", error)
    }
})
let part5part3 = "at"
