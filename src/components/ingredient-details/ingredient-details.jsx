import ingredientDetailsStyles from './ingredient-details.module.css';
import PropTypes from 'prop-types';


export default function IngredientDetails(props) {

  return (
    <div className={ingredientDetailsStyles.container}>
      <img src={props.data.image} alt='Image' />
      <h2 className={`${ingredientDetailsStyles.name} text text_type_main-medium mt-4 mb-8`}>{props.data.name}</h2>
      <div className={ingredientDetailsStyles.details}>
        <div className={ingredientDetailsStyles.detail}>
          <p className={`text text_type_main-default text_color_inactive mb-2`}>Калории,ккал</p>
          <p className={`text text_type_digits-default text_color_inactive`}>{props.data.calories}</p>
        </div>
        <div className={ingredientDetailsStyles.detail}>
          <p className={`text text_type_main-default text_color_inactive mb-2`}>Белки, г</p>
          <p className={`text text_type_digits-default text_color_inactive`}>{props.data.proteins}</p>
        </div>
        <div className={ingredientDetailsStyles.detail}>
          <p className={`text text_type_main-default text_color_inactive mb-2`}>Жиры, г</p>
          <p className={`text text_type_digits-default text_color_inactive`}>{props.data.fat}</p>
        </div>
        <div className={ingredientDetailsStyles.detail}>
          <p className={`text text_type_main-default text_color_inactive mb-2`}>Углеводы, г</p>
          <p className={`text text_type_digits-default text_color_inactive`}>{props.data.carbohydrates}</p>
        </div>
      </div>
    </div>
  )
}

IngredientDetails.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    calories: PropTypes.number,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
  }),
}