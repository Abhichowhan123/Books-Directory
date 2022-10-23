import Book from '../schema/book_schema.js';
 


export const addBook  = async(req,res)=>{
    const book = req.body;
    const newBook = new Book(book);
    try {
        await newBook.save();
        res.status(201).json(newbook)
    } catch (error) {
        res.status(409).json({message:error.message});
    }

}

export const getBooks= async(req,res)=>{
    try {
        const books  = await Book.find()
        res.status(200).json(books)
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}



export const getBook= async(req,res)=>{
    try {
        const book  = await Book.find({id:req.params.id})
        res.status(200).json(book)
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}


export const editBook =async(req,res)=>{
    let book = req.body ;
    const editbook = new Book(book);
    try {
        await Book.updateOne({_id:req.params.id},editbook)
        res.status(201).json(editUser)
        
    } catch (error) {
        res.status(409).json({message:error.message});
    }

}

export const deleteBook = async(req,res)=>{
    try {
        await Book.deleteOne({_id:req.params.id})
        res.status(200).json({message:"book deleted sucessfully"})
    } catch (error) {
        res.status(409).json({message:error.message});
    }

}