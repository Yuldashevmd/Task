import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { basicUrl } from '../../basicUrl';
import { BackBtn } from '../../Login/style';
import { Container } from '../style';
import { Wrapper } from './style';

const Content = () => {
  const [dataS,setData]=useState();
  const {id} =useParams();
  const navigate =useNavigate();
  useEffect(()=>{
    fetch(`${basicUrl}/user/category?page=1&limit=5`)
    .then(res=>res.json())
    .then(res=>setData(res?.data?.data));
  },[]);
  return (
    <Container>
       <BackBtn onClick={()=>navigate('/')}>{'<'}</BackBtn>
      {
        dataS?.map(item=>(
          item?.books.filter(val=>{
            return val._id === id.replace(':','');
          }).map(value=>(
            <Wrapper key={value?._id}>
              <img src={`${basicUrl}/${value?.imgUrl}`} />
              <h1>{value?.name}</h1>
            </Wrapper>
          ))
        ))
      }
    </Container>
  );
};

export default Content;