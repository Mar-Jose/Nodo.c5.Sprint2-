import { useMemo } from 'react'

export default function useFilteredItems(items, categoriaSeleccionada, busqueda) {
  return useMemo(() => {
    const itemsPorCategoria =
      categoriaSeleccionada === 'Todas'
        ? items
        : items.filter((item) => item.categoria === categoriaSeleccionada)

    const termino = busqueda.trim().toLowerCase()

    if (!termino) return itemsPorCategoria

    return itemsPorCategoria.filter((item) => {
      const texto = `${item.nombre} ${item.origen} ${item.categoria}`.toLowerCase()
      return texto.includes(termino)
    })
  }, [items, categoriaSeleccionada, busqueda])
}
