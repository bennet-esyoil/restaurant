import { Injectable, Inject } from "@nestjs/common";
import { Item } from "./item.entity";
import { Repository } from "typeorm";

@Injectable()
export class ItemsService {

    constructor(
        @Inject('ItemRepositoryToken')
        private readonly itemRepository: Repository<Item>,
    ) {}

    async findAll(): Promise<Item[]> {
        return await this.itemRepository.find({});
    }

    async findSingle(id): Promise<Item> {
        return await this.itemRepository.findOne(id);
    } 

    async create(item: Item) {
        await this.itemRepository.insert(item);
    }
}