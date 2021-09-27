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
};

export type ButtonType = {
    onClick: () => void;
    children: string;
    themeColor: string;
    margin: string;
};

export type ButtonIconType = Pick<ButtonType, 'onClick' | 'themeColor'> & {
    icon: any;
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
