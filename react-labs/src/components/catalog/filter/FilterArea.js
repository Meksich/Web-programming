import 'bootstrap/dist/css/bootstrap.min.css'
import Filter from './Filter';
import { FilterWraper, FilterSpace, FilterButton } from './Filter.styles';
import React, { useContext } from 'react';
import CatalogContext from '../../../contexts/CatalogContext';

const FilterArea = () => {
    let {setFilters} = useContext(CatalogContext);

    const applyFilters = () => {
        let filter_1 = document.getElementById("filter_id_1").value;
        let filter_2 = document.getElementById("filter_id_2").value;
        let filter_3 = document.getElementById("filter_id_3").value;
        let shipClass, destination, sortOrder;
        if(filter_1 == "Asc ↑"){
            sortOrder = "asc";
        } else {
            sortOrder = "desc";
        } 

        if(filter_2 == "Space ships"){
            destination = "space";
        } else if (filter_2 == "Sea ships"){
            destination = "sea";
        }

        if(filter_3 == "Battle ships"){
            shipClass = "battle";
        } else if(filter_3 == "Сargo ships"){
            shipClass = "cargo";
        } else if(filter_3 == "Passenger ships"){
            shipClass = "passenger";
        }
        setFilters({
            shipClass: shipClass,
            destination: destination,
            sortOrder: sortOrder,
        });
    }

    return (
        <FilterSpace className="d-flex justify-content-around align-items-center">
            <FilterWraper className="d-flex justify-content-around align-items-center">
                <Filter set_id="filter_id_1" filter_by="Sort by price" first_param="Asc ↑" second_param="Desc ↓" />
                <Filter set_id="filter_id_2" filter_by="Filter by destination" first_param="No filter" second_param="Sea ships" third_param="Space ships" />
                <Filter set_id="filter_id_3" filter_by="Filter by class" first_param="No filter" second_param="Сargo ships" third_param="Passenger ships" fourth_param="Battle ships" />
            </FilterWraper>
            <FilterButton className="border border-dark" onClick={applyFilters}>Apply</FilterButton>
        </FilterSpace>
    )
}

export default FilterArea;