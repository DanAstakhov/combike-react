import * as React from 'react';
function SearchPanelItem(props) {
    const {address, bikes, slots, distance} = props;
    return (
        <div className="search-panel-list-item">
            <div className="search-panel-list-item-info"><span className="ch-address">{address}</span><span
                className="ch-distance">{distance} m</span></div>
            <div className="search-panel-list-item-count"><span className="ch-bikes">{bikes}</span><span
                className="ch-slots">{slots}</span></div>
            <button className="search-panel-list-item-link" type="button"></button>
        </div>
    )
}

export default SearchPanelItem;