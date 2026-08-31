import useLocalStorage from './useLocalStorage'

export default function useMyList() {
  const [list, setList] = useLocalStorage('dulces', [])

  const total = list.length

  const isInList = (itemId) => list.includes(itemId)

  const toggle = (itemId) => {
    setList((currentList) => {
      const alreadyExists = currentList.includes(itemId)

      if (alreadyExists) {
        return currentList.filter((id) => id !== itemId)
      }

      return [...currentList, itemId]
    })
  }

  const remove = (itemId) => {
    setList((currentList) => currentList.filter((id) => id !== itemId))
  }

  const clear = () => {
    setList([])
  }

  return {
    list,
    total,
    isInList,
    toggle,
    remove,
    clear,
  }
}
