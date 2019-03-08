import { Module } from '@nestjs/common';
import { ItemsModule } from './items/item.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';

@Module({
  imports: [ ItemsModule, ShoppingCartModule ],
  controllers: []
})
export class AppModule {}
