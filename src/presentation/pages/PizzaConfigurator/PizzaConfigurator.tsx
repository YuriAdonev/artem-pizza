import React, { useState } from 'react'
import { pizzaConfiguratorFields } from './config'
import { PizzaConfiguratorItem } from './PizzaConfiguratorItem'

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
      <div data-testid="pizza-configurator-fields" className="pizza-configurator__fields">
        {pizzaConfiguratorFields.map(field => (
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
      </div>
      <button>Заказать за 200 руб</button>
      <div className="pizza-configurator__selected">
        <h2>Твоя пицца</h2>
        <p>30 см на толстом тесте</p>
        <p>Томатный соус, Моцарелла, Томаты</p>
      </div>
    </form>
  )
}
