import {Entity, PrimaryGeneratedColumn, Column, OneToMany , ManyToOne} from "typeorm";
import { Ximage } from "./Ximage"
import { Xuser } from "./Xuser"

@Entity()
export class Xarticle {
    @PrimaryGeneratedColumn()
    postID : number

    @Column()
    title : string

    @Column()
    detail : string

    @Column("int")
    score : number

    @Column()
    scoreTxt : string

    @Column("int")
    hit : number

    @Column("int")
    commentCount : number

    @Column("int")
    notice : number

    @Column("int")
    weight : number

    @Column("int")
    isGood : number

    @Column("bigint")
    createTime : number

    @Column("bigint")
    activeTime : number

    @Column("int")
    line : number

    @Column("int")
    tagid : number

    @Column("int")
    status : number

    @Column("int")
    praise : number

    @Column("int")
    isAuthention : number

    @Column("int")
    isRich : number

    @Column("int")
    appOrientation : number

    @Column("int")
    isAppPost : number

    @Column("int")
    appSize : number

    @Column("int")
    isGif : number

    @OneToMany((type) => Ximage, (ximage) => ximage.article , {
        cascade: true,
    })
    images: Ximage[];

    @ManyToOne((type) => Xuser, (xuser) => xuser.articles,{
        cascade: true,
    })
    user: Xuser;
}