import HeaderCartButton from './HeaderCartButton';
import styles from './Header.module.css';



const Header = (props) => {
    return (
        <div className={styles.header}>
            <span className={styles.heading}>Meals</span>
            <HeaderCartButton onClick={props.onShowCart}/>
        </div>
    )
}

export default Header;