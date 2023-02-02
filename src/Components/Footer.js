import styles from './Footer.module.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
// import author from '../../public/author.jpg';


const Footer = () => {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.left}>
                    <h3>About</h3>
                    <p>This is a Food Order App made in ReactJS.<br/>You can add & remove items from the cart and place a virtual order.</p>

                </div>
                <div className={styles.mid}>
                    <h3>Developed by</h3>
                    <p>Harsh Sahni</p>
                </div>

                <div className={styles.right}>
                    <h3>Links</h3>
                    <p>
                        <span>
                            <FaLinkedin className={styles.icon}/>
                            <a href="https://www.linkedin.com/in/harsh-sahni" target="_blank" rel="noreferrer" >
                                Linkedin
                            </a>
                        </span>
                        
                        <span>
                            <FaGithub className={styles.icon + " " + styles.githubIcon} />
                            <a href="https://github.com/harsh-sahni-projects/food-order-app" target="_blank" rel="noreferrer" >
                                Github
                            </a>
                        </span>
                    </p>

                </div>
            </div>
        </div>
        </>
    )
}

export default Footer;