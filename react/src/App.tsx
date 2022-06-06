import React, {useState} from 'react';
import CreateBook from "./components/CreateBook";
import ListBooks from "./components/ListBooks";

function App() {

    const [book, setBook] = useState({
        title: '',
    });

    return (
        <div className="container mt-5">
            <div>
                <h1 className="text-center">CRUD APP</h1>
                <hr/>
            </div>
            <div className="row">
                <ListBooks/>
                <CreateBook book={book} setBook={setBook}/>
            </div>
        </div>
    );
}

export default App;
