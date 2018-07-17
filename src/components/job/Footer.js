import React, {Component} from 'react'
import {Link} from '../router'


export const Footer = () => {
    return (
        <div className="Footer">
            <Link to="/">All</Link>
            <Link to="/approve">Approve</Link>
            <Link to="/complete">Complete</Link>
        </div>
    )
}