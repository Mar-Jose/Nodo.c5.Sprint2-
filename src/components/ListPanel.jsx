import { useMemo, useState } from 'react'

function ListPanel({ items = [], listaPersonal = [] }) {
  const [busqueda, setBusqueda] = useState('')

  const itemsFiltrados = useMemo(() => {
    const termino = busqueda.trim().toLowerCase()

    if (!termino) return items

    return items.filter((item) => item.nombre.toLowerCase().includes(termino))
  }, [items, busqueda])

  const listaVacia = listaPersonal.length === 0

  return (
    <div className="space-y-4">
      <label className="block">
        <span className="sr-only">Buscar por nombre</span>
        <input
          type="text"
          value={busqueda}
          onChange={(event) => setBusqueda(event.target.value)}
          placeholder="Buscar dulce por nombre"
          className="w-full rounded-full border border-white/10 bg-surface px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
        />
      </label>

      {listaVacia ? (
        <div className="rounded-2xl border border-dashed border-white/10 bg-surface/70 p-8 text-center text-slate-300">
          <p className="text-lg font-semibold text-white">Todavía no agregaste nada, buscá algo arriba 👆</p>
        </div>
      ) : itemsFiltrados.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-white/10 bg-surface/70 p-8 text-center text-slate-300">
          <p className="text-lg font-semibold text-white">No encontramos lo solicitado, por favor elija otro dulce.</p>
        </div>
      ) : (
        <ul className="space-y-3">
          {itemsFiltrados.map((item) => (
            <li key={item.id} className="rounded-xl border border-white/10 bg-white/5 px-3 py-3">
              <p className="font-medium text-white">{item.nombre}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ListPanel
