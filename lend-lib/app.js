let books = [
  {author: 'Thomas Pynchon', title: 'Bleeding Edge', genre: 'fiction', copies: 2},
  {author: 'Haruki Murakami', title: '1Q84', genre: 'fiction', copies: 2},
  {author: 'John D MacDonald', title: 'Nightmare in Pink', genre: 'mystery', copies: 1},
  {author: 'Ncholas Zakas', title: 'Understanding Ecmascript 6', genre: 'javascript', copies: 1},
  {author: 'Thomas Phillips', title: 'Long Slow Distance', genre: 'fiction', copies: 1}
]

function authSearch () {
  let aName = document.getElementById('authorSearch').value
  let name = books.filter((x) => x.author.indexOf(aName) !== -1)
  if (name.length > 0) {
    hideAllBooks('result')
    name.forEach((x) => {
      let listItem = document.createElement('li')
      let textnode = document.createTextNode(`${x.title} by ${x.author} in ${x.genre}`)
      listItem.appendChild(textnode)
      document.getElementById('result').appendChild(listItem)
    })
  } else {
    hideAllBooks('result')
    let listItem = document.createElement('li')
    let textnode = document.createTextNode(`sorry your search for ${aName} returned 0 books`)
    listItem.appendChild(textnode)
    document.getElementById('result').appendChild(listItem)
  }
}

//5) search for a book by book title, or genre.
function radioSearch () {
    //let's see who is checked
    let whosChecked = "";
    if (document.getElementById('radioTitle').checked === true){
        whosChecked = document.getElementById('radioTitle').value;
    }
    else if (document.getElementById('radioGenre').checked === true){
        whosChecked = document.getElementById('radioGenre').value;
    }
    else{whosChecked = document.getElementById('radioAuthor').value;}
    
    whosChecked = whosChecked.toLowerCase();
    whosChecked = whosChecked.replace("radio", ""); //Now we know what radio is checked
    
    //inform the user the search is being made by his choice on the radio
    document.getElementById('whosChecked').innerHTML = "Searching by " + whosChecked;
    
    let searchText = document.getElementById('stringSearch').value;
    let booksFound;
    if (whosChecked === "author"){
        booksFound = books.filter((x) => x.author.indexOf(searchText) !== -1);
    } else if (whosChecked === "title"){
        booksFound = books.filter((x) => x.title.indexOf(searchText) !== -1)
    }
    else {booksFound = books.filter((x) => x.genre.indexOf(searchText) !== -1)}

    if (booksFound.length > 0) {
    hideAllBooks('result')
    booksFound.forEach((x) => {
      let listItem = document.createElement('li')
      let textnode = document.createTextNode(`${x.title} by ${x.author} in ${x.genre}`)
      listItem.appendChild(textnode)
      document.getElementById('result').appendChild(listItem)
    })
    } else {
    hideAllBooks('result')
    let listItem = document.createElement('li')
    let textnode = document.createTextNode(`sorry your search for ${searchText} returned 0 books`)
    listItem.appendChild(textnode)
    document.getElementById('result').appendChild(listItem)
    }
}



// event listeners
document.getElementById('autSearch').addEventListener('click', authSearch)
document.getElementById('radioSearchBt').addEventListener('click', radioSearch)

function hideAllBooks (id) {
  document.getElementById(id).innerHTML = ''
}

