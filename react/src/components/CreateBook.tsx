import React from "react";
import axios from "axios";

const CreateBook = ({...props}) => {
    const {book, setBook} = props;

    // Capturar cambios en el input
    const handleChange = (e: any) => {
        setBook({
            title: e.target.value
        })
    }

    // ======================================
    // ============ CREATE A BOOK ===========
    // ======================================
    const handleSubmit = async (e: any) => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:9000/api/books", {
                title: book.title
            })
            setBook({title: ''})
        } catch (error) {
            console.log("No puede crear un libro sin titulo");
        }
    }

    return (
        <div className="col-4">
            <h4 className="text-center">
                Agregar nuevo libro:
            </h4>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Ingrese titulo del libro.."
                    value={book.title}
                    required
                    onChange={handleChange}
                />
                <button className="btn btn-dark btn-block" type="submit">Agregar</button>
            </form>
        </div>
    )
}

export default CreateBook;

