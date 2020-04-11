const books= require ('./books');

let booksLength=books.length
for (let i=0; i<booksLength; i++){
    console.log ("....................................");
    console.log ("Book:", books[i].title);
    console.log ("Author:", books[i].author);
    console.log ("....................................");
}
console.log ("\BOOK TITLES PUBLISHED BY O'REILLY MEDIA")
console.log("....................................")
for (let i=0; i< books.length; i++){
    if(books[i].publisher==="O'Reilly Media"){   
        console.log (books[i].title);
    }   
}
console.log("...................................")
console.log("\BOOKS WITH >350 PAGES")
console.log("...................................")
for (let i=0; i<books.length; i++){
    if (books[i].pages>350){
        console.log (books[i].title);
    }
}


