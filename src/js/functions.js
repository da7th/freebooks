// export async function getBooks() {
//     let url = "https://www.googleapis.com/books/v1/volumes?q=subject:fiction&orderBy=newest&maxResults=40&key=AIzaSyCF6-ohKrgU1H_cx_Zmq7lk4CbPsKMvZkU"

//     const data = await fetch(url);

//     const books = await data.json();

//     return books;
// }

// export async function getCategories() {
    
// }

async function fetchTitle() {
        const response = await fetch("https://openlibrary.org/search.json?q=has_fulltext:true&language:por&sort=new");
        const data = await response.json();
        // console.log(data.docs);

        for(let book of data.docs) {
            console.log(book.title);
        }
}

fetchTitle();