import { Connection } from "typeorm";
import { Item } from "./item.entity";

export const ItemsProviders = [
    {
        provide: 'ItemRepositoryToken',
        useFactory: (connection: Connection) => connection.getRepository(Item),
        inject: ['DbConnectionToken']
    }
];