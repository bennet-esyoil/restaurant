import { Controller, Get, Post, Body, UsePipes, Param } from "@nestjs/common";
import { ItemsService } from "./items.service";
import { Item } from "./item.entity";
import { ValidationPipe } from "./../../src/common/validation.pipe";

@Controller("items")
export class ItemsController {

    constructor(private readonly itemsService: ItemsService) {}

    @Get()
    async findAll(): Promise<Item[]> {
        return this.itemsService.findAll();
    }

    @Get(":id")
    async find(@Param('id') id): Promise<Item> {
        return this.itemsService.findSingle(id);
    }

    @Post()
    @UsePipes(new ValidationPipe())
    async create(@Body() createItem: Item) {
        this.itemsService.create(createItem);
    }

}