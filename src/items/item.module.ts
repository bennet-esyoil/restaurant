import { Module } from "@nestjs/common";
import { ItemsService } from "./items.service";
import { DatabaseModule } from "./../database/database.module";
import { ItemsProviders } from "./items.providers";
import { ItemsController } from "./items.controller";

@Module({
    imports: [ DatabaseModule ],
    providers: [ ...ItemsProviders, ItemsService ],
    controllers: [ ItemsController ],
    exports: [ ItemsModule ]
})
export class ItemsModule {}