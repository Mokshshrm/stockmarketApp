import React, { useState } from 'react'
import { mockSearchResult } from '../constants/mock'
import { XIcon, SearchIcon } from '@heroicons/react/solid/index'

export const Search = () => {


    const [input, setInput] = useState("")
    const [bestMatch, setBestMatch] = useState(mockSearchResult.result)

    const clear = () => {
        setInput("");
        setBestMatch([]);
    }
    const UpdateBestMatch = () => {
        setBestMatch(mockSearchResult.result);
    }

    return (
        <div className='flex items-center my-4 border-2 rounded-md relative z-50 w-96 bg-white border-neutral-200'>
            <input type='text' value={input} className='w-full px-4 py-2 focus:outline-none rounded-md'
                placeholder='Search Stock..'
                onKeyPress={(event) => {
                    if (event.key === "Enter") {
                        UpdateBestMatch();
                    }
                }}
                onChange={(event) => { setInput(event.target.value) }}
            ></input>
            {input && <button onClick={clear}>
                <XIcon className="h-4 w-4 fill-gray-500 " />
            </button>}
        </div>
    )
}
