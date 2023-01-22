import React from 'react';
import burgerIngredientsStyles from './burger-ingredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import Item from '../item/item.jsx';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';

const BUNS_TAB = 'buns';
const SOUSES_TAB = 'souses';
const MAIN_TAB = 'main';

export default function BurgerIngredients() {

  const [bunsRef, bunsVisible] = useInView();
  const [sousesRef, sousesVisible] = useInView();

  const ingredients = useSelector(store => store.ingredients.items);

  const [current, setCurrent] = React.useState(BUNS_TAB);

  const handleScroll = () => {
    if (bunsVisible) {
      setCurrent(BUNS_TAB)
    } else if (sousesVisible) {
      setCurrent(SOUSES_TAB)
    } else {
      setCurrent(MAIN_TAB)
    }
  }

  return (
    <div className={`${burgerIngredientsStyles.container} mr-5`}>
      <div className={`${burgerIngredientsStyles.tabs} mb-8`}>
        <Tab value={BUNS_TAB} active={current === BUNS_TAB} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value={SOUSES_TAB} active={current === SOUSES_TAB} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value={MAIN_TAB} active={current === MAIN_TAB} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <div className={burgerIngredientsStyles.ingredients} onScroll={handleScroll}>
        <div ref={bunsRef}>
          <h2 className={'text text_type_main-medium mt-2 mb-6'}>Булки</h2>
          <div className={`${burgerIngredientsStyles.block} mt-1 ml-4 mr-4`}>
            {ingredients !== null && 
              ingredients.filter(obj => obj.type === 'bun').map((obj) => (
                <Item key={obj._id} data={obj} />
              ))}
          </div>
        </div>
        <div ref={sousesRef}>
          <h2 className={'text text_type_main-medium mt-2 mb-6'}>Соусы</h2>
          <div className={burgerIngredientsStyles.block}>
            {ingredients !== null && ingredients.filter(obj => obj.type === 'sauce').map((obj) => (
              <Item key={obj._id} data={obj} />
            ))}
          </div>
        </div>
        <div>
          <h2 className={'text text_type_main-medium mt-2 mb-6'}>Начинки</h2>
          <div className={burgerIngredientsStyles.block}>
           {ingredients !== null && ingredients.filter(obj => obj.type === 'main').map((obj) => (
              <Item key={obj._id} data={obj} />
            ))}
          </div>
        </div>
      </div>
      
    </div>
  )
}

BurgerIngredients.propTypes = {
}
