import styles from './HeaderCartButton.module.css';
import Button from '../UI/Button';


const HeaderCartButton = () => {
    return (
        <Button className={styles.button}>
            Your Cart
            <span className={styles.badge}>0</span>
        </Button>
    )
}

export default HeaderCartButton;