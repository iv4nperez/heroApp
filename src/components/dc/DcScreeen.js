import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const DcScreeen = () => {
    return (
        <div>
            <h1>DC Screen</h1>
            <hr/>
            <HeroList publisher="DC Comics" />
        </div>
    )
}
