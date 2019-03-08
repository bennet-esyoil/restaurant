
import { createConnection } from 'typeorm';

export const databaseProvider = [
    {
        provide: 'DbConnectionToken',
        useFactory: async () => await createConnection({
            type: 'mongodb',
            host: 'localhost',
            port: 27017,
            database: 'restaurant',
            entities: [
                'src/*/*.entity.ts'
            ],
            useNewUrlParser: true,
        }),
    },
];