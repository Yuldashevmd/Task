import styled from 'styled-components';

export const Container = styled.div `
width:100%;
background: #1890ff;
display: flex;
`;
Container.Button = styled.button `
 width: 200px;
  height: 45px;
  border-radius: 6px;
  border: 4px solid whitesmoke;
  background: transparent;
  margin: auto;
  color: #fff;
  font-size: 16px;
  letter-spacing:1px;
  cursor: pointer;
  transition: all 0.2s ease;
  :hover{
    background: #fff;
    color: #000;
  }
`
export const FormBlock = styled.div `
width: 50%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background: url("//images01.nicepage.com/c461c07a441a5d220e8feb1a/3f0979c8b56e50049e0986c1/v1072-037-c-copy-min.jpg");
clip-path: polygon(53% 0, 100% 0, 85% 50%, 100% 100%, 68% 100%, 32% 100%, 0 100%, 0 50%, 0 0);
`;
FormBlock.Form = styled.form `
width: 60%;
height: 500px;
background: #cdcbc6;
border-radius: 8px;
display: flex;
flex-direction: column;
align-items: center;
h2{
  color: #000;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 2rem 0;
  font-size: 28px;
  
}
`;
export const Input = styled.input `
width:${props=>props.type=='text'|| props.type =='password'? '90%' : 'fit-content'};
height: ${props=>props.type=='text'|| props.type =='password' ? '45px' : 'fit-content'};;
padding: 5px;
margin: 2rem 0;
border-radius: 6px;
border: 1px solid transparent;
outline: none;
transition: all 0.2s ease-in-out;
font-size: 16px;
letter-spacing: 2px;
cursor: pointer;
:focus{
border: 1px solid lightblue;
box-shadow: 0 0 5px lightblue;
}
::placeholder{
  color: grey;
  letter-spacing: 2px;
  font-size: 16px;
  :focus{
    transform: translateY(-15px) scale(0.98);
  }
}
`;
export const CheckBox = styled.div `
width: 90%;
display: flex;
align-items: center;
label{
margin: 2rem 0.5rem;
color:grey;
user-select: none;
letter-spacing: 1px ;
font-size: 18px;
}
`;
export const Button = styled.button `
width: 90%;
height: 45px;
border-radius: 6px;
border: none;
outline: none;
background: #50504f;
cursor: pointer;
color: #fff;
font-size: 20px;
letter-spacing:2px;
:active{
  transform: scale(0.98);
}
`;
export const ForgotPass = styled.button `
color:#4284fe;
font-size: 16px;
text-decoration: underline;
background: transparent;
border: none;
outline: none;
cursor: pointer;
margin: 1rem 0;
padding-bottom: 5px;
:hover{
  opacity: 0.7;
}
`;
export const BackBtn = styled.button `
width: 60px;
padding: 10px 0;
position: absolute;
top: 1rem;
left: 1rem;
display: flex;
justify-content: center;
align-items: center;
font-size: 25px;
font-weight: bold;
background: rgba(21,21,81,0.4);
color: #fff;
border: none;
cursor: pointer;
:hover{
  background: rgba(11,11,11,0.4);
}
`