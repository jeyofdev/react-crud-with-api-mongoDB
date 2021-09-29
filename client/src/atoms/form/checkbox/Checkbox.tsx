import PropTypes from 'prop-types';
import { CheckboxType } from '../../../types';
import * as styled from './Checkbox.styled';

const Checkbox = ({ label, name, checked, onChange }: CheckboxType) => {
    return (
        <styled.Checkbox>
            <styled.Input
                type="checkbox"
                id={name}
                name={name}
                checked={checked}
                onChange={onChange}
            />
            <styled.Label htmlFor={name}>{label}</styled.Label>
        </styled.Checkbox>
    );
};

Checkbox.propType = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Checkbox;
