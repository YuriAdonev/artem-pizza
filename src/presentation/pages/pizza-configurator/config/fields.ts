export type FieldTypes = {
  type: string
  title: string
  name: string
  values: string[]
}

export const fields: FieldTypes[] = [
  { type: 'single', title: 'Размер', name: 'size', values: ['30 см', '35 см'] },
  { type: 'single', title: 'Тесто', name: 'dough', values: ['Пышное', 'Тонкое'] },
  { type: 'single', title: 'Выберите соус', name: 'sauce', values: ['Томатный', 'Белый', 'Острый'] },
  { type: 'multiple', title: 'Добавьте сыр', name: 'cheese', values: ['моцарелла', 'чеддер', 'дор блю'] },
  { type: 'multiple', title: 'Добавьте овощи', name: 'vegetables', values: ['помидор', 'грибы', 'перец'] },
  { type: 'multiple', title: 'Добавьте мясо', name: 'meat', values: ['бекон', 'пепперони', 'ветчина'] }
]
