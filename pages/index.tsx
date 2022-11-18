import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

const Home: NextPage = () => {

const [num, setNum] = useState<number>(0);
const [result, setResult] = useState<number[]>([]);

function Factor(){
  const facArray = [] 
  for( let i=1;i<=num;i++){
    if(num%i==0){
         facArray.push(i)
    }
  }
  setResult(facArray)
}

  return (
    <div>
      <div className="py-4">
        <input 
        className="bg-blue-300 px-8"
         type="number" 
         value={num}
         onChange={(e)=>setNum(Number(e.target.value))}
         />
        <button onClick={Factor} className="bg-green-300 px-4 ml-8">Factor</button>
      </div>
       <div className="flex space-x-2">
         {result.map((item)=>(
            <div className="bg-red-200 px-8" key={item}>{item}</div>
         ))}
        </div> 
        <div>
          {result.length==2? "prime number":"composite number"}
          </div>  
    </div>
  );
};

export default Home;
