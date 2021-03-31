import "reflect-metadata";
import {createConnection} from "typeorm";
import { Xuser } from "./entity/Xuser"
import { Xarticle } from "./entity/Xarticle"
import { Ximage } from "./entity/Ximage"

createConnection().then(async connection => {
    // const xuser = new Xuser()
    // xuser.nick = '野生双马尾'
    // xuser.avatar = 'http://cdn.u1.huluxia.com/g4/M01/51/1B/rBAAdl9nJnyAIeSGAAFdnKqVtio427.jpg'
    // xuser.gender = 2
    // xuser.age = 22
    // xuser.role = 0
    // xuser.experience = 156020
    // xuser.credits = 21614
    // xuser.identityTitle = "秋名山车神"
    // xuser.identityColor = 4278190332
    // xuser.level = 9
    // xuser.levelColor = 0
    // xuser.integral = 0
    // xuser.uuid = 0
    // xuser.integralNick = "众人皆知"
    //
    //
    // const xarticle = new Xarticle()
    // xarticle.title = "【网图】编，继续编。"
    // xarticle.detail = '"跟老公一起逛超市，老公一直盯着一个穿着暴露，前凸后翘的美女看。我问道：你认识啊。他点了点头说，嗯，我同学。我上去就是巴掌：编，继续编，从一年级到毕业咱俩都一个班，你特么哪个同学，我咋不认识。。。"'
    // xarticle.score = 0
    // xarticle.hit = 0
    // xarticle.commentCount = 0
    // xarticle.notice = 0
    // xarticle.weight = 0
    // xarticle.isGood = 0
    // xarticle.createTime = 1617081996000
    // xarticle.activeTime = 1617082954000
    // xarticle.line = 0
    // xarticle.tagid = 5602
    // xarticle.status = 0
    // xarticle.praise = 5
    // xarticle.isAuthention = 5
    // xarticle.isRich = 5
    // xarticle.appOrientation = 5
    // xarticle.isAppPost = 5
    // xarticle.appSize = 5
    // xarticle.isGif = 5
    // xarticle.scoreTxt = '123123'
    //
    // xuser.articles = [xarticle]
    //
    // const ximage1 = new Ximage()
    // ximage1.url = "http://cdn.u1.huluxia.com/g4/M03/34/9A/rBAAdmBitoSAG1pBAADC5LpjbzE005.jpg"
    // ximage1.article = xarticle
    //
    // const ximage2 = new Ximage()
    // ximage2.url = "http://cdn.u1.huluxia.com/g4/M03/34/9A/rBAAdmBitoWAW_ORAAC4iOK4ies545.jpg"
    // ximage2.article = xarticle
    //
    // xarticle.images = [ximage1,ximage2]
    // xarticle.user = xuser
    //
    //
    // // 获取 repository
    // let xarticleRepository = connection.getRepository(Xarticle);
    //
    // await xarticleRepository.save(xarticle);

    // const obj = await xarticleRepository.find({ relations: ["articles"] , });
    // console.log(JSON.stringify(obj))

    // const obj = await xarticleRepository.find({gender : 1241});

    // await xarticleRepository.remove(obj);


    let xarticleRepository = connection.getRepository(Ximage);
    const obj = await xarticleRepository.find({ relations: ["article"] , });

    // 先设置外键约束检查关闭
    await xarticleRepository.query('SET foreign_key_checks = 0;')
    await xarticleRepository.remove(obj)
    // 开启外键约束检查，以保持表结构完整性
    await xarticleRepository.query('SET foreign_key_checks = 1;')


}).catch(error => console.log(error));
