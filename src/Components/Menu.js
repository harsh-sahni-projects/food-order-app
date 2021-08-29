import styles from './Menu.module.css';
import Card from './Card';
import MealItem from './MealItem';

const Menu = (props) => {
    return (
        <Card className={styles.card}>
        {props.meals.map((mealItem) => (
          <MealItem
            key={mealItem.id}
            name={mealItem.name}
            description={mealItem.description}
            price={mealItem.price}
          />
        ))}
        </Card>
    )
}

export default Menu;