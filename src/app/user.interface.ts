import { IBadge } from './badge.interface';

export interface IUser {
    id: number;
    username: string;
    email: string;
    picture: string;
    badges: IBadge[];
}
