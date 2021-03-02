import React from 'react';
import CountUp from 'react-countup'
import {ImSpinner2 as Spinner} from 'react-icons/im'

function statDisplay({value, children, prefix}) {
    return (
        <div className="m-4 flex flex-col items-center">
            <span className="font-sans text-4xl md:text5-xl xl:text-6xl">{value ? <CountUp prefix={prefix} start={value / 2} end={value} decimal="." decimals={2} duration={3} /> : <Spinner className="animate-spin" />}</span>
            <p className="font-hand md:text-xl xl:text-2xl">{children}</p>
        </div>
    );
}

export default statDisplay;