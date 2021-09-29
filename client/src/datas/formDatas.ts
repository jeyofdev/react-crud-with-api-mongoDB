export interface FilterOptionInterface {
    value: string;
    label: string;
}

export const filterOptionsDatas: FilterOptionInterface[] = [
    { value: 'recently-created', label: 'Recently created' },
    { value: 'name_asc', label: 'Name : ASC' },
    { value: 'name_desc', label: 'Name : DESC' },
];

export const skillsOptionsDatas = [
    'react',
    'javascript',
    'php',
    'angular',
    'vue',
    'symfony',
];
