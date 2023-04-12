import * as React from "react";

function PopupContent(props) {
    const {address, bikes, slots} = props;
    return (
        <div className="modal-wrap">
            <div className="modal-title">
                <div className="modal-title-icon">
                    <i className="icon icon-flag-pin"></i>
                </div>
                <div className="modal-title-text"><span>{address}</span>
                </div>
            </div>
            <div className="modal-slots">
                <div className="modal-slots-item">
                    <div className="modal-slots-item-count"><span>{bikes}</span></div>
                    <div className="modal-slots-item-title"><span>bikes</span></div>
                </div>
                <div className="modal-slots-item">
                    <div className="modal-slots-item-count"><span>{slots}</span></div>
                    <div className="modal-slots-item-title"><span>slots</span></div>
                </div>
            </div>

            <div className="modal-btn">
                <button className="btn btn-big btn-theme" type="button"><i
                    className="icon icon-unlock"></i><span>Unlock</span></button>
            </div>
        </div>
    )
}

export default PopupContent