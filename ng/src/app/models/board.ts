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

export const BOARD_ENTITY_LIST: any[] = [
    {Text: '유형1', Value: '1'},
    {Text: '유형2', Value: '2'},
    {Text: '유형3', Value: '3'},
];