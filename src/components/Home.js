import React from 'react'
import styled from 'styled-components';
import Section from './Section';




function Home() {
    return (
        <Container  >
            <Section
                title="Modal S"
                description="Order Online for touchless Delivery"
                backgroundImg="model-s.jpg"
                leftBtnText="Customer order"
                rightBtnText="Existing inventory"
            />
            <Section 
               title="Modal Y"
               description="Order Online for touchless Delivery"
               backgroundImg="model-y.jpg"
               leftBtnText="Customer order"
               rightBtnText="Existing inventory"
            />
            <Section 
               title="Modal 3"
               description="Order Online for touchless Delivery"
               backgroundImg="model-3.jpg"
               leftBtnText="Customer order"
               rightBtnText="Existing inventory"
            />
               <Section 
               title="Modal X"
               description="Order Online for touchless Delivery"
               backgroundImg="model-x.jpg"
               leftBtnText="Customer order"
               rightBtnText="Existing inventory"
            />
         <Section 
               title="Lowest Cost Solar Panels in America"
               description="Money back gaurantee"
               backgroundImg="solar-roof.jpg"
               leftBtnText="Customer order"
               rightBtnText="Existing inventory"
            />
             <Section 
               title="Accessories"
               description=""
               backgroundImg="accessories.jpg"
               leftBtnText="Shop now"
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;

`