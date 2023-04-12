import * as React from 'react';
import {useState} from "react";
import SearchPanelItem from "./SearchPanelItem";

function SearchPanel({placesObject, openSearch, setOpenSearch}) {

    const [searchValue, setSearchValue] = useState('');

    const onChangeSearchValue = (event) => {
        setSearchValue(event.target.value);
    }

    const getRandomDistance = (min, max) => (
      Math.floor(Math.random() * (max - min)) + min
    )

    return (
        <div className={`search-panel ${openSearch ? 'opened' : ''}`}>
            <div className="search-panel-wrap">

                <div className="search-panel-input">
                    <input
                        type="text"
                        value={searchValue}
                        onChange={onChangeSearchValue}
                        placeholder="Find a station..." />
                    <button className="btn search-panel-close" type="button" onClick={() => setOpenSearch(false)}>
                        <i className="icon icon-close"></i>
                    </button>
                </div>

                <div className="search-panel-list">
                    {
                        placesObject.filter(obj => {
                            return (
                                (obj.address).toLowerCase().includes(searchValue.toLowerCase())
                            )
                        }).map((placesObj, index) => (
                                <SearchPanelItem
                                    key={`placeSearch-${index}`}
                                    distance={getRandomDistance(250,999)}
                                    {...placesObj}
                                />
                        ))
                    }
                </div>

            </div>
        </div>
    )

}

export default SearchPanel;