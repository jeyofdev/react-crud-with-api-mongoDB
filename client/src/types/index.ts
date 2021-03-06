import { ChangeEventHandler } from 'react';

export type LayoutType = {
    children: JSX.Element | any[];
};

export type UserType = {
    _id: string;
    name: string;
    content: string;
    skills: SkillType[];
};

export type SkillType = {
    _id: string;
    title: string;
    votes: number;
    updateSkills: (title: string, vote: number) => void;
};

export type SkillPropsType = Omit<SkillType, '_id'>;

export type UserProps = Pick<
    UserType,
    '_id' | 'name' | 'content' | 'skills'
> & {
    onDelete: (userName: string) => void;
    details?: boolean;
};

export type ButtonType = {
    onClick: () => void;
    children: string;
    themeColor: string;
    margin: string;
};

export type ButtonIconType = Pick<ButtonType, 'onClick' | 'themeColor'> & {
    icon: any;
    size: string;
    right?: string;
    color?: string;
};

export type ButtonIconWithoutBackgroundType = {
    onClick: () => void;
    icon: any;
    size: string;
    color: string;
};

export type ModalType = {
    children: JSX.Element | string;
    onClose: () => void;
};

export type DialogType = {
    content: string;
    onCancel: () => void;
    onConfirmation: () => void;
};

export type InputType = {
    label: string;
    name: string;
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
};

export type TextareaType = Pick<
    InputType,
    'label' | 'name' | 'value' | 'onChange'
> & {
    rows: number;
};

export type FormType = Pick<UserType, '_id' | 'name' | 'content' | 'skills'> & {
    method: 'post' | 'put';
};

export type CheckboxType = {
    label: string;
    name: string;
    checked: boolean;
    onChange: (e: any) => void;
};
