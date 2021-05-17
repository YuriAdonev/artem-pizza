import React, { useEffect, useState } from 'react'
import { fields, initialState } from './config'
import { calculatePrice, getOrderInfoBase, getOrderInfoFillings, addFilling, removeFilling } from './utils'
import { PizzaConfiguratorItem } from './PizzaConfiguratorItem'

export const PizzaConfigurator: React.FC = () => {
  const [pizzaConfiguration, setPizzaConfiguration] = useState(initialState)
  const [showOrderInfo, setShowOrderInfo] = useState(false)

  useEffect(() => {
    if (showOrderInfo) {
      setShowOrderInfo(false)
    }
  }, [pizzaConfiguration])

  const handleSelectedChange = (type: string, name: string, value: string): void => {
    if (type === 'single') {
      setPizzaConfiguration(state => ({
        ...state,
        [name]: value
      }))
    }
    if (type === 'multiple') {
      setPizzaConfiguration(state => {
        const isAlreadySelected = state[name].includes(value)
        return {
          ...state,
          [name]: isAlreadySelected ? removeFilling(state[name], value) : addFilling(state[name], value)
        }
      })
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    setShowOrderInfo(true)
  }

  return (
    <form className="pizza-configurator" onSubmit={handleSubmit}>
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
      <button data-testid="pizza-configurator-submit">Заказать за {calculatePrice(pizzaConfiguration)} руб</button>
      <div data-testid="pizza-configurator-order-info" className="pizza-configurator-order-info">
        {showOrderInfo && (
          <>
            <h2>Твоя пицца</h2>
            <p data-testid="pizza-configurator-order-info-base">{getOrderInfoBase(pizzaConfiguration)}</p>
            <p data-testid="pizza-configurator-order-info-fillings">{getOrderInfoFillings(pizzaConfiguration)}</p>
            <p data-testid="pizza-configurator-order-info-price">Цена {calculatePrice(pizzaConfiguration)} руб</p>
          </>
        )}
      </div>
    </form>
  )
}
