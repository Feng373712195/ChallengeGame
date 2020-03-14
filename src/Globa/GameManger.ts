const RANDOM_QUESTION_NUM = 6;

interface userInfoInterface{
    // 用户名称
    name:string,
    // 用户头像
    avater:string,
    // id
    id:'',
    // token
    token:string,
    // 是否已经授权
    isAuthor:boolean,
}

interface resultUserInfoface{
     id:string,
     nickname:string,
     avatar:string
}

interface resultData{
    error_code:number,
    error_msg:number,
    data:{
        oneself:resultUserInfoface,
        rival:resultUserInfoface
    }
}

interface wxInterface{
    ready:any,
    onMenuShareAppMessage:any,
    onMenuShareTimeline:any
}

// 用户数据
class UserData{
    public userInfo = {
        // 用户名称
        name:'',
        // 用户头像
        avater:'',
        // token
        token:'',
        // 是否已经授权
        isAuthor:false,
        // 用户id
        id:''
    }
    // 用户当前选择的答案
    public select = '';
    // 游戏分数
    public score = 0;
}

// 题目数据
class QuestionData{
    // 问题题目
    title:string = ''
    // 正确答案
    right:string = ''
    // 题目范围
    range:string = ''
    // 题目难度
    level:string = ''
    // 答案选项
    options:Array<string> = []
}

class GameManger {
    // 问题数据
    public static questions:Array<QuestionData> = [];
    // 存储随机数
    public static randomNums:Array<number> = []
    // 随机题目
    public static randomQuestions:Array<QuestionData> = [];
    // 游戏时间
    public static gameTime:Number = 10;
    // 玩家信息
    public static playerData:UserData = new UserData();
    // AI信息
    public static AIData:UserData = new UserData();
    // 游戏中 当前问题索引
    public static currentQuestionIndex:number = 0;

     constructor(){

        // 设置默认AI信息
        this.setDefultAIinfo();

        const token = Uilt.getOption('token') || egret.localStorage.getItem('token');
        if( token ){
            egret.localStorage.setItem('token',token);
            GameManger.playerData.userInfo.isAuthor = true;

            // 分享的人的id
            const shareId = Uilt.getOption('share_id');
            this.getUserInfo(token,shareId).then(res=>{
                const oneself = res.data.oneself;
                GameManger.playerData.userInfo.name = oneself.nickname;
                GameManger.playerData.userInfo.avater = oneself.avatar;
                GameManger.playerData.userInfo.id = oneself.id;
                if( shareId ){
                    const rival = res.data.oneself;
                    GameManger.playerData.userInfo.name = rival.nickname;
                    GameManger.playerData.userInfo.avater = rival.avatar;
                    GameManger.AIData.userInfo.id = rival.id;
                }
            })
            .catch(err=>{
                console.error(err)
                alert('获取用户信息失败');
            })
        }

        GameManger.questions = RES.getRes('questions_json');
        let i = 0;
        while(i != GameManger.questions.length){
            GameManger.randomNums.push(i++);
        }
    }

    private setDefultAIinfo(){
        GameManger.AIData.userInfo.name = '小安';
        GameManger.AIData.userInfo.avater = 'https://h5.kkts.kidskiss.com.cn/element/RcPXwxAew3uKe6rAqBH3MNpFAFNVAyesJWBNcBxT.png'
    }

    private getUserInfo(token,rival_id):Promise<resultData>{
        return new Promise( (resolve,reject)=>{
			var request = new egret.HttpRequest();
			request.responseType = egret.HttpResponseType.TEXT;
			//设置为 POST 请求
			request.open(
                `http://315xbapi.sinmore.vip/api/pkTop?token=${token}${rival_id ? '&rival_id=' + rival_id : '' }`
                ,egret.HttpMethod.GET);
			request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			request.send();
			request.addEventListener(egret.Event.COMPLETE,(event)=>{
				var request = <egret.HttpRequest>event.currentTarget;
				var data = <resultData>JSON.parse( request.response );
                console.log(data)
                if( data.error_code == 0 ){
                    resolve(data);
                }else{
                    reject(data.error_msg)
                }
			},this);
		})
    }
    public static resetGameState(){
        GameManger.currentQuestionIndex = 0;
        GameManger.playerData.score = 0;
        this.resetSelectedState();
    }

    public static resetSelectedState(){
        GameManger.AIData.select = ''
        GameManger.playerData.select = ''
    }

    public static getRandoQuestions(){
        // 随机拿取题目
        const tem = [];
        // 这么写是为了不随机拿到重复的题目
        for(let i = 0 ; i < RANDOM_QUESTION_NUM; i++){
            const randomNum =  Math.floor( Math.random() * (GameManger.randomNums.length - 1) );
            const randomIndex = GameManger.randomNums[randomNum];
            tem.push( GameManger.randomNums.splice(randomNum ,1)[0] );
            GameManger.randomQuestions.push( GameManger.questions[randomIndex] );
            
        }
        // 恢复随机数索引
        tem.sort().forEach((val)=>{
            GameManger.randomNums.splice(val,0,val)
        })
    }
    // 设置AI自动作答
    public static  AIControl(cb){
        const that = this;
        const randomAnswer = Math.floor( Math.random() * 3 );
        // 6 秒内作答 
        const randomSelectTime = Math.floor( Math.random() * 6  );

        const timer = setTimeout(async ()=>{
            cb.call(that, randomAnswer, 'ai');
            clearTimeout(timer);
        },randomSelectTime * 1000)
    }
    // 计算得分
    public static recordScore(time){
        // 此题得分百分比
        // 最后一题300分 其他200分
        const resultPercentage = (GameManger.currentQuestionIndex == 5 ? 300 : 200) / 10
        // 最后一题
        const replyTime = 10 - time;
        console.log( replyTime , 'replyTime' )
        if(  replyTime <= 2 ){
            GameManger.playerData.score += resultPercentage * 10
        }else if( replyTime <= 4){
            GameManger.playerData.score += resultPercentage * 8
        }else if( replyTime <= 6 ){
            GameManger.playerData.score += resultPercentage * 6
        }else if( replyTime <= 4 ){
            GameManger.playerData.score += resultPercentage * 4
        }else{
            GameManger.playerData.score += resultPercentage * 2
        }
        console.log( GameManger.playerData.score );
    }
}