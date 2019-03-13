import { Module } from "@nestjs/common";
import { EventsGateway } from './chat.controller';

@Module({
    providers: [EventsGateway]
})
export class ChatModule {}