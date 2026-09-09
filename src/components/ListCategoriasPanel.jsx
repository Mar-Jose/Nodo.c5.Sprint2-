import { useMemo } from 'react'

function ListCategoriasPanel({ items = [], categoriaSeleccionada, onSelectCategoria }) {
  const categorias = useMemo(
    () => ['Todas', ...new Set(items.map((item) => item.categoria))],
    [items]
  )

  return (
    <div className="flex flex-wrap gap-2 sm:gap-3 lg:mb-0">
      {categorias.map((categoria) => {
        const activa = categoria === categoriaSeleccionada

        return (
          <button
            key={categoria}
            type="button"
            onClick={() => onSelectCategoria(categoria)}
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
  )
}

export default ListCategoriasPanel