import { Controller, Post, Get } from "@nestjs/common";
import { Item } from './../items/item.entity';
import { ItemsService } from './../items/items.service';

@Controller("shopping-cart")
export class ShoppingCartController {

    constructor(private readonly itemsService: ItemsService) {}

    @Post()
    async addItem() {
        return "This is a fake shop!";
    }
    @Get()
    async getAll(): Promise<Item[]> {
        return this.itemsService.findAll();
    }
}