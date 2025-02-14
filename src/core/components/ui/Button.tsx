import Icon, { IconKey } from './Icon' // Import your Icon component

interface ButtonProps {
	label?: string
	iconName?: IconKey // Name of the icon to use
	onClick?: () => void
	className?: string // Extra classes for styling
	variant?: 'primary' | 'secondary' | 'danger' // Predefined styles
	isDisabled?: boolean
	isFullWidth?: boolean
}

export default function Button({
	label,
	iconName,
	onClick,
	className = '',
	variant = 'primary',
	isDisabled = false,
	isFullWidth = false,
} : ButtonProps) {
	// Tailwind styles for different variants
	const baseStyles =
		'inline-flex items-center px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 transition-all'
	const variants = {
		primary:
			'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-400 dark:bg-blue-500 dark:hover:bg-blue-600',
		secondary:
			'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-400 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600',
		danger:
			'bg-red-600 text-white hover:bg-red-700 focus:ring-red-400 dark:bg-red-500 dark:hover:bg-red-600',
	}

	return (
		<button
			onClick={onClick}
			className={`${baseStyles} ${variants[variant]} ${className} ${
			isFullWidth ? 'w-full' : ''
			} ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
			disabled={isDisabled}
		>
			{iconName && <Icon name={iconName} className='w-4 h-4' />}
			{label}
		</button>
	)
}
