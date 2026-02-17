export async function getBooks() {
    let url = "https://www.googleapis.com/books/v1/volumes?q=subject:fiction&orderBy=newest&maxResults=40&key=AIzaSyCF6-ohKrgU1H_cx_Zmq7lk4CbPsKMvZkU"

    const data = await fetch(url);

    const books = await data.json();

    return books;
}

export async function getCategories() {
    
}