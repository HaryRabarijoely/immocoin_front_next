import React from 'react';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const Profile = () => {
  const [currentUser, setCurrentUser] = React.useState({});
  const userToken = useSelector(state => state.token);

  React.useEffect(
    () => {
      if (!userToken) { window.location = "/login" }
      else
      {let myHeaders = new Headers();
      myHeaders.append("Authorization", `${userToken}`);

      let requestOptions = {
        method: 'GET',
        headers: myHeaders
      };

      fetch(`${process.env.url}/profile`, requestOptions)
      .then(response => response.json())
      .then(result=> setCurrentUser(result))
      .catch(error => console.log('error', error));}
    }
    , []
  )
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
      Mon profil
      </h3>
      <div className="mb-2 text-gray-700 mt-10">
        <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
        Mon e-mail : {currentUser.email}
      </div>
      <div className="mb-2 text-gray-700">
        <i className="fas fa-university mr-2 text-lg text-gray-500"></i>
        Mon nom : {currentUser.last_name}
      </div>
      <div className="mb-6 text-gray-700">
        <i className="fas fa-university mr-2 text-lg text-gray-500"></i>
        Mon prénom : {currentUser.first_name}
      </div>
      <Link href="/profile/edit"><a className={styles.buttonPink}>Modifier mes informations</a></Link>
    </div>
  )
};

export default Profile
