import React, { useState } from 'react'
import { fields, initialState } from './config'
import { PizzaConfiguratorItem } from './pizza-configurator-item'

export const PizzaConfigurator: React.FC = () => {
  const [pizzaConfiguration, setPizzaConfiguration] = useState(initialState)
  const handleSelectedChange = (type: string, name: string, value: string): void => {
    if (type === 'single') {
      setPizzaConfiguration(state => ({
        ...state,
        [name]: value
      }))
    }
    if (type === 'multiply') {
      setPizzaConfiguration(state => {
        let values = []
        if (state[name].includes(value)) {
          values = state[name].filter((item: string) => item !== value)
        } else {
          values = [...state[name], value]
        }
        return {
          ...state,
          [name]: values
        }
      })
    }
  }

  return (
    <form className="pizza-configurator">
      <div data-testid="pizza-configurator-fields" className="pizza-configurator__fields">
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
      </div>
      <button data-testid="pizza-configurator-submit">Заказать за 200 руб</button>
      <div className="pizza-configurator__selected">
        <h2>Твоя пицца</h2>
        <p>30 см на толстом тесте</p>
        <p>Томатный соус, Моцарелла, Томаты</p>
      </div>
    </form>
  )
}
