


document.addEventListener("DOMContentLoaded", function() {
    fetchBooks()
});


function fetchBooks(){
    fetch("http://localhost:3000/books")
    .then(resp => resp.json())
    .then(json => { json.forEach(book => showTitles(book))
}
    )}
    

function showTitles(book){
    let list = document.createElement('li')
    let getDiv = document.getElementById("list-panel")
    let getUl = document.getElementById("list")
    
    list.innerText = book.title
    list.id = book.id
    
    getUl.appendChild(list)
    getDiv.appendChild(getUl)
}




function getBookAfterClick(book) {

    let getDiv = document.getElementById("list-panel")
    let getUl = document.getElementById("list")
    const p = document.createElement('p')
    const img = document.createElement('img')

    p.innerText = book.description
    img.src = book.img_url

    getUl.appendChild(p)
    getUl.appendChild(img)

    getDiv.appendChild(getUl)
}





