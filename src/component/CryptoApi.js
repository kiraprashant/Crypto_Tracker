import React, { useState } from 'react'
import Cryptoalldata from './Cryptoalldata'

const CryptoApi = (props) => {
 
const [toggle,settoggle] = useState(false)
const [bgcolor, setbgcolor] = useState()
const [Table, setTable] = useState("")

const  {CryptoData} = props 

console.log(CryptoData)

const darkmode = () =>{

    setTable("table-dark")
    setbgcolor("bg-dark")
    settoggle(true)

}

const lightmode = () =>{
  
  setTable("")
  setbgcolor("")
  settoggle(false)

}

  return (
  <>
   <div className={`py-5 px-2 ${bgcolor}`} >  
    <div className='container text-center'> 
    
      {!toggle ?  <div className='py-5'><button onClick={lightmode} className='Toggle bg-primary text-white btn'>Light mode</button><button onClick={darkmode}  className='Toggle'>Dark mode</button></div> : 
       <div className='py-5'> <button onClick={lightmode} className='Toggle'>Light mode</button><button onClick={darkmode}  className='Toggle bg-primary text-white btn'>Dark mode</button></div>}
     

     <table className={`table ${Table} table-responsive px-2 table-hover`}>
     <thead>
     <tr>
        <th className='px-5'>Rank</th>
        <th className='px-5'>Symbol</th>
        <th className='px-5'>Name</th>
        <th className='px-5'>market cap</th>
        <th className='px-5'>Price (inr)</th>

       </tr> 
       </thead>

      <tbody>{CryptoData.map((elem , index)=> <Cryptoalldata key = {index} CryptoData = {CryptoData} id = {index}/>)}</tbody>

    </table> 
   </div> 
  </div> 
 </> 
  )
}

export default CryptoApi