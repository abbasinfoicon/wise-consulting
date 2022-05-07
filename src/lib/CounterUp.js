import React, { useEffect, useRef, useState } from 'react'

const CounterUp = ({start=0, end, timer=50}) => {
    const [count, setCount] = useState(null);

    const ref = useRef(start);
    const accumlator = end / 200;

    const updateCounterState = () => {
        if (ref.current < end) {
            const result = Math.ceil(ref.current + accumlator);

            if (result > end) {
                return (
                    setCount(end)
                )
            }
            setCount(result);
            ref.current = result;
        }
        setTimeout(updateCounterState, timer);
    }

    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            updateCounterState();
        }
        return () => (isMounted = false);
    }, [end]);

  return (
    <div className="rs-count">{ count }</div>
  )
}

export default CounterUp