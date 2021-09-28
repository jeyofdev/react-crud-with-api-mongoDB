import { ActionMeta, SingleValue } from 'react-select';
import { FilterOption } from '../datas/formDatas';

export type SelectType = {
    name: string;
    id: string;
    options: string[];
};

export type SelectInputType = {
    options: FilterOption[];
    handleChange?:
        | ((
              newValue: SingleValue<FilterOption>,
              actionMeta: ActionMeta<FilterOption>
          ) => void)
        | undefined;
};
