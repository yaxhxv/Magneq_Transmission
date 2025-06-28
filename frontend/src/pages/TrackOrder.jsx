import React, { useState, useEffect } from "react"; 
import SearchBar from "../components/common/Searchbar";
import TrackSalesTable from "../components/sales/TrackSalesTable";
const TrackOrder = () => {
    return(
        <div className="p-10 grid gap-4 bg-background text-text rounded-lg shadow-sm">
            <div className="flex justify-between mx-3">
                <h1 className="font-semibold text-3xl text-gray-700 ">Track Order</h1>
                <SearchBar placeholder={"Search using Order Id"}  />  
            </div>
            <TrackSalesTable />
        </div>
    );
};

export default TrackOrder;