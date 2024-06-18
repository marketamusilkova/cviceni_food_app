import { Button } from '../../UI/Button/Button';
import { Meal } from '../../types';
import classes from './MealItem.module.css';

export const MealItem = ({ name, image, id, price, description }: Meal) => {
    const handleAddItem = () => {
        console.log(id);
    };

    return (
        <li className={classes.mealItem}>
            <article>
                <img src={image} alt={name} />
                <div>
                    <h3 className={classes.heading}>{name}</h3>
                    <p className={classes.price}>{price}</p>
                    <p className={classes.description}>{description}</p>
                </div>
                <p className={classes.actions}>
                    <Button onClick={handleAddItem} textOnly>
                        Koupit
                    </Button>
                </p>
            </article>
        </li>
    );
};
