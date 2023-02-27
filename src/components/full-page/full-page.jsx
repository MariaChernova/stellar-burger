import fullPageStyles from './full-page.module.css';
import { EmailInput, PasswordInput, Input, Typography } from '@ya.praktikum/react-developer-burger-ui-components';


export default function FullPage(props) {
  return (
    <div className={fullPageStyles.container}>
      <img src={props.data.image_large} alt={props.data.name} />
      <h2 className={`${fullPageStyles.name} text text_type_main-medium mt-4 mb-8`}>{props.data.name}</h2>
      <div className={fullPageStyles.details}>
        <div className={fullPageStyles.detail}>
          <p className={`text text_type_main-default text_color_inactive mb-2`}>Калории,ккал</p>
          <p className={`text text_type_digits-default text_color_inactive`}>{props.data.calories}</p>
        </div>
        <div className={fullPageStyles.detail}>
          <p className={`text text_type_main-default text_color_inactive mb-2`}>Белки, г</p>
          <p className={`text text_type_digits-default text_color_inactive`}>{props.data.proteins}</p>
        </div>
        <div className={fullPageStyles.detail}>
          <p className={`text text_type_main-default text_color_inactive mb-2`}>Жиры, г</p>
          <p className={`text text_type_digits-default text_color_inactive`}>{props.data.fat}</p>
        </div>
        <div className={fullPageStyles.detail}>
          <p className={`text text_type_main-default text_color_inactive mb-2`}>Углеводы, г</p>
          <p className={`text text_type_digits-default text_color_inactive`}>{props.data.carbohydrates}</p>
        </div>
      </div>
    </div>
  )
}