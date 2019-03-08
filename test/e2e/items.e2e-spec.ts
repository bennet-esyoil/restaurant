import * as request from 'supertest';
import { INestApplication, Request } from '@nestjs/common';
import { ItemsModule } from '../../src/items/item.module';
import { Test } from '@nestjs/testing';
import { DatabaseModule } from '../../src/database/database.module';



describe('Items', () => {
    let app: INestApplication;

    beforeAll(async () => {
        const module = await Test.createTestingModule({
            imports: [ItemsModule, DatabaseModule]
        }).compile();
        app = module.createNestApplication();
        await app.init();
    });

    it("/items GET ", () => {
        return request(app.getHttpServer())
            .get('/items')
            .expect(200)
            .expect(res => {
                expect(Array.isArray(res.body)).toBe(true);
            });
    });

    it("/items/:id GET", () => {
        return request(app.getHttpServer())
            .get('/items/5c826b711ff4d51af36b8217')
            .expect(200)
            .expect(res => {
                expect(res.body).toHaveProperty("name");
            });
    });


    it ("/items POST partial content", () => {
        return request(app.getHttpServer())
            .post("/items")
            .send({ name: "TEST", price: 2, clicks: 4 })
            .expect(201);
    });


    it ("/items POST partial content", () => {
        return request(app.getHttpServer())
            .post("/items")
            .send({ name: "TEST", price: 2 })
            .expect(400);
    });



    it("/items POST no content", () => {
        return request(app.getHttpServer())
            .post("/items")
            .send({})
            .expect(400);
    });

    afterAll(async () => {
        await app.close();
    });
});