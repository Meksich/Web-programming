import 'bootstrap/dist/css/bootstrap.min.css'
import Filter from './Filter';
import { FilterWraper, FilterSpace, FilterButton } from './Filter.styles';
import {data} from '../../../res/data/data';
import React, { useContext } from 'react';
import CatalogContext from '../../../contexts/CatalogContext';

const FilterArea = () => {
    let {setDataRender} = useContext(CatalogContext);

    const applyFilters = () => {
        let filter_1 = document.getElementById("filter_id_1").value;
        let filter_2 = document.getElementById("filter_id_2").value;
        let filter_3 = document.getElementById("filter_id_3").value;
        let sortedData = Array.from(data);
        if(filter_1 == "Asc ↑"){
            sortedData.sort((ship1, ship2) => ship1.price - ship2.price);
        } else {
            sortedData.sort((ship1, ship2) => ship2.price - ship1.price);
        } 

        if(filter_2 == "Space ships"){
            sortedData = sortedData.filter(ship => ship.destination === "space");
        } else {
            sortedData = sortedData.filter(ship => ship.destination === "sea");
        }
        
        if(filter_3 == "Battle ships"){
            sortedData = sortedData.filter(ship => ship.class === "battle");
        } else if(filter_3 == "Сargo ships"){
            sortedData = sortedData.filter(ship => ship.class === "cargo");
        } else{
            sortedData = sortedData.filter(ship => ship.class === "passenger");
        }
        setDataRender(sortedData);
    }
    
    return (
        <FilterSpace className="d-flex justify-content-around align-items-center">
            <FilterWraper className="d-flex justify-content-around align-items-center">
                <Filter set_id="filter_id_1" filter_by="Sort by price" first_param="Asc ↑" second_param="Desc ↓" />
                <Filter set_id="filter_id_2" filter_by="Filter by destination" first_param="Space ships" second_param="Sea ships" />
                <Filter set_id="filter_id_3" filter_by="Filter by class" first_param="Battle ships" second_param="Сargo ships" third_param="Passenger ships" />
            </FilterWraper>
            <FilterButton className="border border-dark" onClick={applyFilters}>Apply</FilterButton>
        </FilterSpace>
    )
}

export default FilterArea;