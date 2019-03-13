import { WebSocketGateway, WebSocketServer, SubscribeMessage, OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit } from '@nestjs/websockets'
import { Server } from 'tls';


@WebSocketGateway()
export class EventsGateway implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit {
    @WebSocketServer() private server: any;
    wsClients=[];
    afterInit() {
        this.server.emit('testing', { do: 'stuff' });
    }

    handleConnection(client: any) {  
        this.wsClients.push(client);
    }

    handleDisconnect(client) {
        for (let i = 0; i < this.wsClients.length; i++) {
            if (this.wsClients[i] === client) {
                this.wsClients.splice(i, 1);
            break;
            }
        }
        this.broadcast('disconnect',{});
    }
    private broadcast(event, message: any) {
        for (let c of this.wsClients) {
            c.emit(event, message);
        }
    }

    @SubscribeMessage('events')
    onChgEvent(client: any, payload: any) {
        console.log(payload);
        this.broadcast('events',payload);
    }
}