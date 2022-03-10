import Link from "next/link";
import styles from '../styles/Home.module.css'

const CardIndex = (props) => {
    return (
      <div className="m-8 w-80">        
        <div className="relative px-4 -mt-16  ">
          <div className="bg-white p-6 rounded-lg shadow-xl">
          <div className="flex justify-center">            
          </div>
            <h4 className="mt-1 text-red-500 text-xl font-semibold uppercase leading-tight">{props.title}</h4>      
            <div className="mt-1 truncate">
              {props.description}          
            </div>
            <div className="mt-4">
              <Link key={props.id} href={`/posts/` + props.id}>
                <button className={styles.buttonPink}>
                  Détails
                </button>
              </Link>
            </div>  
          </div>
        </div>
      </div>        
    )}

    export default CardIndex;

