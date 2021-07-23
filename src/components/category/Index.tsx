import React from 'react';

import './category.scss'

type CategoryProducts = {
    name: string;
}

export default function Category(props: CategoryProducts) {
    return (
        <>
            <div id="category">
                <p>{props.name}</p>
                <span id="teste"></span>
            </div>
        </>
    )
}