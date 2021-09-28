export interface FilterOption {
    value: string;
    label: string;
}

export const filterOptionsDatas: FilterOption[] = [
    { value: 'recently-created', label: 'Recently created' },
    { value: 'name_asc', label: 'Name : ASC' },
    { value: 'name_desc', label: 'Name : DESC' },
];
