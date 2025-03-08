import React from 'react';

const TextArea = ({
                      onInput = () => {
                      }, value = "", error = "", label = "", disabled = false, placeholder = ""
                  }) => {

    const handleInput = (e) => {
        onInput(e.target.value)
    }

    return (
        <div className="relative w-full h-full">
            {
                label ? (<span
                    className={`shadow absolute z-1 p-1 italic font-bold w-full flex justify-center ${error.length === 0 ? 'bg-[#00000060] text-black' : 'bg-red-600 text-white'} text-white ${value.length === 0 ? "" : "bg-green-600"} rounded-tl-2xl rounded-tr-2xl`}>{label}</span>) : ""
            }
            <textarea placeholder={placeholder} disabled={disabled} onInput={handleInput}
                      value={error.length === 0 ? value : error} name="input"
                      id="input" cols="30"
                      rows="10"
                      className="glass resize-none h-full w-full p-9 outline-none"
            ></textarea>
        </div>
    )
}

export default TextArea;