import React from 'react'
import Link from 'next/link'

function button({ href,icon,text }) {
    return (
        <Link href={href}>
            <button className="rounded mx-auto my-8 py-4 bg-purple text-opacity-80 text-white w-full border-b-4 border-purple-600">
                <span className="text-2xl pr-2 opacity-80"><i className={icon} aria-hidden="true"></i></span>
                {text}
            </button>
        </Link>
    )
}

export default button
