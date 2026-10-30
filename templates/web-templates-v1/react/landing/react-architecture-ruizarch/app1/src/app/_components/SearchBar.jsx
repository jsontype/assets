'use client'

import { useCallback, useState } from "react";
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'

const SearchBarModule = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    
    const query = searchParams.get('key') || '';

    const [search, setSearch] = useState(query);

    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(searchParams)
            params.set(name, value)
        
            return params.toString()
        },
        [searchParams]
    )

    const searchChangeHandler = event => {
        setSearch(event.target.value);
    };

    const searchPressHandler = event => {
        if (event.key === 'Enter' || event.keyCode === 13) {
            router.push("/search" + '?' + createQueryString('key', search))
        }
    };

    return (
        <div className="mil-sidebar-search mil-up mil-mb-30">
            <input 
                type="text" 
                placeholder="Search in blog ..."
                value={search}
                onChange={searchChangeHandler}
                onKeyDown={searchPressHandler}
                id="searchField" 
            />
            <button 
                onClick={() => {
                    router.push("/search" + '?' + createQueryString('key', search))
                }}
            >
                <img src="/img/icons/13.svg" alt="search" />
            </button>
        </div>
    )
}
export default SearchBarModule;