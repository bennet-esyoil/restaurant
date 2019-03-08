import { Module } from "@nestjs/common";
import { DatabaseModule } from "./../../src/database/database.module";
import { ShoppingCartController } from "./shopping-cart.controller";
import { ItemsService } from "./../../src/items/items.service";
import { ItemsProviders } from "./../../src/items/items.providers";


@Module({
    imports: [DatabaseModule],
    exports: [ShoppingCartModule],
    controllers: [ShoppingCartController],
    providers: [...ItemsProviders, ItemsService]
})
export class ShoppingCartModule {}