import React, { useState } from 'react'
import useCurrency from './hooks/useCurrency'
import InputBox from './components/InputBox'

const App = () => {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('pkr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrency(from)
  const options = Object.keys(currencyInfo)
  
  const convert = ()=>{
    console.log("from", from)
    console.log("to", to)
    console.log(currencyInfo[from]);
     setConvertedAmount(amount * currencyInfo[to])
    
  }

  const swap = ()=>{
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const submitHandler = (event)=>{
    console.log("clicked")
    event.preventDefault()
    convert()
  }
  
  // console.log(data)
  return (
    <div
      className=" h-screen flex flex-wrap justify-center items-center bg-cover bg-center bg-no-repeat p-sm-2"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/2793175/pexels-photo-2793175.jpeg?auto=compress&cs=tinysrgb&w=600)`,
        width: "100vw",
      }}
    >
      <div className="w-full ">
        <div className="w-full max-w-md mx-auto border border-gray-400 p-6 rounded backdrop-blur-sm bg-white/30 ">
          <form onSubmit={submitHandler}>
            <div className="w-full mb-1">
              <InputBox
                label="from"
                amount={amount}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
                currencyOptions={options}
                onCurrencyChange={(currency) => {
                  setFrom(currency);
                }}
              />
            </div>

            <button
              type="button"
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0 "
              onClick={swap}
            >
              swap
            </button>
            <div className="w-full mb-1">
              <InputBox
                label="to"
                amount={convertedAmount}
                selectCurrency={to}
                onAmountChange={(amount)=>{
                  setAmount(amount)
                }}
                currencyOptions={options}
                onCurrencyChange={(currency) => {
                  setTo(currency)
                }}
              />
            </div>

            <input
              type="submit"
              value={"Submit"}
              name=""
              id=""
              className="w-full rounded-lg text-white p-2 text-l text-capitalize bg-gray-900"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App