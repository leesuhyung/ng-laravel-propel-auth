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
    {Text: '테란', Value: 'Terran'},
    {Text: '저그', Value: 'Protoss'},
    {Text: '프로토스', Value: 'Zerg'},
];