import React ,{useEffect,useState}from 'react';
import Article from './Article';
import Book from './book';

function Notes(){

    // const [notes,setNotes] = useState([{
    //     title:'',
    //     content:''
    // }])

    const [newws, setNewws] = useState([]);

    // const [bookmarks,setBookmarks] = useState("")

    useEffect(()=>{
        fetch('http://localhost:3001',{
            method:'POST',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify({name : ""})
          }).then(result=>result.json()).then(value=>setNewws([...value]))
        console.log(newws)
    })



    return (<div className='container'>
        {newws.map(neww =>(
             <Book article={neww}  />
        // <div>
        //     <h1>{neww.title}</h1>
        //     <p>{neww.content}</p>
        // </div>
        )
        )}

    </div>)
}

export default Notes;