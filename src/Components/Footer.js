import styles from './Footer.module.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.left}>
                    <h3>About</h3>
                    <p>This is a Food Order app made in ReactJS. You can add & remove items from the cart and place a virtual order.</p>

                    <p>Made by Harsh Sahni:
                    {/* <div> */}
                        <FaLinkedin className={styles.icon}/>
                        <a href="https://www.linkedin.com/in/harsh-sahni" target="_blank">Linkedin</a>
                    {/* </div> */}
                    {/* <div> */}
                        <FaGithub className={styles.icon} />
                        <a href="https://www.github.com/harsh-sahni-projects" target="_blank">Github</a>
                    {/* </div> */}
                    </p>
                </div>

                <div className={styles.right}>
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer;