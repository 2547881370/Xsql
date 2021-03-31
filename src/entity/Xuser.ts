import {Entity, PrimaryGeneratedColumn, Column , OneToMany} from "typeorm";
import { Xarticle } from "./Xarticle"

@Entity()
export class Xuser {
    @PrimaryGeneratedColumn()
    userID : number

    @Column()
    nick : string

    @Column()
    avatar : string

    @Column("int")
    gender : number

    @Column("int")
    age : number

    @Column("int")
    role: number

    @Column("int")
    experience: number

    @Column("int")
    credits: number

    @Column()
    identityTitle : string

    @Column("bigint")
    identityColor : number

    @Column("int")
    level : number

    @Column("int")
    levelColor : number

    @Column("int")
    integral : number

    @Column("int")
    uuid : number

    @Column()
    integralNick : string

    @OneToMany((type) => Xarticle , (xarticle) => xarticle.user)
    articles : Xarticle[]
}