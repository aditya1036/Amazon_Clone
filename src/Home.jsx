import React from 'react'
import './Home.css'
import Product from './Product'
const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <img  className="home_image" src="https://techstory.in/wp-content/uploads/2021/07/Amazon-Prime-Day-Sale-Banner.jpg" alt=""></img>
            
            <div className="home__row">
                {/* Product */}

                <Product 
                id='1861'
                title = 'Listrine' 
                price={29.99} 
                image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoP-cAfqagffuFIin2BmAq8cOhDlpzYAzbxQ&usqp=CAU' 
                rating={5} />
                
                
                <Product 
                id='1862'
                title = 'Listrine' 
                price={29.99} 
                image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoP-cAfqagffuFIin2BmAq8cOhDlpzYAzbxQ&usqp=CAU' 
                rating={5} />
            </div>

            <div className="home__row">
            <Product
            id='1863'
            title = 'Listrine' 
            price={29.99} 
            image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoP-cAfqagffuFIin2BmAq8cOhDlpzYAzbxQ&usqp=CAU' 
            rating={5} />


            <Product 
            id='1864'
            title = 'Listrine' 
            price= {29.99} 
            image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoP-cAfqagffuFIin2BmAq8cOhDlpzYAzbxQ&usqp=CAU' 
            rating={5} />


            <Product 
            id='1865'
            title = 'Listrine' 
            price={29.99} 
            image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoP-cAfqagffuFIin2BmAq8cOhDlpzYAzbxQ&usqp=CAU' 
            rating={5} />
                
            </div>

            <div className="home__row">
            <Product 
            id='1866'
            title = 'Listrine' 
            price={29.99} 
            image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoP-cAfqagffuFIin2BmAq8cOhDlpzYAzbxQ&usqp=CAU' 
            rating={5}
            />
                
            </div>
            
            </div>
           
        </div>
    )
}

export default Home
