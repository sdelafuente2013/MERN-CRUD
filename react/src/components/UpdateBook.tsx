import React from "react";
import axios from "axios";

export const UpdateBook = ({...props}) => {
    const {book, setBooks, setEdit} = props;

    // =======================================
    // ============ UPDATE A BOOK ============
    // =======================================
    const updateBook = async (e: any, id: string) => {
        e.preventDefault()
        await axios.put(`http://localhost:9000/api/books/${id}`, {
            title: e.target.title.value
        })
        setEdit(0)
    }

    return (
        <div>
            <form onSubmit={e => updateBook(e, book._id)}>
                <input
                    type="text"
                    name="title"
                    className="form-control mb-2"
                    required
                    placeholder={book.title}
                />
                <button className="btn btn-dark btn-block" type="submit">Aceptar</button>
            </form>
        </div>
    )
}

export default UpdateBook;