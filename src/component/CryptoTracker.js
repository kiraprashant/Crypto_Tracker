import React ,{useEffect , useState} from 'react'
import axios from "axios"
import CryptoApi from './CryptoApi'

const CryptoTracker = () => {

    const [CryptoData, setCryptoData] = useState([])
    const [Loding,setLoding] = useState(true)


    useEffect(() => {
      axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false",{
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },}).then((res)=>{
          
          setCryptoData(res.data)
          setLoding(false)
   

  }).catch((error)=>{
  console.log(error)
  })
    },[])
    

  return (
    <div className=''>
        {Loding ? <div className='Loading '><p> Loding... </p> </div> : <CryptoApi CryptoData = {CryptoData}/> }

    </div>
  )
}

export default CryptoTracker