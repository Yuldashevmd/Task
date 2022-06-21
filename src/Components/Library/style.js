import styled from "styled-components";

export const Container = styled.div `
width: 100%;
h1{
  text-align: center;
  margin-top: 2rem;
  text-transform: uppercase;
}
`;
export const Category = styled.div `
width: 80%;
height: 100%;
margin: 2rem auto;
background: lightgrey;
border-radius: 6px;
padding: 10px;
h1{
  border-bottom: 1px solid #000;
  padding-bottom: 1rem;
  letter-spacing: 2px;
  text-transform: uppercase;
}
`;
export const Books = styled.div `
width: 90%;
display: flex;
align-items: center;
gap: 20px;
margin: 1rem;
`;
export const Book = styled.div `
width: 200px;
min-height: 220px;
border: 1px solid darkblue;
img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
button{
  width: 100%;
  height: 40px;
  border: 1px solid grey;
  outline: none;
  text-transform: capitalize;
  letter-spacing: 1px;
  transition: all 0.2s ease;
  cursor: pointer;
  :hover{
    background: grey;
    color: #fff;
  }
  :active{
    transform: scale(0.98);
  }
}
`;