


document.addEventListener("DOMContentLoaded", function() {
    
    fetchBooks()
});


function fetchBooks(){
    fetch("http://localhost:3000/books")
    .then(resp => resp.json())
    .then(json => { 
        json.forEach( book => renderBooksTitles(book))
    })
}


function renderBooksTitles(book){
    const listPanel = document.getElementById("list-panel")
    const bookList = document.getElementById("show-panel")
    const createButton = document.createElement('button')
    createButton.innerText = "View book"
    createButton.addEventListener('click', function(){
        const getPanel = document.getElementById("show-panel")
        getPanel.style.display = 'block'
        handleBooks(book)
    })
    const li = document.createElement('li')
    li.innerText = book.title
    li.appendChild(createButton)
    bookList.appendChild(li)
    listPanel.appendChild(li)
}

function handleBooks(book){
    const getDiv = document.getElementById('show-panel')
    const createCard = document.createElement('card')
    const createP = document.createElement('p')
    const createLikes = document.createElement('p')
    const createLikesNumber = document.createElement('p')
    const createImg = document.createElement('img')
    const createBtn = document.createElement('button')
    const createBtn2 = document.createElement('button')
    
    
    createCard.className = 'card-class'
    createImg.setAttribute('src', 'my-src')
    createP.innerText = book.description 
    createImg.src = book.img_url
    createLikes.innerText = "likes:"
    createLikesNumber.innerText = 0
    createLikesNumber.setAttribute('value', "")
    createLikesNumber.className = "valor"
    createBtn.setAttribute('class', 'my-class')
    createBtn.className = "btn btn-info"
    createBtn.innerText = 'like book'
    createBtn2.innerText = 'Toggle back'

    createCard.append(createP, createImg, createLikes, createLikesNumber,createBtn2)
    createCard.appendChild(createBtn)
    getDiv.appendChild(createCard)

    createBtn2.addEventListener('click', function(){
        const hideInfo = document.getElementById("show-panel")
        const cardClass = document.querySelector("card-class")
        hideInfo.style.display = 'none'
        cardClass.remove()
        // renderBooksTitles(book)
        

    })


    // createBtn.addEventListener('click', function(e){
    //     e.preventDefault()

    //     //  const getNumbers = document.querySelector(".show-panel")
    //      let getInside = document.querySelector(".show-panel")
         
    //     const myLikes = e.target.valor.value + 1

    //     // parseInt(e.target.previousElementSibling.innerText) + 1

        
        
    // })





    





}


    