import React, {useState , useEffect} from 'react';
import axios from 'axios';
import City from './City';
// I've created json file and hosted on https://jsonbin.io as public
const url = "https://api.jsonbin.io/v3/b/63e199d4ace6f33a22d80fe4";

const Slider = () => {
  const [data , setData] = useState([]);

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
            {data.map(el =>{
              return <City />
            })}
      </div>
    </div>

  )
}

export default Slider