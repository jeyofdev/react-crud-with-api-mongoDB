import Select, { StylesConfig } from 'react-select';
import { FilterOption } from '../../../datas/formDatas';
import { SelectInputType } from '../../../types/Select';

const SelectInput = ({ options, handleChange }: SelectInputType) => {
    const styles: StylesConfig<FilterOption, false> = {
        control: (css) => ({ ...css }),
    };

    return (
        <Select
            // @ts-ignore
            options={options}
            styles={styles}
            placeholder={'Sort by'}
            onChange={handleChange}
        />
    );
};

export default SelectInput;
