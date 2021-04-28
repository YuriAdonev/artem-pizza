import React from 'react'

export type PizzaConfiguratorItemProps = {
  type?: 'multiply'
  title: string
  name: string
  values: string[]
  selected: string | string[]
}

export const PizzaConfiguratorItem: React.FC<PizzaConfiguratorItemProps> = ({ type, title, name, values, selected }: PizzaConfiguratorItemProps) => {
  const handleChange = (): void => {}

  return (
    <div className="pizza-configurator-item">
      <h3 data-testid={'pizza-configurator-item-title'}>{title}</h3>
      <div data-testid={'pizza-configurator-item-wrapper'} className="pizza-configurator-item__wrap">
        {values.map((value, index) => {
          let isChecked = value === selected
          let inputType = 'radio'
          if (type === 'multiply') {
            inputType = 'checkbox'
            isChecked = selected.includes(value)
          }
          return (
            <label key={index}>
              <input
                type={inputType}
                name={name}
                checked={isChecked}
                onChange={handleChange}
              />
              <span>{value}</span>
            </label>
          )
        })}
      </div>
    </div>
  )
}
