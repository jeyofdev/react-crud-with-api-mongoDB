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
