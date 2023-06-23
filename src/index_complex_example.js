import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const books = [
  {
    title: 'Iron Flame (The Empyrean, 2)',
    author: 'Rebecca Yarros',
    img: './images/book_image.jpg',
    id: 1,
  },
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
    id: 2,
  },
]

const BookList = () => {
  const someValue = 'shakeAndBake'
  const getBook = (id) => {
    const book = books.find((book) => book.id === id)
    console.log(book)
  }
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} getBook={getBook} />
      })}
    </section>
  )
}

const Book = ({ author, title, img, id, getBook }) => {
  const getSingleBook = () => {
    getBook(id)
  }
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={getSingleBook}>Click Me</button>
      <button onClick={() => getBook(id)}>Click Me</button>
      <h4>{author.toUpperCase()}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
