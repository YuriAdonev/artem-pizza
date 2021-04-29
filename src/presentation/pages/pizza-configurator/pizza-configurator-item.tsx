import React from 'react'
import { getChecked, getInputType } from './utils'

export type PizzaConfiguratorItemProps = {
  type: string
  title: string
  name: string
  values: string[]
  selected: string | string[]
  onChangeSelected: (type: string, name: string, value: string) => void
}

export const PizzaConfiguratorItem: React.FC<PizzaConfiguratorItemProps> = ({ type, title, name, values, selected, onChangeSelected }: PizzaConfiguratorItemProps) => {
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    onChangeSelected(type, name, evt.target.value)
  }

  return (
    <div className="pizza-configurator-item">
      <h3 data-testid={'pizza-configurator-item-title'}>{title}</h3>
      <div data-testid={'pizza-configurator-item-wrapper'} className="pizza-configurator-item__wrap">
        {values.map((value, index) => {
          return (
            <label key={index}>
              <input
                type={getInputType(type)}
                name={name}
                checked={getChecked({ type, value, selected })}
                onChange={handleChange}
                value={value}
              />
              <span>{value}</span>
            </label>
          )
        })}
      </div>
    </div>
  )
}
