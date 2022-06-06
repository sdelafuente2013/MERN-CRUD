import React, {useEffect, useState} from "react";
import axios from "axios";
import DeleteBook from "./DeleteBook";
import UpdateBook from "./UpdateBook";

const ListBooks = () => {

    const [books, setBooks] = useState([])
    const [edit, setEdit] = useState(0);

    // [GET] Listar todos los libros
    useEffect(() => {
        axios.get("http://localhost:9000/api/books")
            .then(response => setBooks(response.data))
            .catch(error => console.log(error));

    });

    return (
        <div className="col-8">
            <h4 className="text-center">Lista de Libros</h4>
            <ul className="list-group">
                {
                    books.map(({title, _id}, key) => (
                        <li className="list-group-item" key={key}>
                            <span className="lead">{title}</span>

                            <button
                                className="btn btn-sm btn-danger float-center mx-2"
                                onClick={() => {
                                    DeleteBook.deleteBook(_id)
                                }}
                            >Eliminar
                            </button>

                            <button
                                className="btn btn-sm btn-warning float-right"
                                onClick={() => {
                                    setEdit(_id)
                                }}
                            >Editar
                            </button>

                            {edit === _id && (
                                <UpdateBook book={{title, _id}} setEdit={setEdit}/>
                            )}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ListBooks;