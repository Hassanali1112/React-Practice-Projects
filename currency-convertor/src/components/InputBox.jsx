import React, { useId } from 'react'

const InputBox = (
  {label,
  amount,
  selectCurrency='usd',
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  amountDisabled= false,
  currencyDisabled=false,
  className = ""}
) => {

  const inputId = useId()
 

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2 flex flex-wrap">
        <label htmlFor='' className="text-black/40 mb-3 inline-block">
          {label}
        </label>
        <input
          type="number"
          id={inputId}
          className=" w-full py-1.5 border-none"
          value={amount}
          onChange={(e) => {
            console.log(e.target.value)
            onAmountChange && onAmountChange(Number(e.target.value))
          }}
          disabled={amountDisabled}
          placeholder="enter currency"
        />
      </div>
      <div className="w-1/2 flex-wrap justify-content-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select className="rounded-lg p-1 bg-gray-100 cursor-pointer outline-done"
          value={selectCurrency}
          onChange={(e)=>{
            console.log(e.target.value)
            onCurrencyChange && onCurrencyChange(e.target.value)
          }}
          disabled={currencyDisabled}
        >
          {
            currencyOptions.map(option => <option key={option} value={option}>{option}</option>)
          }
        </select>
      </div>
    </div>
  );
};

export default InputBox