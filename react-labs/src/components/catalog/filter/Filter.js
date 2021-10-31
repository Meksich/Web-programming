import { Dropdown, Option } from './Filter.styles';
import 'bootstrap/dist/css/bootstrap.min.css'

const Filter = (props) => {
    return (
        <Dropdown>
            <option disabled>{props.filter_by}</option>
            <Option>{props.first_param}</Option>
            <Option>{props.second_param}</Option>
            {(props.third_param) &&
            <Option>{props.third_param}</Option>}
            {(props.fourth_param) &&
            <Option>{props.fourth_param}</Option>}
            {(props.fifth_param) &&
            <Option>{props.fifth_param}</Option>}
        </Dropdown>
    )
}

export default Filter;