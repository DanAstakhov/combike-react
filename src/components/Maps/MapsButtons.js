import * as React from 'react';
function MapsButtons({setOpenSearch, setOpenLogin}) {
    return (
        <div className="main-buttons">
            <button className="btn btn-icon" type="button"><i className="icon icon-target"></i></button>
            <button onClick={() => setOpenSearch(true)} className="btn btn-icon" type="button">
                <i className="icon icon-search"></i>
            </button>
            <button onClick={() => setOpenLogin(true)} className="btn btn-icon" type="button">
                <i className="icon icon-user"></i>
            </button>
        </div>
    )
}

export default MapsButtons