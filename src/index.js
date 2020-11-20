let addToy = false;

  //creating attributes for our toy
  const toyList = document.querySelector("#toy-collection")
  const toyForm = document.querySelector(".add-toy-form")
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");


  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block"
    } else {
      toyFormContainer.style.display = "none"
    }
  });


//fetching all the toys
fetch("http://localhost:3000/toys")
.then(resp => resp.json())
.then(toysObj => {
  toysObj.forEach(toy => {
    renderToy(toy)
  }) 
})

//Create each card for the toys
function renderToy(toy) {
  const toyDiv = document.createElement('div')
  const toyH2 = document.createElement('h2')
  const toyP = document.createElement('p')
  const toyImgTag = document.createElement('img')
  const likeBtn = document.createElement('button')
  
  
  toyDiv.className = "card"
  toyDiv.dataset.id = toy.id

  toyH2.textContent = toy.name
  toyP.textContent = `${toy.likes} Likes`
  
  toyImgTag.className = "toy-avatar"
  toyImgTag.src = toy.image
  toyImgTag.alt = toy.name

  likeBtn.className = "like-btn"
  likeBtn.textContent = "Like <3"


  likeBtn.addEventListener("click", function(event){
    
  })
  

  toyDiv.append(toyH2, toyImgTag, toyP, likeBtn)
  toyList.append(toyDiv)
}


//Form create
toyForm.addEventListener("submit", function(event){
  event.preventDefault()

  const toyName = toyFormContainer.querySelector("#name")
  const toyImgTag = toyFormContainer.querySelector("#image")

  const name = toyName.value
  const img = toyImgTag.value


//POST request for the add Toy

fetch("http://localhost:3000/toys", {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  body: JSON.stringify({
    "name": name,
    "image": img,
    "likes": 0
  })
})
.then(res => res.json())
.then((toy) => {
  let newToy = renderToy(toy)
  })
})
