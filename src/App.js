import Search from './components/searchbar/Search'
import FIlter from './components/filter/Filter'
import Sortbar from './components/sortbar/Sortbar';
import React,{useEffect} from 'react' ;
import {useStateContext} from './context/ContextProvider'
import {Day1,Day2, Day3, Day4, Day5} from './components/transactions'
import axios from 'axios';



function App() {
  const {setdata,setvalue,value,setsortvalue,data}= useStateContext();
  

  const handlereset=()=>{
    loadUserdata();
  }

  const handleSearch= async(e)=>{
      e.preventDefault();
  return await axios.get(`http://localhost:5000/album?q=${value}`)
  .then((response)=>{
      setdata(response.data); 
      setvalue(''); })
      .catch((err)=>console.log(err))
  }

  console.log(data)
  const loadUserdata=async()=>{
    return  await axios.get('http://localhost:5000/album')
    .then(response=>setdata(response.data))
    .catch(err=>console.log(err))
   
   }

   const handlesort= async(e)=>{
    let value= e.target.value;
    setsortvalue(value);
    return await axios.get(`http://localhost:5000/album?_sort=${value}&_order=asc`)
    .then((response)=>{
        setdata(response.data); 
         })
        .catch((err)=>console.log(err))
    };

    const handlefilter=async (value)=>{
      return await axios.get(`http://localhost:5000/album?status=${value}`)
      .then((response)=>{
          setdata(response.data); 
          setvalue(''); })
          .catch((err)=>console.log(err))  
    }
  
  useEffect(() => {
    loadUserdata();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  
    
  return (
    <div className="flex  flex-col">
    <div  className="flex  justify-center items-center">
    <Search handleSearch={handleSearch} handlereset={handlereset} className=""/>
    </div>
    <div className="flex justify-around">
    <FIlter handlefilter={handlefilter} />
    <Sortbar handlesort={handlesort} />
    </div>
    <Day1/>
    <Day2/>
    <Day3/>
    <Day4/>
    <Day5/>
    </div>
  );
}

export default App;
