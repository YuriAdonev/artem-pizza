import React from 'react'

export const PizzaConfigurator: React.FC = () => {
  return (
    <form className="pizza-configurator">
      <div className="pizza-configurator__item">
        <h3>Размер</h3>
        <label>
          <input type="radio" name="size" />
          <span>30 см</span>
        </label>
        <label>
          <input type="radio" name="size" />
          <span>35 см</span>
        </label>
      </div>
      <div className="pizza-configurator__item">
        <h3>Тесто</h3>
        <label>
          <input type="radio" name="dough" />
          <span>Пышное</span>
        </label>
        <label>
          <input type="radio" name="dough" />
          <span>Тонкое</span>
        </label>
      </div>
      <div className="pizza-configurator__item">
        <h3>Выберите соус</h3>
        <label>
          <input type="radio" name="sauce" />
          <span>Томатный</span>
        </label>
        <label>
          <input type="radio" name="sauce" />
          <span>Белый</span>
        </label>
        <label>
          <input type="radio" name="sauce" />
          <span>Острый</span>
        </label>
      </div>
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
