import React from 'react'
import Card from '../components/Card'
import Navbar from '../components/Navbar';

const page = () => {
    const cardsData = [
        { id: 1, title: 'Card 1', level: 'Beginner', time: '10 min'},
        { id: 2, title: 'Card 2', level: 'Intermediate', time: '15 min'},
        { id: 2, title: 'Card 2', level: 'Expert', time: '20 min'},
        // Add more card data as needed
      ];
  return (
    <>
    <Navbar/>
    <div className='flex flex-col h-full w-full justify-between items-center'>
    
    
    <h1 className="font-semibold text-4xl py-2">Yoga for stress relief</h1>
    <div className='w-full h-[80%]'>
    <div className="flex flex-col md:flex-row justify-center h-full w-full space-x-20">
      {cardsData.map(card => (
        <Card key={card.id} title={card.title} level={card.level} time={card.time} />
      ))}
    </div>
    </div>
    </div>
    </>
  )
}

export default page