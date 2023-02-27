import orderStyles from './order.module.css';
import { FormattedDate, CurrencyIcon, Input, Typography } from '@ya.praktikum/react-developer-burger-ui-components';


export default function Order() {
  const today = new Date();
  return (
    <div className={orderStyles.container}>
      <div className={orderStyles.orderId}>
        <p className="text text_type_digits-default">#034535</p>
        <FormattedDate className="text text_type_main-default text_color_inactive" 
        date={
          new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate(),
            today.getHours(),
            today.getMinutes() - 1,
            0,
          )
          }
        />
      </div>
      <h2 className="text text_type_main-medium mt-6 mb-6">Death Star Starship Main бургер</h2>
      <div className={orderStyles.ingredients}>
        <div className={orderStyles.images}>
          <div className={orderStyles.image}></div>
          <div className={orderStyles.image}></div>
          <div className={orderStyles.image}></div>
        </div>
        <div className={orderStyles.price}>
          <h1 className="text text_type_digits-default mr-2">480</h1>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  )
}