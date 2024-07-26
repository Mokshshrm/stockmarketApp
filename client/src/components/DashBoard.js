import React from 'react'
import { Card } from './Card'


export const DashBoard = () => {
    return (
        <div className='h-screen grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10 font-quickstand'>
            <div className='col-span-1 md:col-span-2 xl:col-span-3 row-span-1'>
                <Card>Header</Card>
            </div>
            <div className='md:col-span-2 row-span-4'>
                <Card>Chart</Card>
            </div>
            <div className=''>
                <Card>OverView</Card>
            </div>
            <div className='row-span-2 xl:row-span-3'>
                <Card>Details</Card>
            </div>
        </div>
    )
}

