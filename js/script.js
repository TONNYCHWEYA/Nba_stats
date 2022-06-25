const player = document.getElementById('players');
const submitPlayer = document.getElementById('submit');
const statsHolder = document.getElementById('statsholder');
const ul = document.getElementById('list')
const first_name = document.getElementById('first_name')
const last_name = document.getElementById('last_name')
const height_feet =document.getElementById('height_feet')
const height_inches = document.getElementById('height_inches')
const position = document.getElementById('Position')
const teamName = document.getElementById('teamName')
const review = document.getElementById("review")
const editReview = document.getElementById("editReview")
const submitEdit = document.getElementById("submitEdit")
const form = document.getElementById("form")
//
submitPlayer.addEventListener('click', (e) => {
  e.preventDefault()
  const playersName =player.value 
  fetch(`https://www.balldontlie.io/api/v1/players?search=${playersName}`)
.then(response => response.json())
.then(bPlayers =>{
  const allPlayers = bPlayers.data
  console.log(allPlayers)
  allPlayers.forEach(element => {
    const li = document.createElement("li")
    li.textContent = element.first_name + " " + element.last_name
    ul.append(li)

    // When you hover over the name of the players the color of the elements changes.
    li.addEventListener("mouseover", (e) => {
      li.style.color = 'red'
    })

    li.addEventListener("mouseout", (e) => {
      li.style.color = 'black'
    })

    const playerId = element.id;
    
    li.addEventListener("click", (e) =>{
      fetch(`https://www.balldontlie.io/api/v1/players/${playerId}`)
      .then(response => response.json())
      .then(data =>{
        first_name.textContent = data.first_name
        last_name.textContent = data.last_name
        height_feet.textContent = data.id
        height_inches.textContent = data.team.city
        position.textContent = data.team.division
        teamName.textContent = data.team.full_name
      })
      e.target.style.backgroundColor = "green"
    })
    
  });
 
    
  });
})

submitEdit.textContent = 'REVIEW'
form.addEventListener("submit",(e) =>{
  e.preventDefault()
const reviewValue = editReview.value
review.textContent = reviewValue
})


