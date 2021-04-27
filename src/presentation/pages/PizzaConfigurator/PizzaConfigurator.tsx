import React from 'react'
import { SelectSingle } from './SelectSingle'

export const PizzaConfigurator: React.FC = () => {
  return (
    <form className="pizza-configurator">
      <SelectSingle
        title="Размер"
        name="size"
        values={['30 см', '35 см']}
      />
      <SelectSingle
        title="Тесто"
        name="dough"
        values={['Пышное', 'Тонкое']}
      />
      <SelectSingle
        title="Выберите соус"
        name="sauce"
        values={['Томатный', 'Белый', 'Острый']}
      />
      <div className="pizza-configurator__item">
        <h3>Добавьте сыр</h3>
        <label>
          <input type="checkbox" name="cheese" />
          <span>моцарелла</span>
        </label>
        <label>
          <input type="checkbox" name="cheese" />
          <span>чеддер</span>
        </label>
        <label>
          <input type="checkbox" name="cheese" />
          <span>дор блю</span>
        </label>
      </div>
      <div className="pizza-configurator__item">
        <h3>Добавьте овощи</h3>
        <label>
          <input type="checkbox" name="vegetables" />
          <span>помидор</span>
        </label>
        <label>
          <input type="checkbox" name="vegetables" />
          <span>грибы</span>
        </label>
        <label>
          <input type="checkbox" name="vegetables" />
          <span>перец</span>
        </label>
      </div>
      <div className="pizza-configurator__item">
        <h3>Добавьте мясо</h3>
        <label>
          <input type="checkbox" name="meat" />
          <span>бекон</span>
        </label>
        <label>
          <input type="checkbox" name="meat" />
          <span>пепперони</span>
        </label>
        <label>
          <input type="checkbox" name="meat" />
          <span>ветчина</span>
        </label>
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
