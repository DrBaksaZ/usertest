const button = document.getElementById('user-button')
const userList = document.getElementById('user-list')
const placeHolder = document.getElementById('no-user-text')
const loader = document.querySelector('.loader')

async function getUsers() {
  try {
    const respone = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await respone.json()
    data.forEach(user => {
      const item = document.createElement('li')
      item.innerText = user.name
      userList.appendChild(item)
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
  }, 3000)
})