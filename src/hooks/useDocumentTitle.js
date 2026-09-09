import { useEffect } from 'react'

function useDocumentTitle(total, appName = 'Dulces Catamarca') {
  useEffect(() => {
    document.title = total > 0 ? `Mi lista (${total}) | ${appName}` : appName
  }, [total, appName])
}

export default useDocumentTitle

// función de utilidad. No hook. Correción del profe Lucas.