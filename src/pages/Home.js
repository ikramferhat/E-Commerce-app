import React from 'react'
import Hero from '../components/Hero'
import Category from '../components/Category'
import Promotion from '../components/Promotion'
import ProductList from './Product/ListProducts'

function Home() {
    return (
        <div>
            <Hero />
            <Category />
            <ProductList />
            <Promotion />
        </div>
    )
}

export default Home

