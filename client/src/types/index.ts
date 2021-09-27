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
    title: string;
    votes: number;
};

export type UserProps = Omit<UserType, '_id'>;

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
