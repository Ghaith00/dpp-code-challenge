import { IconKey } from './Icon'
import Button from './Button'

interface ButtonProps {
    label?: string
    iconName?: IconKey
    onClick?: () => void
}

interface ButtonGroupProps {
    buttons: ButtonProps[]
}

export default function ButtonGroup({ buttons } : ButtonGroupProps) {
    return (
        <div className='inline-flex rounded-md shadow-md' role='group'>
            {buttons.map(({ label, iconName, onClick }, index) => (
                <Button
                    key={index}
                    label={label}
                    iconName={iconName}
                    onClick={onClick}
                    className={`border-gray-200 dark:border-gray-700 ${index === 0 ? 'border rounded-s-lg' : 'border-t border-b'}  ${index === buttons.length - 1 ? 'border rounded-e-lg ' : 'border-t border-b'}`}
                    variant='secondary'
                />
            ))}
        </div>
    )
}
