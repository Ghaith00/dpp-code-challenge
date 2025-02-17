import { useDarkMode } from '@/core/store'
import Icon from '@/core/components/ui/Icon'

export default function TopNavBar() {
    const { isDarkMode, setDarkMode } = useDarkMode()

    return (
        <header className='fixed top-0 left-0 w-full bg-white dark:bg-gray-800 dark:shadow-lg border border-gray-200 dark:border-gray-800 z-50'>
            <nav className='container mx-auto px-4 py-4 flex justify-between items-center'>
                <a href='#' className='text-2xl font-bold text-indigo-800 dark:text-white transition-colors duration-300'>
                    Spherity
                </a>
                <div className='hidden md:flex space-x-6'>
                    <a href='/' className='nav-link text-gray-700 dark:text-gray-200 hover:text-indigo-800 dark:hover:text-white transition-colors duration-300'>Home</a>
                    <a href='/about' className='nav-link text-gray-700 dark:text-gray-200 hover:text-indigo-800 dark:hover:text-white transition-colors duration-300'>About</a>
                </div>
                <div className='hidden md:flex items-center space-x-4'>
                    <button onClick={() => setDarkMode(!isDarkMode)} className='text-gray-700 dark:text-gray-200 hover:text-indigo-800 dark:hover:text-white focus:outline-none transition-colors duration-300'>
                        <Icon name={isDarkMode ? 'sun': 'moon'} className='w-4 h-4' />
                    </button>
                </div>
                <button className='md:hidden text-gray-700 dark:text-gray-200 hover:text-indigo-800 dark:hover:text-white focus:outline-none transition-colors duration-300'>
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
                    </svg>
                </button>
            </nav>
            {/** TO do responsive menu */}
            <div className='mobile-menu md:hidden bg-white dark:bg-gray-800 shadow-lg absolute w-full left-0 transform -translate-y-full opacity-0'>
                <div className='container mx-auto px-4 py-4 space-y-4'>
                    <a href='#' className='block text-gray-700 dark:text-gray-200 hover:text-indigo-800 dark:hover:text-white transition-colors duration-300'>Home</a>
                    <a href='#' className='block text-gray-700 dark:text-gray-200 hover:text-indigo-800 dark:hover:text-white transition-colors duration-300'>About</a>
                </div>
            </div>
        </header>
    )
}