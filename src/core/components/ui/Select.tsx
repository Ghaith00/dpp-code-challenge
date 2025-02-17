import Icon from './Icon' // Import your Icon component

interface SelectOption {
  label: string
  value: string
  iconName?: string
}

interface SelectProps {
  options: SelectOption[]
  selectedValue?: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
}

export default function Select({
  options,
  selectedValue,
  onChange,
  placeholder = 'Select an option',
  className = '',
} : SelectProps) {

    const defaultValue = selectedValue ?? options[0]?.value ?? ''
    return (
        <div className={`relative ${className}`}>
            <select
                className='appearance-none w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500'
                value={defaultValue}
                onChange={(e) => onChange(e.target.value)}
            >
                {/* Placeholder Option */}
                {!selectedValue && (
                    <option value='' disabled>
                        {placeholder}
                    </option>
                )}

                {/* Render Options */}
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>

            {/* Dropdown Icon */}
            <div className='absolute inset-y-0 right-3 flex items-center pointer-events-none'>
                <Icon name='chevron-down' className='w-4 h-4 text-gray-500 dark:text-gray-400' />
            </div>
        </div>
    )
}
