function Footer({ isCeleste, onToggleTheme }) {
  return (
    <footer
      className={[
        'border-t px-4 py-6 text-center transition-colors',
        isCeleste ? 'border-sky-300/60 bg-sky-100' : 'border-white/10 bg-black'
      ].join(' ')}
    >
      <button
        type="button"
        onClick={onToggleTheme}
        aria-pressed={isCeleste}
        className={[
          'rounded-full border px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-300/60',
          isCeleste
            ? 'border-slate-700 bg-slate-800 text-white hover:bg-slate-700'
            : 'border-cyan-300/60 bg-cyan-400/30 text-cyan-950 hover:bg-cyan-400/50'
        ].join(' ')}
      >
        {isCeleste ? 'Cambiar a negro' : 'Cambiar a celeste'}
      </button>
    </footer>
  )
}

export default Footer
