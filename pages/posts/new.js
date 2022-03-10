import React, {useState} from 'react'
import Router from 'next/router';

const NewPost = () => {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [description,setDescription] = useState('')
  
  
  const handlePost=()=>{
    
    const realities = {
        
        title: title,
        price: price,
        description: description
      
    }  
    fetch('http://localhost:3000/realties', {
      method: 'post',
      headers: {
        
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(realities)
        })
        .then(res => {
          if(res.ok){
            Router.push('/')
          }else (alert('erreur'));
        })
        .catch(error => console.log('error', error));

    }
      
  
   
      return (
        <form > 
            <input type="text" onChange={e => setTitle(e.target.value) } value={title} placeholder="Title" /><br />
            <input type="text" onChange={e => setPrice(e.target.value) } value={price} placeholder="Price"/><br />
            <input type="text" onChange={e => setDescription(e.target.value) } value={description} placeholder="Description"/><br />
            <button type="button" onClick={() => handlePost() }>Register</button>
        </form>
        )
   
  
}


export default NewPost; 


// import Cookies from "js-cookie";
// import Router from 'next/router';
// import { useRef } from "react";
// import styles from '../../styles/Home.module.css'

// function PostCreation () {
  
//   const uploadToClient = (event) => {
//     if (event.target.files && event.target.files[0]) {
//       const i = event.target.files[0];
//       console.log(i);
      
//     }
//   };

//   const titleRef = useRef();
//   const contentRef = useRef();
//   const priceRef = useRef();
  

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const data = new FormData(e.target);

//     fetch('http://localhost:3000/realties', {
//       method: "post",
//       headers: {
//         "Authorization": `${Cookies.get('token')}`
//       },
//       body: data
//     })
//       .then(response => {
//         if(response.ok){
//           Router.push('/')
//         }else (alert('Erreur !'));
//       })
//       .catch(error => console.log('error', error));
//   }

//   return (
//     <div className={styles.container}>
//       <div className={styles.title}>Créer une nouvelle annonce</div>
//       <form onSubmit={handleSubmit} className="bg-white w-3/4 shadow-md rounded px-8 pt-6 pb-8 mb-4">
//       <div>
//         <label className="block text-gray-700 text-sm font-bold mb-2">Titre de l'annonce (10 caractères minimum) :
//         </label>
//         <input name="title" type="text" ref={titleRef} placeholder="Donnez un nom à votre annonce..." required="required" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"/>
//         <label className="block text-gray-700 text-sm font-bold mb-2">Contenu de l'annonce (50 caractères minimum) :
//         </label>
//         <textarea name="content" ref={contentRef} placeholder="Décrivez votre annonce en quelques mots" required="required" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"/>
//         <div>
//           <label className="inline text-gray-700 text-sm font-bold mb-2 mr-2">Prix du bien :
//           </label>
//           <input name="price" type="number" ref={priceRef} required="required" className="inline shadow appearance-none border rounded w-48 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"/>
//         </div>        
//       </div>
//       <input type="submit" value="Publier" className={styles.buttonPink}/>
//     </form>
//     </div>    
//   )
// }

// export default PostCreation