//Book Class : Represent a book

class Book
{
    constructor(title,author,isbn)
    {
        this.title=title
        this.author=author
        this.isbn=isbn
    }
}
//UI Class : handle UI tasks

class UI
{
    // static displayBooks()
    // {
    //     // const storeBook=[
    //     //     {
    //     //         title:'Book One',
    //     //         author:'Jaun Elia',
    //     //         isbn:'1990'
    //     //     },
    //     //     {
    //     //         title:'Book Two',
    //     //         author:'Ladden Jafri',
    //     //         isbn:'2020'
    //     //     }
    //     // ]
    //     // const books=storeBook
    //     // books.forEach((b)=>UI.addBookToList(b))
    // }
     static addBookToList(b)
     {
         const list=document.querySelector('.list')
         const element=document.createElement('ul')

         element.innerHTML=`
                            <li>${b.title}<li>
                            <li>${b.author}<li>
                            <li>${b.isbn}<li>
                            <li><a href='#' class='delete'>X</a><li>
                            `
        list.appendChild(element)
     }

     //function to clear fields ones the input is done
     static clearField()
     {
        document.querySelector('#title').value=''
        document.querySelector('#author').value=''
        document.querySelector('#isbn').value=''
     }

     //function to delete element
     static delBook(dl)
     {
         if(dl.classList.contains('delete'))
         {
             dl.parentElement.parentElement.remove()
             UI.showAlert('Book Deleted ','success')
         }
         
     }

     //FUNCTION TO SHOW ALERT MESSAGE IF THERE IS ANY UNFILLED SPACE
     static showAlert(message,classkaName)
     {
         const div=document.createElement('div')
         div.className=classkaName
         div.appendChild(document.createTextNode(message))
         const mid=document.querySelector('.mid')
         const form = document.querySelector('#bookForm')
         mid.insertBefore(div,form)

         //to remove alert message after few second we call timeout function
         setTimeout(()=>document.querySelector('.alert').remove(),2000)
         setTimeout(()=>document.querySelector('.success').remove(),2000)
     }
   
}

//Event : Display Book
// document.addEventListener('DOMContentLoaded',UI.displayBooks)

//Event : Add Book

  document.querySelector('#bookForm').addEventListener('submit',(e)=>{

    e.preventDefault()
      const title=document.querySelector('#title').value
      const author=document.querySelector('#author').value
      const isbn=document.querySelector('#isbn').value

    if(title==='' || author==='' || isbn==='')
    {
        UI.showAlert('Fill All Fields','alert')
    }
    else
    {
        const bk=new Book(title,author,isbn)
        UI.addBookToList(bk)   //Adding book to list 

        //function call to show message of book added
        UI.showAlert('Book Added Successfully','success')
        UI.clearField()
    }

    })
  
//Event : Remove Book
document.querySelector('.list').addEventListener('click',(e)=>
{
    
    UI.delBook(e.target)
})