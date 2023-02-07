import React, {useState , useEffect} from 'react';
import axios from 'axios';
import City from './City';
// I've created json file and hosted on https://jsonbin.io as public
const url = "https://api.jsonbin.io/v3/b/63e199d4ace6f33a22d80fe4";

const Slider = () => {
  const [data , setData] = useState([]);
  const [selected , setSelected] = useState(1);

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
    axios.get(url)
        .then(res =>{
          setData(res.data.record);
          console.log(res.data.record);
        })
        .catch(err => console.log(err));
  };
  useEffect(()=>{
    getData()
  },[])
  return (
    <div className='container d-flex justify-content-center'>
      <div className='slider-container'>
        {data.filter(el => el.id === selected).map(el =>{
                return <City data={el} key={el.id} prev={prevCity} next={nextCity} />
            })}
      </div>
    </div>

  )
}

export default Slider