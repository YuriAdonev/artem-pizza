import React from 'react'
import { SelectMultiply } from './SelectMultiply'
import { SelectSingle } from './SelectSingle'

export const PizzaConfigurator: React.FC = () => {
  return (
    <form className="pizza-configurator">
      <SelectSingle
        title="Размер"
        name="size"
        values={['30 см', '35 см']}
      />
      <SelectSingle
        title="Тесто"
        name="dough"
        values={['Пышное', 'Тонкое']}
      />
      <SelectSingle
        title="Выберите соус"
        name="sauce"
        values={['Томатный', 'Белый', 'Острый']}
      />
      <SelectMultiply
        title="Добавьте сыр"
        name="cheese"
        values={['моцарелла', 'чеддер', 'дор блю']}
      />
      <SelectMultiply
        title="Добавьте овощи"
        name="vegetables"
        values={['помидор', 'грибы', 'перец']}
      />
      <SelectMultiply
        title="Добавьте мясо"
        name="meat"
        values={['бекон', 'пепперони', 'ветчина']}
      />
      <button>Заказать за 200 руб</button>
      <div className="pizza-configurator__selected">
        <h2>Твоя пицца</h2>
        <p>30 см на толстом тесте</p>
        <p>Томатный соус, Моцарелла, Томаты</p>
      </div>
    </form>
  )
}
