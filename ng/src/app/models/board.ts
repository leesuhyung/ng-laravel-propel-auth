import {User} from "./user";

export class Board {
    Id: number;
    UserId: number;
    Entity: string;
    Title: string;
    Contents: string;
    CreatedAt?: string;
    UpdatedAt?: string;
    User: User = new User;
}