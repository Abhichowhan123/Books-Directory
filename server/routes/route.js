import express from 'express'
import { addBook ,getBooks,getBook,editBook,deleteBook} from '../controller/book_controller.js'


const router = express.Router()

router.post('/add_book',addBook)
router.get('/all_book',getBooks)
router.get('/single_book/:id',getBook)
router.put('/edit_book/:id',editBook)
router.delete('/delete_book/:id',deleteBook)

export default router