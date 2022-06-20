import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div `
width: 100%;
height: 70px;
background: linear-gradient(rgba(10,25,105,0.7),rgba(1,3,32,0.7));
display: flex;
justify-content: space-around;
align-items: center;
box-shadow: 0 0 5px grey;
`;
export const Ul = styled.ul `
width: 50%;
height: 100%;
display: flex;
justify-content: space-around;
align-items: center;
`;
Ul.Li = styled(NavLink)
`
font-size: 22px;
color: #fff;
letter-spacing:1px;
`;

export const Button = styled.button `
width: 100px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
background: transparent;
border: 2px solid whitesmoke;
border-radius: 2px;
color: #fff;
cursor: pointer;
transition: all 0.2s ease;
letter-spacing: 1px;
:hover{
  background: cadetblue;
}
`;