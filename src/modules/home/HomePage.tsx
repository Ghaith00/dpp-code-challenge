import DPPCard from '@/core/components/ui/DPPCard'
import { cardList } from '@/core/utils/constants'

export default function HomePage() {
    return (
        <div className='container mx-auto px-4 py-8'>
            <h1 className='text-4xl font-bold text-white mb-4'>Digital Product Passports</h1>
            <div className='grid gap-8 md:grid-cols-2 lg:gap-12 p-6 md:p-10 mt-12'>
                {
                    cardList && cardList.length > 0 ?
                        cardList.map((card, i) =>
                            <DPPCard key={i} name={card.name} description={card.description} linkProduct={`/product/${card.id}`}/>
                        ):
                        'No data' // To redo later
                }                   
            </div>
        </div>
    )
}