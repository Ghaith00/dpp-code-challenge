import { 
    ShieldCheckIcon, CalendarDaysIcon, MapPinIcon, BoltIcon, ClockIcon, 
    BeakerIcon, HomeModernIcon, ClipboardIcon, DocumentIcon, ServerIcon, 
    CheckCircleIcon, ScaleIcon, ExclamationCircleIcon, CameraIcon, 
    ChartBarIcon, ClipboardDocumentCheckIcon, DocumentTextIcon, PhotoIcon, 
    MinusCircleIcon, CheckIcon, ClipboardDocumentListIcon, LightBulbIcon,
    Battery50Icon, Battery0Icon, Battery100Icon, BoltSlashIcon,
    ArrowPathIcon, FireIcon, CpuChipIcon, GlobeAltIcon, FingerPrintIcon,
    TableCellsIcon, ChartPieIcon, ChevronDownIcon,ChevronLeftIcon,
    ChevronRightIcon,
} from '@heroicons/react/24/outline'

// Need to add the heroicons icon to the dynamic mapping @/core/utils/constants
const iconMap = {
    'shield-check': ShieldCheckIcon,
    'calendar-days': CalendarDaysIcon,
    'map-pin': MapPinIcon,
    'bolt': BoltIcon,
    'clock': ClockIcon,
    'beaker': BeakerIcon,
    'home-modern': HomeModernIcon,
    'clipboard': ClipboardIcon,
    'document': DocumentIcon,
    'server': ServerIcon,
    'check': CheckIcon,
    'battery-50': Battery50Icon,
    'battery-0': Battery0Icon,
    'battery-100': Battery100Icon,
    'bolt-slash': BoltSlashIcon,
    'light-bulb': LightBulbIcon,
    'check-circle': CheckCircleIcon,
    'clipboard-list': ClipboardDocumentListIcon,
    'scale': ScaleIcon,
    'exclamation-circle': ExclamationCircleIcon,
    'camera': CameraIcon,
    'chart-bar': ChartBarIcon,
    'clipboard-document-check': ClipboardDocumentCheckIcon,
    'document-text': DocumentTextIcon,
    'photo': PhotoIcon,
    'minus-circle': MinusCircleIcon,
    'arrow-path': ArrowPathIcon,
    'chip': CpuChipIcon,
    'fire': FireIcon,
    'globe': GlobeAltIcon,
    'fingerprint': FingerPrintIcon,
    'table-cells': TableCellsIcon,
    'chart-pie': ChartPieIcon,
    'chevron-down': ChevronDownIcon,
    'chevron-left': ChevronLeftIcon,
    'chevron-right': ChevronRightIcon,
    'battery-error': () => <svg className='w-5 h-5 dark:text-white' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24'><path fill='currentColor' d='M7 22V4h3V2h4v2h3v8.7q-.55.15-1.05.388t-.95.562V6H9v14h3.7q.125.55.363 1.05t.562.95zm9.4 0L15 20.6l2.1-2.1l-2.1-2.1l1.4-1.4l2.1 2.1l2.1-2.1l1.4 1.4l-2.075 2.1L22 20.6L20.6 22l-2.1-2.075z'/></svg>,
    'road': () => <svg className='w-5 h-5 dark:text-white' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24'><path fill='currentColor' d='M10.5 19q-.625 0-1.062-.062T9 18.5q0-.425.438-.712T10.5 17.5t1.063.288t.437.712q0 .375-.437.438T10.5 19m8 2q-.625 0-1.062-.062T17 20.5q0-.425.438-.712T18.5 19.5t1.063.288t.437.712q0 .375-.437.438T18.5 21m-5 0q-.625 0-1.062-.062T12 20.5q0-.425.438-.712T13.5 19.5t1.063.288t.437.712q0 .375-.437.438T13.5 21m-8 0q-.625 0-1.062-.062T4 20.5q0-.425.438-.712T5.5 19.5t1.063.288T7 20.5q0 .375-.437.438T5.5 21m4 1q-.625 0-1.062-.062T8 21.5q0-.425.438-.712T9.5 20.5t1.063.288t.437.712q0 .375-.437.438T9.5 22M6 16v1q0 .425-.288.713T5 18H4q-.425 0-.712-.288T3 17V9l2.1-6q.15-.45.538-.725T6.5 2h11q.475 0 .863.275T18.9 3L21 9v8q0 .425-.287.713T20 18h-1q-.425 0-.712-.288T18 17v-1zm-.2-9h12.4l-1.05-3H6.85zm1.7 6q.625 0 1.063-.437T9 11.5t-.437-1.062T7.5 10t-1.062.438T6 11.5t.438 1.063T7.5 13m9 0q.625 0 1.063-.437T18 11.5t-.437-1.062T16.5 10t-1.062.438T15 11.5t.438 1.063T16.5 13'/></svg>,
    'co2': () => <svg className='w-5 h-5 dark:text-white' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24'><path fill='currentColor' d='M10 15V9h5v6zm1.5-1.5h2v-3h-2zM3 15V9h5v2H6.5v-.5h-2v3h2V13H8v2zm14 3v-3.5h3v-1h-3V12h4.5v3.5h-3v1h3V18z'/></svg>,
    'weight': () => <svg className='w-5 h-5 dark:text-white' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24'><path fill='currentColor' d='M6 19h12L16.575 9h-9.15zm6-11q.425 0 .713-.288T13 7t-.288-.712T12 6t-.712.288T11 7t.288.713T12 8M4.835 20L6.546 8h3.745q-.133-.212-.212-.468Q10 7.275 10 7q0-.846.577-1.423T12 5t1.423.577T14 7q0 .275-.079.532q-.079.256-.211.468h3.744l1.711 12zM6 19h12z'/></svg>,
    'leaf': () => <svg className='w-5 h-5 dark:text-white' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24'><path fill='currentColor' d='M12 18.923q-1.317 0-2.48-.457T7.427 17.21l-2.073 2.049q-.134.14-.341.14t-.348-.14t-.14-.348t.14-.34l2.048-2.049q-.8-.929-1.256-2.105T5 11.923q0-2.931 2.034-4.965Q9.07 4.923 12 4.923h7v7q0 2.931-2.034 4.966Q14.93 18.923 12 18.923m0-1q2.5 0 4.25-1.75t1.75-4.25v-6h-6q-2.5 0-4.25 1.75T6 11.923q0 1.11.377 2.103t1.056 1.776l5.233-5.233q.133-.14.34-.14t.354.146q.16.16.16.351t-.166.357L8.12 16.496q.783.679 1.776 1.053t2.103.374m0-6'/></svg>,
    'cold': () => <svg className='w-5 h-5 dark:text-white' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24'><path fill='currentColor' d='M21 11h-1.59l1.3-1.29a1 1 0 0 0-1.42-1.42L16.59 11h-2.18l2.3-2.29a1 1 0 1 0-1.42-1.42L13 9.59V7.41l2.71-2.7a1 1 0 1 0-1.42-1.42L13 4.59V3a1 1 0 0 0-2 0v1.59l-1.29-1.3a1 1 0 0 0-1.42 1.42L11 7.41v2.18l-2.29-2.3a1 1 0 1 0-1.42 1.42L9.59 11H7.41l-2.7-2.71a1 1 0 0 0-1.42 1.42L4.59 11H3a1 1 0 0 0 0 2h1.59l-1.3 1.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L7.41 13h2.18l-2.3 2.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l2.29-2.3v2.18l-2.71 2.7a1 1 0 0 0 1.42 1.42l1.29-1.3V21a1 1 0 0 0 2 0v-1.59l1.29 1.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42L13 16.59v-2.18l2.29 2.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42L14.41 13h2.18l2.7 2.71a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42L19.41 13H21a1 1 0 0 0 0-2'/></svg>,
    'temperature': () => <svg className='w-5 h-5 dark:text-white' stroke='currentColor' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24'><path fill='currentColor' d='M13 15.28V5.5a1 1 0 0 0-2 0v9.78A2 2 0 0 0 10 17a2 2 0 0 0 4 0a2 2 0 0 0-1-1.72M16.5 13V5.5a4.5 4.5 0 0 0-9 0V13a6 6 0 0 0 3.21 9.83A7 7 0 0 0 12 23a6 6 0 0 0 4.5-10m-2 7.07a4 4 0 0 1-6.42-2.2a4 4 0 0 1 1.1-3.76a1 1 0 0 0 .3-.71V5.5a2.5 2.5 0 0 1 5 0v7.94a1 1 0 0 0 .3.71a4 4 0 0 1-.28 6Z'/></svg>,
    'location-pin': () => <svg className='w-5 h-5 dark:text-white' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24'><path fill='currentColor' d='M12 10.8a2 2 0 1 0-2-2a2 2 0 0 0 2 2m-.71 6.91a1 1 0 0 0 1.42 0l4.09-4.1a6.79 6.79 0 1 0-9.6 0ZM7.23 8.34a4.81 4.81 0 0 1 2.13-3.55a4.81 4.81 0 0 1 5.28 0a4.82 4.82 0 0 1 .75 7.41L12 15.59L8.61 12.2a4.77 4.77 0 0 1-1.38-3.86M19 20H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2'/></svg>,
    'default-icon': () => <span>🔹</span>,
  }

export type IconKey = keyof typeof iconMap

interface DynamicIconProps {
    name: IconKey
    className?: string
}

export default function DynamicIcon({ name, className }: DynamicIconProps) {
    const IconComponent = iconMap[name]

    if (!IconComponent) return null

    return <IconComponent className={className || 'w-6 h-6 text-gray-700'} />
}