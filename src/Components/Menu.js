import styles from './Menu.module.css';
import Card from './Card';
import MealItem from './MealItem';

const Menu = (props) => {
    const allMeals = props.meals;
    console.log('mea', !allMeals.length)
    return (
        <Card className={styles.card}>
        {(!allMeals.length) ? 'Fetching from database...' : 
        allMeals.map((mealItem) => (
          <MealItem
            key={mealItem.id}
            id={mealItem.id}
            name={mealItem.name}
            description={mealItem.description}
            price={mealItem.price}
          />
        ))}
        </Card>
    )
}

export default Menu;