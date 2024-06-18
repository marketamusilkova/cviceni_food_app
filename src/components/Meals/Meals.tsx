import { Modal } from '../../UI/Modal/Modal';
import { useFetch } from '../../hooks/useFetch';
import { Meal } from '../../types';
import { MealItem } from '../MealItem/MealItem';
import classes from './Meals.module.css';

export const Meals = () => {
    const { data, error, loading } = useFetch<Meal[]>(
        'https://food-app-f3cb8-default-rtdb.firebaseio.com/meals.json'
    );
    console.log(data);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) return <div>{error.message}</div>;

    // Místo if loading mohu napsat data === null a pak nebudu muset psát ten otazník za data.
    return (
        <>
            <Modal open={true} onClose={() => console.log('Zavírám')}>
                {' '}
                <h1>Já jsem nejvíc modál!</h1>
            </Modal>
            <ul className={classes.meals}>
                {data?.map((item) => <MealItem key={item.id} {...item} />)}
            </ul>
        </>
    );
};

// Modal je natvrdo otvření pomocí hodnoty true... V prohlížeči ho vypneme stisknutím esc.
