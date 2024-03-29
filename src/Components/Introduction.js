import { Fragment } from 'react';
import Card from './Card';
import styles from './Introduction.module.css';
import mealsImg from '../Images/food.png';

const Introduction = () => {
    return (
        <Fragment>
            <div className={styles.imgContainer}>
                <div></div>
                <img src={mealsImg} alt="Food items" className={styles.foodImg}/>
                <div></div>
            </div>
            <Card className={styles['description-container']}>
                {/* <section className={classes.summary}> */}
                    <h2>Delicious Food, Delivered To You</h2>
                    <p>
                        Choose your favorite meal from our broad selection of available meals
                        and enjoy a delicious lunch or dinner at home.
                    </p>
                    <p>
                        All our meals are cooked with high-quality ingredients, just-in-time and
                        of course by experienced chefs!
                    </p>
                {/* </section> */}
            </Card>
        </Fragment>
    )
}

export default Introduction;