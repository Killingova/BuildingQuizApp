import { useEffect, useState } from "react";

export default function QuestionTimer ({ timeout, onTimeout }) {
    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(()=>{
        console.log('SETTINGTIMEOUT')
        setTimeout(onTimeout, timeout);
    },[timeout, onTimeout])

    setTimeout(onTimeout, timeout);

    useEffect(()=>{
        console.log('SETTING INTERVAL');
        setInterval(()=> {
            setRemainingTime ( prevRemainingTime => prevRemainingTime - 100);
        },100);
    },[]);

    return (
    <progress id="question-time" max={timeout} value={remainingTime}/>
    );
}