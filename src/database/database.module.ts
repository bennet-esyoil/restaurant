import { Module, Global } from "@nestjs/common";

import { databaseProvider } from './database.provider';

@Module({
    exports: [ ...databaseProvider ],
    providers: [...databaseProvider ]
})
export class DatabaseModule {}