import { useTodo } from '../hooks/useTodo'
import Todo from './Todo'
import {
  Btn,
  Formbtn,
  FormInput,
  ListTitle,
  ListContainer,
  TextContent,
} from './Styled'

const List = ({ list, removeList }) => {
  // j'importe les valeurs retournés de mon hook personnalisé
  const { value, setValue, lists, Submit, setLists } = useTodo()

  //même fonction que removeList mais pour les todos
  const removeTodo = (todoId) => {
    const newList = lists.filter((item) => item.id !== todoId)
    setLists(newList)
    console.log(newList)
  }

  return (
    <ListContainer>
      <ListTitle> {list.title}</ListTitle>
      <Btn onClick={() => removeList(list.id)}>Supprimer liste</Btn>
      <TextContent>{list.text}</TextContent>

      <form onSubmit={Submit}>
        <FormInput
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Formbtn type="submit" value="Ajouter une carte" />
      </form>

      {lists.map((list, id) => (
        <Todo key={id} list={list} removeTodo={removeTodo} />
      ))}
    </ListContainer>
  )
}

export default List
