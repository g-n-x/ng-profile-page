import { IBadge } from './badge.interface';

export interface IUser {
    username: string;
    email: string;
    badges: IBadge[];
}
