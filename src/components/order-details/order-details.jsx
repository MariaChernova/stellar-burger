import orderDetailsStyles from './order-details.module.css';
import doneImage from '../../images/done.svg';
import PropTypes from 'prop-types';


export default function OrdertDetails(props) {

  return (
    <div className={orderDetailsStyles.container}>
      <h1 className={`${orderDetailsStyles.id} text text_type_digits-large`}>{props.id}</h1>
      <p className="text text_type_main-medium mt-8 mb-15">идентификатор заказа</p>
      <img src={doneImage} alt='Готово' />
      <p className="text text_type_main-default mt-15 mb-2">Ваш заказ начали готовить</p>
      <p className="mb-20 text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
    </div>
  )
}

OrdertDetails.propTypes = {
  id: PropTypes.string
}
