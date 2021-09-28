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
    right: string;
    size: string;
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
