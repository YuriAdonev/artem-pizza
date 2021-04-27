import React from 'react'

type Props = {
  type: 'single' | 'multiply'
  title: string
  name: string
  values: string[]
}

export const PizzaConfiguratorItem: React.FC<Props> = ({ type, title, name, values }: Props) => {
  return (
    <div className="pizza-configurator__item">
      <h3>{title}</h3>
      {values.map(value => {
        const inputType = type === 'single' ? 'radio' : 'checkbox'
        return (
          <label key={value}>
            <input type={inputType} name={name} />
            <span>{value}</span>
          </label>
        )
      })}
    </div>
  )
}
