import 'bootstrap/dist/css/bootstrap.min.css'
import Filter from './Filter';
import { FilterWraper, FilterSpace, FilterButton } from './Filter.styles';

const FilterArea = () => {
    return (
        <FilterSpace className="d-flex justify-content-around align-items-center">
            <FilterWraper className="d-flex justify-content-around align-items-center">
                <Filter filter_by="Sort by price" first_param="Asc ↑" second_param="Desc ↓" />
                <Filter filter_by="Filter by destination" first_param="Space ships" second_param="Sea ship ↓" />
                <Filter filter_by="Sort by " first_param="Asc ↑" second_param="Desc ↓" />
            </FilterWraper>
            <FilterButton className="border border-dark">Apply</FilterButton>
        </FilterSpace>
    )
}

export default FilterArea;