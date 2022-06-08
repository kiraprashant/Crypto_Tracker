import React from 'react'

const Cryptoalldata = (props) => {
  const { CryptoData , id} = props 
  return (
    <React.Fragment>
    <tr>
        <td className='px-5'>{CryptoData[id].market_cap_rank}</td>
        <td className='px-2'><img src = {CryptoData[id].image}/>&nbsp;&nbsp; {CryptoData[id].symbol}</td>
        <td className='px-5'>{CryptoData[id].name}</td>
        <td className='px-5'>{CryptoData[id].market_cap}</td>
        <td className='px-5'>{CryptoData[id].current_price * 75}</td>
       
      
    </tr>
   </React.Fragment> 
  )
}

export default Cryptoalldata