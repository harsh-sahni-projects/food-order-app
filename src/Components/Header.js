import HeaderCartButton from './HeaderCartButton';

import styles from './Header.module.css';


const Header = () => {
    return (
        <div className={styles.header}>
            <span className={styles.heading}>Meals</span>
            <HeaderCartButton/>
        </div>
    )
}

export default Header;