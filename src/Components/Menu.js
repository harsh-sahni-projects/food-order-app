import styles from './Menu.module.css';
import Card from './Card';
import MealItem from './MealItem';

const Menu = (props) => {
    const allMeals = props.meals;
    const classes = styles.card + ' ' + styles.animate;

    if (!allMeals.length) {
      return (
        <section className={styles.loadingMsg}>
          <p>Fetching meals from database...</p>
        </section>
      )
    }
  
    return (
        <Card className={classes}>
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