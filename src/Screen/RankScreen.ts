class RankScreen extends eui.Component implements  eui.UIComponent {
	private rank_list_group:eui.Group;
	private rank_data;

	private first_name;
	private first_score;
	private first_avatar;

	private second_name;
	private second_score;
	private second_avatar;

	private third_name;
	private third_score;
	private third_avatar;

	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}

	private static shared:RankScreen;
	public static getInstance(){
		if( !RankScreen.shared){
			RankScreen.shared = new RankScreen();
		}
		return RankScreen.shared;
	}
	
	protected async childrenCreated():Promise<any>
	{
		super.childrenCreated();
		this.init();
		this.rank_data = await this.getRankData();
		let leveleIndex = 0;
		const levele = ['first','second','third'];
		for( let i = 0; i < 3; i++ ){
			if( this.rank_data[0] ){
				this[levele[leveleIndex] + '_name'].text = this.getChar(this.rank_data[0].nickname,10);
				this[levele[leveleIndex] + '_score'].text = this.rank_data[0].score;
				let imgLoader = new egret.ImageLoader();
				imgLoader.crossOrigin = "anonymous";// 跨域请求
				imgLoader.load(this.rank_data[0].avatar);// 去除链接中的转义字符        
				imgLoader.once(egret.Event.COMPLETE, (evt: egret.Event) => {
					if (evt.currentTarget.data) {
						egret.log("加载头像成功: " + evt.currentTarget.data);
						let texture = new egret.Texture();
						texture.bitmapData = evt.currentTarget.data;
						this[levele[leveleIndex] + '_avatar'].source = texture;
					}
				}, this);
				++leveleIndex;
				this.rank_data.shift();
			}
		}
		if( this.rank_data.length ){
			let rank = 3;
			this.rank_data.forEach((item,index)=>{
				this.rank_list_group.addChild( this.createRankListItem(item, ++rank) )
			})
		}
	}

	init(){
		// 垂直布局
		var vLayout:eui.VerticalLayout = new eui.VerticalLayout();
        vLayout.horizontalAlign = egret.HorizontalAlign.CENTER;
        vLayout.gap = 50;
		vLayout.paddingTop = 0;
		vLayout.paddingBottom = 50;
		this.rank_list_group.layout = vLayout;
	}

	public getChar(_str: string,_len: number): string {

		var _ba: egret.ByteArray = new egret.ByteArray;
		_ba.writeUTFBytes(_str);
		if(_ba.length < _len) return _str;
		_ba.position = 0;
		return _ba.readUTFBytes(_len) + "...";

	}
	
	createRankListItem(itemData,rank){
		console.log( 'create',itemData,rank )

		var item = new eui.Group();
		item.width = 500;
		item.height = 80;
		
		var hLayout:eui.HorizontalLayout = new eui.HorizontalLayout();

		var rankText = new eui.Label();
		rankText.textColor = 0x333333;
		rankText.text = rank < 10 ? `0${rank}` : rank;
		rankText.height = 80;
		rankText.size = 29;
		rankText.verticalAlign =  egret.VerticalAlign.MIDDLE;
		item.addChild(rankText);

		var avatarGroup = new eui.Group();
		var mask = new eui.Rect();
		mask.width = 90;
		mask.height = 90;
		mask.ellipseWidth = 90;
		mask.ellipseWidth = 90;
		avatarGroup.addChild(mask);
		var avatar = new eui.Image();
		let imgLoader = new egret.ImageLoader();
		imgLoader.crossOrigin = "anonymous";// 跨域请求
		imgLoader.load(itemData.avatar);// 去除链接中的转义字符        
		imgLoader.once(egret.Event.COMPLETE, (evt: egret.Event) => {
			if (evt.currentTarget.data) {
				egret.log("加载头像成功: " + evt.currentTarget.data);
				let texture = new egret.Texture();
				texture.bitmapData = evt.currentTarget.data;
				avatar.source = texture;
			}
		}, this);

		avatar.width = 90;
		avatar.height = 90;
		avatar.mask = mask;
		avatarGroup.addChild(avatar);

		var topGroup = new eui.Group();
		topGroup.width = 90;
		topGroup.height = 30;
		topGroup.x = 0;
		topGroup.y = -20;
		
		var top = new eui.Image();
		top.width = 90;
		top.height = 30;
		top.x = 0;
		top.y = 90;
		top.source = RES.getRes('t1');
		topGroup.addChild(top)
		
		avatarGroup.addChild(topGroup);

		avatarGroup.x = 50;
		item.addChild( avatarGroup );
		
		var name = new eui.Label();
		name.text = itemData.nickname;
		name.textColor = 0x333333;
		name.size = 25;
		name.x = 170;
		name.height = 80;
		name.verticalAlign =  egret.VerticalAlign.MIDDLE;
		item.addChild( name );

		var score = new eui.Label();
		score.text = itemData.score + '分';
		score.textColor = 0xFFC029;
		score.size = 29;
		score.width = 500;
		score.height = 80;
		score.verticalAlign =  egret.VerticalAlign.MIDDLE;
		score.x = 0;
		score.textAlign = egret.HorizontalAlign.RIGHT;
		item.addChild( score )

		return item;
	}

	getRankData(){
		return new Promise(reslove=>{
			var request = new egret.HttpRequest();
			request.responseType = egret.HttpResponseType.TEXT;
			//设置为 POST 请求
			request.open("http://315xbapi.sinmore.vip/api/ranking",egret.HttpMethod.GET);
			request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			request.send();

			request.addEventListener(egret.Event.COMPLETE,(event)=>{
				var request = <egret.HttpRequest>event.currentTarget;
				const data = JSON.parse( request.response );
				reslove( data.data );
			},this);
		})
		// request.addEventListener(egret.IOErrorEvent.IO_ERROR,this.onPostIOError,this);
		// request.addEventListener(egret.ProgressEvent.PROGRESS,this.onPostProgress,this);
	}
	
}