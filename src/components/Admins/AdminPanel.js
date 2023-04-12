import * as React from 'react';
import {useState} from "react";

import AdminPanelBike from "./AdminPanelBike";

import BIKES from '../../data/bikes.json';

function AdminPanel() {

  const [searchBike, setSearchBike] = useState('');

  const onChangeSearchBike = (event) => {
    setSearchBike(event.target.value);
  }

  return (
    <div className="main">
      <div className="admin">
        <div className="admin-search">
          <input
            value={searchBike}
            onChange={onChangeSearchBike}
            type="text"
            placeholder="Find bike..."/>
        </div>
        <div className="admin-bikes">
          {
            BIKES
              .filter((bike) => {
                return (bike.id.includes(searchBike) || (bike.address).toLowerCase().includes(searchBike.toLowerCase()));
              })
              .map((bike) => (
                <AdminPanelBike key={bike.id} {...bike} />
              ))
          }
        </div>
      </div>
    </div>
  )
}

export default AdminPanel