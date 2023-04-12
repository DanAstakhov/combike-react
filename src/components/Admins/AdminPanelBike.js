import * as React from "react";

function AdminPanelBike({id, status, address}) {
  return (
    <div className="admin-bikes-item">
      <div className="admin-bikes-item-info"><span className="ch-sku">{id}</span><span
        className="ch-address">{address}</span></div>
      <div className="admin-bikes-item-status">
        <span
          className={`${status === 'On the way' ? 'status-on-way' : ''}${status === 'Waiting' ? 'status-waiting' : ''}${status === 'Alert' ? 'status-alert' : ''}`}>
          {status}
        </span>
      </div>
    </div>
  )
}

export default AdminPanelBike