import {Entity, PrimaryGeneratedColumn, Column , ManyToOne} from "typeorm";
import  {Xarticle} from "./Xarticle"

@Entity()
export class Ximage {
    @PrimaryGeneratedColumn()
    imgId : number

    @Column()
    url : string

    @ManyToOne((type) => Xarticle, (xarticle) => xarticle.images)
    article: Xarticle;
}