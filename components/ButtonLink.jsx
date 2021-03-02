import React from 'react';

function ButtonLink(props) {
    return <a rel="noopener" className={`px-8 py-3 rounded-xl font-sans text-white md:text-xl xl:text-2xl text-center ${props.alt ? 'bg-white text-purple' : 'bg-purple text-white'}`} {...props}>{props.children}</a>
}
    
export default ButtonLink;