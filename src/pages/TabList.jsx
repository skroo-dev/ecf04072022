import List from '../components/List'
import { useTodo } from '../hooks/useTodo'
import { LoginContext } from '../context/LoginContext'
import { useContext } from 'react'
import { Formbtn, FormInput, ListPage,UserName,AddList } from '../components/Styled'

const TabList = () => {
  //j'importe l'element useName de mon contexte pour l'afficher en titre
  const { userName } = useContext(LoginContext)

  //J'importe les valeurs retournés par mon hook personalisé useTodo
  const { value, setValue, lists, Submit, setLists, count, setCount } =
    useTodo()

  // cette fonction enregistre dans une const toutes les listes avec un id different de celle selectionné
  // puis setList pour ressortir le tableau de liste sans celle qui était selectionné
  // puis setCount pour décrémenter mon compteur de 1
  const removeList = (listId) => {
    const newList = lists.filter((item) => item.id !== listId)
    setLists(newList)
    setCount(count - 1)
  }

  return (
    <ListPage>
      <AddList>
        <UserName> Bienvenue {userName}</UserName>
      <form onSubmit={Submit}>
        <FormInput
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Formbtn type="submit" value="Ajouter une liste" />
      </form>
      </AddList>

      {lists.map((list, id, title) => (
        <List
          key={id}
          list={list}
          removeList={removeList}
          count={count}
          title={title}
        />
      ))}
    </ListPage>
  )
}

export default TabList
