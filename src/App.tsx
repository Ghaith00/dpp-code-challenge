import { AppRouter } from './core/router/routes'
import { useDarkMode } from './core/store'

function App() {
  const { isDarkMode } = useDarkMode()
  return <div className={`${isDarkMode ? 'dark' : ''} bg-white dark:bg-gray-700 min-h-screen`}><AppRouter /></div>
}

export default App