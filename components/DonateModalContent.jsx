import React from 'react';
import ButtonLink from './ButtonLink';

import content from '../content'

function DonateModalContent() {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-purple text-3xl md:text-4xl xl:text-6xl text-center pb-8">Donate now!</h1>
            <p className="text-grey font-hand md:text-xl xl:text-2xl text-center pb-8">We'd really appreciate your support - this campaign is so important to us on a personal level.  We each have a fundraiser which you can access here:</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <ButtonLink href={content.tom.pageLink} target="_blank">Tom (JustGiving)</ButtonLink>
                <ButtonLink href={content.ross.pageLink} target="_blank">Ross (JustGiving)</ButtonLink>
            </div>
        </div>
    );
}

export default DonateModalContent;