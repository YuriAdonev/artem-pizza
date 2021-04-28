import React from 'react'
import { PizzaConfiguratorItem } from './PizzaConfiguratorItem'

export const PizzaConfigurator: React.FC = () => {
  const handleSelectedChange = (_type: string, _name: string, _value: string): void => {}

  return (
    <form className="pizza-configurator">
      <PizzaConfiguratorItem
        title="Размер"
        name="size"
        values={['30 см', '35 см']}
        selected="30 см"
        onChangeSelected={handleSelectedChange}
      />
      <PizzaConfiguratorItem
        title="Тесто"
        name="dough"
        values={['Пышное', 'Тонкое']}
        selected="Пышное"
        onChangeSelected={handleSelectedChange}
      />
      <PizzaConfiguratorItem
        title="Выберите соус"
        name="sauce"
        values={['Томатный', 'Белый', 'Острый']}
        selected="Томатный"
        onChangeSelected={handleSelectedChange}
      />
      <PizzaConfiguratorItem
        type="multiply"
        title="Добавьте сыр"
        name="cheese"
        values={['моцарелла', 'чеддер', 'дор блю']}
        selected={[]}
        onChangeSelected={handleSelectedChange}
      />
      <PizzaConfiguratorItem
        type="multiply"
        title="Добавьте овощи"
        name="vegetables"
        values={['помидор', 'грибы', 'перец']}
        selected={[]}
        onChangeSelected={handleSelectedChange}
      />
      <PizzaConfiguratorItem
        type="multiply"
        title="Добавьте мясо"
        name="meat"
        values={['бекон', 'пепперони', 'ветчина']}
        selected={[]}
        onChangeSelected={handleSelectedChange}
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
