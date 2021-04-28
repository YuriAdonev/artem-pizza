import React, { useState } from 'react'
import { PizzaConfiguratorItem } from './PizzaConfiguratorItem'

const fields = [
  { type: 'single', title: 'Размер', name: 'size', values: ['30 см', '35 см'] },
  { type: 'single', title: 'Тесто', name: 'dough', values: ['Пышное', 'Тонкое'] },
  { type: 'single', title: 'Выберите соус', name: 'sauce', values: ['Томатный', 'Белый', 'Острый'] },
  { type: 'multiply', title: 'Добавьте сыр', name: 'cheese', values: ['моцарелла', 'чеддер', 'дор блю'] },
  { type: 'multiply', title: 'Добавьте овощи', name: 'vegetables', values: ['помидор', 'грибы', 'перец'] },
  { type: 'multiply', title: 'Добавьте мясо', name: 'meat', values: ['бекон', 'пепперони', 'ветчина'] }
]

const initialState = {
  size: '30 см',
  dough: 'Пышное',
  sauce: 'Томатный',
  cheese: [],
  vegetables: [],
  meat: []
}

export const PizzaConfigurator: React.FC = () => {
  const [pizzaConfiguration, _setPizzaConfiguration] = useState(initialState)
  const handleSelectedChange = (_type: string, _name: string, _value: string): void => {}

  return (
    <form className="pizza-configurator">
      {fields.map(field => (
        <PizzaConfiguratorItem
          key={field.name}
          type={field.type}
          title={field.title}
          name={field.name}
          values={field.values}
          selected={pizzaConfiguration[field.name]}
          onChangeSelected={handleSelectedChange}
        />
      ))}
      <button>Заказать за 200 руб</button>
      <div className="pizza-configurator__selected">
        <h2>Твоя пицца</h2>
        <p>30 см на толстом тесте</p>
        <p>Томатный соус, Моцарелла, Томаты</p>
      </div>
    </form>
  )
}
