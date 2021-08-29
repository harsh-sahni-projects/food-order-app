import styles from './HeaderCartButton.module.css';
import Button from '../UI/Button';


const HeaderCartButton = (props) => {
    return (
        <Button className={styles.button} onClick={props.onClick}>
            Your Cart
            <span className={styles.badge}>0</span>
        </Button>
    )
}

export default HeaderCartButton;