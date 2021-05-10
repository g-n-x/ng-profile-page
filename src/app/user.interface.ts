import { IBadge } from './badge.interface';

export interface IUser {
    username: string;
    email: string;
    picture: string;
    badges: IBadge[];
}
