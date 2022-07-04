import { useState } from 'react'
import { Btn, FormInput, TextContent } from './Styled'

const Todo = ({ list, removeTodo }) => {
  // j'initialise un useState pour connaitre l'etat de ma checkbox, si elle est coché, le texte sera barré
  const [checked, setChecked] = useState(false)

  return (
    <div>
      <TextContent style={{ textDecoration: checked && 'line-through' }}>
        {list.text}
        <FormInput type="checkbox" onChange={() => setChecked(!checked)} />
        <Btn onClick={() => removeTodo(list.id)}>Supprimer carte</Btn>
      </TextContent>
    </div>
  )
}

export default Todo
