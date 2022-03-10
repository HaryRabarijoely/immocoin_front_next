import { useRef } from "react";
import { useSelector } from "react-redux";
import styles from '../../../styles/Home.module.css'


export const getServerSideProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('http://localhost:3000/realties' + id);
  const data = await res.json();
  return {
      props: {post: data}
  }
}

const EditPost = ({post}) => {

  const userToken = useSelector(state => state.token);

  const titleRef = useRef();
  const descriptionRef = useRef();
  const priceRef = useRef();


  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:3000/realties/${post.id}`, {
      method: "put",
      headers: {
        "Authorization": `${userToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "title": `${titleRef.current.value}`,
        "description": `${descriptionRef.current.value}`,
        "price": `${priceRef.current.value}`,
      })
    })
      .then(response => {
        if(response.ok){
          window.location = "/posts/owner_posts"
        }else (alert('Erreur !'));
      })
      .catch(error => console.log('error', error));
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>Modifiez votre annonce</div>
      <form onSubmit={handleSubmit} className="bg-white w-3/4 shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">Titre de l'annonce (10 caractères minimum) :
        </label>
        <input name="title" type="text" ref={titleRef} defaultValue={post.title} required="required" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"/>
        <label className="block text-gray-700 text-sm font-bold mb-2">Contenu de l'annonce (50 caractères minimum) :
        </label>
        <textarea name="content" ref={descriptionRef} defaultValue={post.description} required="required" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"/>
        <div>
          <label className="inline text-gray-700 text-sm font-bold mb-2 mr-2">Prix du bien :
          </label>
          <input name="price" type="number" ref={priceRef} defaultValue={post.price} required="required" className="inline shadow appearance-none border rounded w-48 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"/>
        </div>
      </div>
      <input type="submit" value="Publier" className={styles.buttonPink}/>
    </form>
    </div>
  )
}

export default EditPost;