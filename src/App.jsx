import { useEffect, useMemo, useState } from 'react'
import dulcesCatamarca from './data/item'
import SearchBar from './components/SearchBar'
import ItemList from './components/ItemList'
import Navbar from './components/Navbar'
import useMyList from './hooks/useMyList'

function App() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas')
  const [busqueda, setBusqueda] = useState('')
  const { list: miLista, total, toggle: toggleMiLista, clear: clearMiLista } = useMyList()

  useEffect(() => {
    const appName = 'Dulces Catamarca'
    document.title = total > 0 ? `Mi lista (${total}) | ${appName}` : appName
  }, [total])

  const vaciarMiLista = () => {
    const confirmado = window.confirm('¿Seguro que querés vaciar tu lista?')

    if (!confirmado) return

    clearMiLista()
  }

  const categorias = useMemo(
    () => ['Todas', ...new Set(dulcesCatamarca.map((item) => item.categoria))],
    []
  )

  const itemsFiltrados = useMemo(() => {
    let items =
      categoriaSeleccionada === 'Todas'
        ? dulcesCatamarca
        : dulcesCatamarca.filter((item) => item.categoria === categoriaSeleccionada)

    const termino = busqueda.trim().toLowerCase()

    if (!termino) return items

    return items.filter((item) => {
      const texto = `${item.nombre} ${item.origen} ${item.categoria}`.toLowerCase()
      return texto.includes(termino)
    })
  }, [categoriaSeleccionada, busqueda])

  return (
    <>
      <Navbar lista={miLista} items={dulcesCatamarca} onToggleItem={toggleMiLista} onVaciarLista={vaciarMiLista} />

      <main className="min-h-screen bg-bg text-text font-sans">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16 lg:py-20">
        <header className="mb-8 sm:mb-10">
          <span className="inline-flex items-center rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium text-brand sm:text-sm">
            Dulces regionales de Catamarca
          </span>

          <h1 className="mt-5 font-display text-[2.1rem] font-extrabold tracking-tight text-white sm:mt-6 sm:text-5xl">
            Sabores tradicionales
          </h1>

          <p className="mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
            Para momentos inolvidables, deleitate con los sabores tradicionales de Catamarca.
            <span className="mt-1 block font-semibold text-brand">Delicias de Catamarca</span>
          </p>
        </header>

        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2 sm:gap-3 lg:mb-0">
            {categorias.map((categoria) => {
              const activa = categoria === categoriaSeleccionada

              return (
                <button
                  key={categoria}
                  type="button"
                  onClick={() => setCategoriaSeleccionada(categoria)}
                  className={[
                    'rounded-full border px-4 py-2 text-sm font-medium transition-colors',
                    activa
                      ? 'border-brand bg-brand text-white'
                      : 'border-white/10 bg-surface text-slate-300 hover:border-brand/50 hover:text-white'
                  ].join(' ')}
                >
                  {categoria}
                </button>
              )
            })}
          </div>

          <div className="flex items-center gap-3">
            <SearchBar value={busqueda} onChange={setBusqueda} />
          </div>
        </div>

        <ItemList items={itemsFiltrados} miLista={miLista} toggleMiLista={toggleMiLista} />
      </div>
    </main>
    </>
  )
}

export default App
