import styles from "./styles.module.css";
import image from '../../assets/Raja.jpg';

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
        
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>Raja's page here</h1>
                
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
            <img src={image} alt="Loading.."/>
            
            
		</div>
       
        
        
	);
};

export default Main;