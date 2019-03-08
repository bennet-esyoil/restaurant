import * as request from 'supertest';
import { INestApplication, Request } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { ShoppingCartController } from './../../src/shopping-cart/shopping-cart.controller';
import { DatabaseModule } from './../../src/database/database.module';


describe('Shopping-Cart', () => {
    let app: INestApplication;

    beforeAll(async () => {
        const module = await Test.createTestingModule({
            controllers: [ShoppingCartController, DatabaseModule]
        }).compile();
        app = module.createNestApplication();
        await app.init();
    });

    it("/shopping-cart GET", () => {
        return request(app.getHttpServer())
            .get("/shopping-cart")
            .expect(404);
    });

    it("/shopping-cart POST", () => {
        return request(app.getHttpServer())
            .post('/shopping-cart')
            .expect(201);
    });

    afterAll(async () => {
        await app.close();
    });
});