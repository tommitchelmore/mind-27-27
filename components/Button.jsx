import React from 'react';

function Button(props) {
    if (props.alt) return <button className="bg-white px-8 py-3 rounded-xl font-sans text-purple text-3xl" {...props}>{props.children}</button>
    return <button className="bg-purple px-8 py-3 rounded-xl font-sans text-white text-3xl" {...props}>{props.children}</button>
}

export default Button;