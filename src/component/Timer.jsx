import React,{useState,useEffect} from "react";
const Timer=()=>{
    const [timer,setTimer]=useState(null);
    const [st,setS]=useState(null);
    const [en,setE]=useState(null);
    const [id,setId]=useState(null);
    const start=(e)=>{
      setS(Number(e.target.value));
      console.log(st);

    }
    const end=(e)=>{
      setE(Number(e.target.value));
      console.log(en);
    }
    const starttimer=()=>{
      setTimer(st);
      let  i=setInterval(()=>{
        if(timer>en){
            clearInterval(id);
            setTimer(null);
            setId(null);
        }
        else{
        //Stale state when you dont pass timer as argument inside setTimer
        setId(i);
        setTimer((timer)=>timer+1);
        }
    },1000);
    }
    // useEffect(()=>{
    //   setTimer(st);
    //     let id=setInterval(()=>{
    //         if(timer>en){
    //             clearInterval(id);
    //         }
    //         else{
    //         //Stale state when you dont pass timer as argument inside setTimer
    //         setTimer((timer)=>timer+1);
    //         }
    //     },1000);

    //     return ()=>{
    //         clearInterval(id);
    //     };
    // },[st,en,timer])
    
    return (
        <div>
          <input type="number" placeholder="Enter start time" value={st} onChange={start}/>
          <input type="number" placeholder="Enter end time" value={en}onChange={end}/>
          <button onClick={starttimer}>Start</button>
          <br/><br/>
            Timer:{timer}
        </div>
    );
};
export default Timer;