import React, {useState , useEffect} from 'react';
import axios from 'axios';
import {PacmanLoader} from 'react-spinners';
import City from './City';
// I've created json file and hosted on https://jsonbin.io as public
const url = "https://api.jsonbin.io/v3/b/63e199d4ace6f33a22d80fe4";

const Slider = () => {
  const [data , setData] = useState([]);
  const [selected , setSelected] = useState(1);
  const [isLoading , setIsLoading] = useState(true);
  const [isError , setIsError] = useState(false);

  const nextCity = () =>{
    if (selected >= data.length){
      setSelected(1)
    }else{
      setSelected(selected + 1)
    }
  }
  const prevCity = () =>{
    if ( selected == 1){
      setSelected(data.length)
    }else{
      setSelected(selected - 1)
    }
  }
  const getData = () =>{
    setIsLoading(true);
    setIsError(false)
    axios.get(url)
        .then(res =>{
          setIsLoading(true);
          setData(res.data.record);
          setIsLoading(false);
        })
        .catch(err => setIsError(true));
  };
  useEffect(()=>{
    getData()
  },[])
  return (
    <div className='container d-flex justify-content-center'>
      <div className='slider-container'>
        {isError ? <Error /> : ""}
        {isLoading ? <Loading /> : data.filter(el => el.id === selected).map(el =>{
                return <City data={el} key={el.id} prev={prevCity} next={nextCity} />
            }) }
      </div>
    </div>

  )
};

// componente da mostrare durante il caricamento
const Loading = () =>{
  return(
    <div className='loader'>
      <PacmanLoader
      color="rgba(214, 54, 54, 1)"
      />
  </div>
  )
}
// componente da mostrare se la chiamata api va in errore
const Error = () =>{
  return(
    <div>Sorry, there is an error!</div>
  )
}

export default Slider