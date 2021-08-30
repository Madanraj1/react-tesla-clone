import React, {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {selectCars} from  "../features/carSlice/carSlice";
import { useSelector } from 'react-redux';
import { animateScroll as scroll } from 'react-scroll';

 


function Header() {
    const [burgerStatus, setburgerStatus] = useState(false);
    const cars = useSelector(selectCars);
    console.log(cars);

   

    return (
        <Container>
            <a>
                <img src="images/logo.svg" />
             </a> 
            <Menu>
                {cars &&  cars.map((car,index)=> (
                      <a href="#" key={index} > {car} </a> 
                ))}  
             
            </Menu> 
            <RightMenu>
                <a  href="#" > Shop</a>
                <a href="#"> Tesla Account</a>
                <CustomMenu  onClick={()=>setburgerStatus(true)} />

            <BurgerNav show={burgerStatus}  >
                <CloseWrapper onClick={()=>setburgerStatus(false)} >
                <CustomClose />
                </CloseWrapper>
               
                <li> <a href="#"> Exsiting inventory  </a> </li>
                <li> <a href="#"> Used inventory  </a> </li>
                <li> <a href="#"> Trade-in inventory  </a> </li>
                <li> <a href="#"> Cyber Truck </a> </li>
                <li> <a href="#">  Roadester  </a> </li>
                <li> <a href="#"> Semi   </a> </li>
                <li> <a href="#">  Charging  </a> </li>
                <li> <a href="#">  Charging  </a> </li>
                <li> <a href="#">  Charging  </a> </li>
                <li> <a href="#">  Charging  </a> </li>
            </BurgerNav>

            </RightMenu>   
        </Container>
    )
}

export default Header;


const Container = styled.div`
    min-height: 60px;
    width: 100%;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top:0;
    left:0;
    right:0;
    z-index: 1;
`

const Menu = styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
    flex: 1;

    a{
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }

    @media(max-width: 768px){
        display: none;
    }
`


const RightMenu = styled.div`
        display: flex;
        align-items: center;

        a{
            font-weight: 600;
            text-transform: uppercase;
            margin-right: 10px
        }

`


const CustomMenu = styled(MenuIcon)`
        cursor:pointer;
`


const BurgerNav = styled.div`
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        background: white;
        width: 300px;
        z-index: 10;
        list-style: none;
        padding: 20px;
        display: flex;
        flex-direction: column;
        text-align: start;
        transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)' };
        transition: transform 0.2s;
        li {
            cursor: pointer;
            padding: 15px 0px;
            border-bottom: 1px solid rgba(0,0,0,.2);
            a{
                fontweight: 600;
            }
        }
`


const CustomClose = styled(CloseIcon)`
        cursor:pointer;
`

const CloseWrapper = styled.div`
        display: flex;
        justify-content: flex-end;

`