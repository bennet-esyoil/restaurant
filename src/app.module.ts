import { Module } from '@nestjs/common';
import { ItemsModule } from './items/item.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [ ItemsModule, ShoppingCartModule, ChatModule],
  controllers: []
})
export class AppModule {}
