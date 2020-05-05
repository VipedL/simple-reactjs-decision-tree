import React from 'react';

export default function (props) {
    return (
        <div onClick={() => props.onDecisionClick()}>
            {props.decision.text}
        </div>
    )
}