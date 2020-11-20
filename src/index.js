let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});




//creating attributes for our toy
const toyList = document.querySelector("#toy-collection")



//fetching all the toys
fetch("http://localhost:3000/toys")
.then(resp => resp.json())
.then(toysObj => {
  toysObj.forEach(toy => {
    renderToy(toy)
  }) 
})


function renderToy(toy) {
  const toyUl = document.createElement('ul')
  const toyH2 = document.createElement('h2')
  const toyA = document.createElement('a')
  const toyImgTag = document.createElement('img')

  
  toyUl.dataset.id = toy.id
  toyH2.textContent = toy.name
  toyImgTag.src = toy.image
  toyImgTag.alt = toy.name
  toyA.textContent = `${toy.likes} Likes`
  
  console.log(toy.image)

  toyUl.append(toyH2, toyA)
  toyList.append(toyUl)
}




