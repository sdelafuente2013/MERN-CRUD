import axios from "axios";

// =======================================
// ============ DELETE A BOOK ============
// =======================================
const deleteBook = async (id: string) => {
    try {
        await axios.delete(
            `http://localhost:9000/api/books/${id}`
        );
    } catch (error) {
        console.log(error);
    }
};

export default {deleteBook};

