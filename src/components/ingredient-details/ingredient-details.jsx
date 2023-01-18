import ingredientDetailsStyles from './ingredient-details.module.css';
import {ingredientType} from '../../utils/types.js'


export default function IngredientDetails(props) {
  return (
    <div className={ingredientDetailsStyles.container}>
      <img src={props.data.image_large} alt='Внешний вид ингредиента' />
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
  data: ingredientType.isRequired,
}
