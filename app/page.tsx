"use client";
import { useState } from "react";
import bookStore from "./_store/book-store";

export default function Home() {
  const { numberOfBooks, addBook, sellBook, todo, addData, toDelete } =
    bookStore();

  const [author, setAuthor] = useState("");
  const [book, setBook] = useState("");

  const handleAddData = () => {
    addData(author, book);
    setBook("");
    setAuthor("");
    console.log(author, book);
  };

  const deleteData = (id: number) => {
    toDelete(id);
  };
  return (
    <div className="flex min-h-screen  gap-y-4 flex-col ">
      {" "}
      <p> NuumberofBooks: {numberOfBooks}</p>
      <div>
        {" "}
        <button onClick={() => addBook()}>add books </button>
      </div>
      <div>
        {" "}
        <button onClick={() => sellBook()}>sell books </button>
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="text"
          placeholder="Book Title"
          value={book}
          onChange={(e) => setBook(e.target.value)}
        />
        <button onClick={handleAddData}>Add Todo</button>
        <div>
          {bookStore.getState().todo.map((data) => (
            <>
              <p key={data.id}> {data.author}</p>
              <p>{data.book}</p>
              <button onClick={() => deleteData(data.id)}>delete</button>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
