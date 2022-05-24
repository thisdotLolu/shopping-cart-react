import {Container,Navbar,FormControl, Dropdown, Nav, Badge} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import { CartState } from '../context/context'
import { AiFillDelete } from 'react-icons/ai'


const Header = () => {
   const{state:{cart},} =CartState()

  return (
    <Navbar bg='dark' variant='dark' style={{height:80}}>
        <Container>
            <Navbar.Brand>
                <Link href='/'>Shopping Cart</Link>
            </Navbar.Brand>
            <Navbar.Text className='search'>
                <FormControl
                style={{width:500}}
                placeholder='Search a Product'
                className='m-auto'
                />
            </Navbar.Text>
            <Nav>
                <Dropdown alignRight>
                    <Dropdown.Toggle variant='success'>
                        <FaShoppingCart color="white" fontSize="25px"/>
                        <Badge>{cart.length}</Badge>
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{minWidth:370}}>
                        {cart.length>0?(
                            <>
                            {
                                cart.map(prod=>(
                                    <span className='cartItem' key={prod.id}>
                                        <img 
                                        src={prod.image}
                                        className='cartItemImg'
                                        alt={prod.name}/>
                                        <div className='cartItemDetail'>
                                            <span>{prod.name}</span>
                                            <span>${prod.price.split(".")[0]}</span>
                                        </div>
                                        <AiFillDelete
                                        fontSize='20px'
                                        style={{cursor:'pointer'}}
                                        onClick={()=>dispatch({
                                            type:'REMOVE_FROM_CART',
                                            payload:prod,
                                        })}>
                                        </AiFillDelete>
                                    </span>
                                ))}
                            </>
                        ):(
                            <span style={{padding:10}}>Cart Is Empty</span>
                        )}
                        
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default Header