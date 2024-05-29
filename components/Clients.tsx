import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { testimonials } from '@/data'

const clients = () => {
    return (
        <div className='py-2' id='testimonials'>
            <h1 className='heading'>
                Kind Words From {' '}
                <span className='text-purple'> satisfied clients</span>
            </h1>
            <div className='flex flex-col items-center max-lg:mt-10'>
                <div className='h-[60vh] md:[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden'>
                    <InfiniteMovingCards
                        items={testimonials}
                        direction='right'
                        speed='slow'
                    />
                </div>
            </div>
        </div>

    )
}

export default clients