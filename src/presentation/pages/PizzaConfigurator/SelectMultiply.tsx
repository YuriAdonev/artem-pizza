import React from 'react'

type Props = {
  title: string
  name: string
  values: string[]
}

export const SelectMultiply: React.FC<Props> = ({ title, name, values }: Props) => {
  return (
    <div className="pizza-configurator__item">
      <h3>{title}</h3>
      {values.map(value => {
        return (
          <label key={value}>
            <input type="checkbox" name={name} />
            <span>{value}</span>
          </label>
        )
      })}
    </div>
  )
}
