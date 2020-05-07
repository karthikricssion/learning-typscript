/*
    Working on library search bar which done by
    -> Author Name
    -> Title of the book
    -> ISBN
*/

interface Book {
    title: String,
    author: String,
    ISBN: Number
}

var Books: Book[] = [
    {
        title: 'A Brief History of Time',
        author: 'Stephen Hawking',
        ISBN: 9780553380163
    },
    {
        title: 'A Heartbreaking Work of Staggering genius',
        author: 'Dave Eggers',
        ISBN: 375725784
    },
    {
        title: 'Long Way Gone',
        author: 'Ishmael Beah',
        ISBN: 9780374531263
    },
    {
        title: 'Diary of a Wimpy Kid',
        author: 'Jeff Kinney',
        ISBN: 0810993139
    },
    {
        title: 'Gone Girl',
        author: 'Gillian Flynn',
        ISBN: 307588378
    },
    {
        title: 'Me Talk Pretty One Day',
        author: 'David Sedaris',
        ISBN: 9780316776967
    },
    {
        title: 'The Diary of a Young Girl',
        author: 'Anne Frank',
        ISBN: 307594009
    },
    {
        title: 'The Corrections: A Novel',
        author: 'Jonathan Franzen',
        ISBN: 9780312421274
    },
    {
        title: 'The Fault in our stars',
        author: 'John Green',
        ISBN: 14242417
    },
    {
        title: 'The Giver',
        author: 'Lois Lowry',
        ISBN: 385732554
    }
]

function filterTitle(books: Book[], search: string): Book[] {
    return books.filter((book) => {
        if(book.title.toLowerCase().indexOf(search.toLowerCase()) !== -1) {
            return book
        }
    })
}

console.log(filterTitle(Books, 'a'))