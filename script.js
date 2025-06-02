const button = document.getElementById('user-button')
const userList = document.getElementById('user-list')
const placeHolder = document.getElementById('no-user-text')
const loader = document.querySelector('.loader')

async function getUsers() {
  try {
    const respone = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await respone.json()
    data.forEach(user => {
      const containerDiv = document.createElement("div")
      containerDiv.setAttribute('class', 'user-info')

      const name = document.createElement("h4")
      name.innerText = user.name

      const userName = document.createElement("p")
      userName.innerText = `@${user.username}`

      containerDiv.appendChild(name)
      containerDiv.appendChild(userName)

      userList.appendChild(containerDiv)
    })
  } catch (err) {
    console.log(err)
  } finally {
    button.dataset.clicked = true
    hideLoader()
  }
}

function showLoader() {
  loader.style.display = "block"
  placeHolder.style.display = 'none'
}

function hideLoader() {
  loader.style.display = "none"
}

button.addEventListener('click', function() {
   if (button.dataset.clicked === 'true') {
    window.alert('MÁR LEKÉRTED TE FOGYATÉKOS GECI')
    return
  }
  showLoader()
  setTimeout(function() {
    getUsers()
  }, 0)
})