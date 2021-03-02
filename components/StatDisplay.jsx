import React from 'react';
import CountUp from 'react-countup'
import {ImSpinner2 as Spinner} from 'react-icons/im'

function StatDisplay({value, children, prefix, suffix, decimals}) {
    return (
        <div className="m-4 flex flex-col items-center">
            <span className="font-sans text-4xl md:text5-xl xl:text-6xl text-center">{value ? <CountUp prefix={prefix} suffix={suffix} start={value / 2} end={value} decimal="." decimals={decimals || decimals === 0 ? decimals : 2} duration={3} /> : <Spinner className="animate-spin" />}</span>
            <p className="font-hand md:text-xl xl:text-2xl text-center">{children}</p>
        </div>
    );
}

export default StatDisplay;