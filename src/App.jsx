import {useState} from 'react'
import './App.css'
import TextArea from "./components/TextArea.jsx";

function App() {
    const [input, setInput] = useState('');
    const [error, setError] = useState('');
    const [formattedInput, setFormattedInput] = useState('');
    const [minifiedInput, setMinifiedInput] = useState('');


    const [formatMode, setFormatMode] = useState(true);

    const onInputChange = (value) => {
        try {
            setInput(value);
            setError('');
            setFormattedInput('');
            setMinifiedInput('');
            if (value.length === 0) return;
            const jsonObject = typeof value === "string" ? eval(`(${value})`) : value;
            const formatted = JSON.stringify(jsonObject, null, 4);
            setFormattedInput(formatted);
            const minified = JSON.stringify(jsonObject);
            setMinifiedInput(minified);
        } catch (e) {
            setError(e.toString());
        }
    }

    const downloadJsonFile = (data, filename = "data.json") => {
        const blob = new Blob([data], {type: "application/json"});

        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = filename; // Set filename for download

        document.body.appendChild(a);
        a.click();

        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const handleDownload = () => {
        if (formatMode) {
            downloadJsonFile(formattedInput, "formatted_data.json");
        } else {
            downloadJsonFile(minifiedInput, "minified_data.json");
        }
    }


    return (
        <div
            className="flex flex-col justify-around bg-[#EAEAEA] h-screen">
            <header
                className="p-3 px-10 shadow w-full flex flex-col sm:flex-row justify-between items-center bg-[#1f9ff8]">
                <span className="font-bold text-lg text-black italic">JSON
                   <a href="/"><span className="text-2xl text-white not-italic">Formatter!</span></a>
                    <a href="https://www.linkedin.com/in/Rupeshdevasam" className="text-white text-sm ml-2 italic">by Rupesh <span
                        className="text-black">Devasam</span></a>
               </span>
                <div className="wrap flex flex-col sm:flex-row sm:gap-5 text-white">
                    Connect with me?
                    <span className="flex gap-5">
                        <a target="_blank" href="https://www.linkedin.com/in/Rupeshdevasam"
                           className="hover:text-black transition-all duration-400 ease-in-out">LinkedIn</a>
                        <a target="_blank" href="https://rupeshdevasam.vercel.app"
                           className="hover:text-black transition-all duration-400 ease-in-out">Portfolio</a>
                    </span>

                </div>

            </header>
            <div
                className=" bg-[#EAEAEA] flex flex-col md:flex-row items-center justify-around w-full h-full gap-10 p-10">
                <TextArea placeholder={`{"Linkedin": 

"Rupesh Devasam - https://www.linkedin.com/in/RupeshDevasam",
MyEmail: "rupeshdevasam@gmail.com",
    "Request": 

"Please support"
}`} onInput={onInputChange} value={input} label={"Input"}/>

                <div className="w-full h-full relative flex">
                    <div className="absolute z-1 right-10 top-10 flex flex-col gap-3">
                        <div
                            className="shadow flex items-center justify-around text-white gap-2 toggle">
                        <span onClick={() => {
                            setFormatMode(true)
                        }} className={formatMode ? "active" : ""}>Format</span>
                            <span onClick={() => {
                                setFormatMode(false)
                            }} className={formatMode ? "" : "active"}>Minify</span>
                        </div>
                        <button
                            disabled={error.length > 0 || formattedInput.length === 0 || minifiedInput.length === 0}
                            onClick={handleDownload}
                            className="shadow flex text-white cursor-pointer justify-center bg-[#697565] px-10 py-2 rounded-[10px] download">Download
                        </button>
                    </div>


                    <TextArea placeholder={`{
    "Linkedin": "Rupesh Devasam - https://www.linkedin.com/in/RupeshDevasam",
    "MyEmail": "rupeshdevasam@gmail.com",
    "Request": "Please support"
}`}
                              error={error} value={formatMode ? formattedInput : minifiedInput}
                              label={"Output"} disabled/>

                </div>

            </div>

            {/*<footer className="font-bold m-3 italic">Developed by Rupesh Devasam</footer>*/}
        </div>
    )
}

export default App
