import React,{Component} from 'react'
import styled from 'styled-components'
import logo from '../logo.svg'

const Wrapper = styled.a.attrs({
    className: 'navbar-brand'
})``

class Logo extends Component{
    render(){
        return(
            <Wrapper href = 'https://sambarros.com'>
                <img src={logo} alt="sambarros.com" width={50} height={50}/>
            </Wrapper>
        )
    }
}

export default Logo