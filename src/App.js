import React,{useState,useEffect} from "react"

import Card from "./components/Card";

import "./App.css"

function App() {
  const [fetchData,getFetchData]=useState([])
  const [userInput,fetchInput]=useState("")

  useEffect(()=>{
    const renderData=async()=>{
      const response=await fetch("https://api.github.com/users")
      const data=await response.json()
      getFetchData(data)
      console.log(data)
    }

    renderData()


  },[])
  const filterData=fetchData.filter((item)=>item.login.toLowerCase().includes(userInput.toLowerCase()))

  


  return (
    <div className="App" >
      <h1>Profile list</h1>
      <input onChange={(e)=>fetchInput(e.target.value)} value={userInput} type="search" placeholder="Enter usenamer"/>
      
    <ul>{
      filterData.length===0?<h1 className="notfound">No data Found</h1>:filterData.map(item=>(
      <Card details={item} key={item.id}/>
     ))
      }
    </ul>
    
      
    </div>
  );
}

export default App;
