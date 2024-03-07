import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';

const Produtos = ({value, value1, value2}) => {
  const [data, setData] = useState([]);
  const [dataFilter, setDatFiltera] = useState([]);
  const history = useNavigate();

  useEffect(() => {
    axios.get('https://apiproducts-rij8.onrender.com/product')
    .then(response => {
      setData(response.data)
     
    }).catch(error => {
     
      console.log(error.response.data);
    });
  }, []); 

  useEffect(() => {
    setDatFiltera(data.filter(a => a.name.toLowerCase().includes(value)))
  }, [data, value]); 

  useEffect(() => {
    setDatFiltera(data.filter(a => a.model.toLowerCase().includes(value2)))
  }, [data, value2]); 

  useEffect(() => {
    setDatFiltera(data.filter(a => a.brand.toLowerCase().includes(value1)))
  }, [data, value1]); 
  const edit = (a) => {
    history('/editproduct', {state:{a}})
  }
  return (
    <div>

      <div className='container_card'>
      {
        dataFilter.map((a, i) => (
          <div key={i} className='card'>
            <button onClick={()=> edit(a)} className='button_card'> <HiOutlinePencilSquare color='white' size='2em'/>  </button>
            <p>Nome: {a.name}</p>
            <p>Marca: {a.brand}</p>
            <p>Modelo: {a.model}</p>
            <p>Preço: { a.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }</p>
          </div>
        ))
        }
        </div>
        {
          dataFilter.length === 0 ? <p>Nenhum Produto cadastrado com essa característica</p> : <div/>
        }
    </div>
  );
}

export default Produtos;
