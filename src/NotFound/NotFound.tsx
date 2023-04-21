import { useNavigate } from 'react-router-dom';
import styles from './NotFound.module.css'

function NotFound(){
  const navigate = useNavigate();
  return( 
  <div className={styles.notFound}>
    <p className={styles.upperNum}>404</p>
    <h1 className={styles.title}>Something went wrong</h1>
    <button className={styles.goBack} onClick={() => navigate("/")}>go Home </button>

  </div>
  )
}
export default NotFound