import React from "react";
import { useSelector } from "react-redux";
import styles from '../styles/Home.module.css';


const PostCard = (props) => {

  const userToken = useSelector(state => state.token);

  return (
  <div className={styles.container}>
    
    <div className="border rounded p-10">
      <h2 className="font-bold text-4xl text-red-500 capitalize mb-4">{props.title}</h2>
      <p className="m-6">{props.description}</p>
      <p className="m-6 text-3xl font-bold">{props.price} €</p>      
    </div>
  </div>

)}

export default PostCard;
