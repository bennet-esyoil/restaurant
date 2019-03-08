import { Entity, Column, ObjectIdColumn } from "typeorm";
import { IsInt, IsString } from "class-validator";
import { ApiModelProperty, ApiModelPropertyOptional } from "@nestjs/swagger";

@Entity()
export class Item {
    @ApiModelProperty()
    @ObjectIdColumn()
    id: number;

    @ApiModelProperty()
    @Column({ length: 50})
    @IsString()
    name: string;

    @ApiModelProperty()
    @Column('int')
    @IsInt()
    price: number;

    @ApiModelPropertyOptional()
    @Column('int')
    @IsInt()
    clicks?: number;
}