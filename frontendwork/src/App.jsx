import React,{useEffect,useState} from "react";



 function App(){
 const[data,setData] = useState([]);

  useEffect(()=>{
     async function getData(){
      const response = await fetch('http://localhost:4005/data',{method:"POST"});
      const res = await response.json();
      setData(res);
      }
      getData();
  },[]);
    
 
 
  return(
    <>
    {JSON.stringify(data)
    }
    </>
  )
 
}

export default App;
