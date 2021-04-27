import React from 'react'

export type PizzaConfiguratorItemProps = {
  type?: 'multiply'
  title: string
  name: string
  values: string[]
}

export const PizzaConfiguratorItem: React.FC<PizzaConfiguratorItemProps> = ({ type, title, name, values }: PizzaConfiguratorItemProps) => {
  return (
    <div className="pizza-configurator-item">
      <h3>{title}</h3>
      <div data-testid={'pizza-configurator-item-wrapper'} className="pizza-configurator-item__wrap">
        {values.map((value, index) => {
          const inputType = type === 'multiply' ? 'checkbox' : 'radio'
          return (
            <label key={index}>
              <input type={inputType} name={name} />
              <span>{value}</span>
            </label>
          )
        })}
      </div>
    </div>
  )
}
