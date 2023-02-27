import orderFeedStyles from './order-feed.module.css';
import Order from '../order/order';
// import { EmailInput, PasswordInput, Input, Typography } from '@ya.praktikum/react-developer-burger-ui-components';


export default function OrderFeed() {
  return (
    <div>
      <h1 className={`${orderFeedStyles.title} text text_type_main-large mb-5`}>Лента заказов</h1>
      <div className={orderFeedStyles.container}>
        <div className={orderFeedStyles.orders}>
          <Order />
          <Order />
          <Order />
          <Order />
        </div>
        <div className={orderFeedStyles.stats}>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  )
}