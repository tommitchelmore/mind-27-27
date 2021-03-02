import React from 'react';
import ButtonLink from './ButtonLink';
import StatDisplay from './StatDisplay';

function StatModalContent({name, text, pageLink, moneyRaised, moneyGoal, milesRan}) {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-purple text-3xl md:text-4xl xl:text-6xl text-center pb-4">{name}'s Stats:</h1>
            <p className="text-grey font-hand md:text-xl xl:text-2xl text-center pb-4">
                {text}
            </p>
            <div className="flex justify-center items-center flex-wrap text-blue pb-4">
                <StatDisplay value={moneyRaised} prefix="£">Raised</StatDisplay>
                <StatDisplay value={parseFloat(moneyRaised) / parseFloat(moneyGoal) * 100} decimals={0} suffix="%">Of £{moneyGoal} Goal</StatDisplay>
                <StatDisplay value={milesRan}>Total miles ran</StatDisplay>
            </div>
            <div className="flex justify-center items-center">
                <ButtonLink href={pageLink} target="_blank">Donate now! (JustGiving)</ButtonLink>
            </div>
        </div>
    );
}

export default StatModalContent;