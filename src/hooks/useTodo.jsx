import { useState } from 'react'

export const useTodo = () => {
  //j'initialise 3 states, un value = e.target.value
  // un lists dans lequel j'injecte mon value en lui ajoutant un id + un titre
  // un count en tant que compteur qui incrementera et décrémentera si j'ajoute ou retires une liste
  const [value, setValue] = useState('')
  const [lists, setLists] = useState([])
  const [count, setCount] = useState(1)

  //fonction submit, ajoutera une liste ou une todo,
  // e.preventDefault pour que la page ne se rafraichisse pas à l'envoi du formulaire
  //si la valeur entrée n'est pas vide, alors count s'incremente de 1,
  // ma liste prend en compte son etat precedent et lui ajoute la nouvelle valeur entrée (+un id et un titre)
  // puis la valeur de mon input texte se vide
  const Submit = (e) => {
    e.preventDefault()
    if (value !== '') {
      setCount(count + 1)
      setLists((prev) => [
        ...prev,
        {
          id: Math.floor(Math.random() * 1000),
          text: value,
          title: 'Liste ' + count,
        },
      ])
      setValue('')
    }
  }

  //j'exporte ensuite toutes les valeurs dont j'aurai besoin dans les autres pages
  return { value, setValue, lists, setLists, Submit, count, setCount }
}
