import {Column, Entity} from "typeorm";
import {ApiProperty} from "@nestjs/swagger";
import {Generique} from "../../../communs/generiques/generique";

@Entity({
    name: 'categories'
})
export class Category extends Generique{
    @ApiProperty()
    @Column({
        unique: true,
        length: 10,
    })
    code_categorie: string;

    @ApiProperty()
    @Column({
        unique: true,
        length: 20,
    })
    nomCategorie: string;

    @ApiProperty()
    @Column({
        unique: true,
    })
    description: string;
}
