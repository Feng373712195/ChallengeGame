class StartScreen extends eui.Component implements  eui.UIComponent {
	
	public start_bg:eui.Image;
	public rank_btn:eui.Label;
	public start_btn:eui.Label;
	public music_btn:eui.Image;
	public share_btn:eui.Rect;

	private closeMusicIcon:any;
	private playMusicIcon:any;
	
	private static shared:StartScreen;
	public static getInstance(){
		if( !StartScreen.shared){
			StartScreen.shared = new StartScreen();
		}
		return StartScreen.shared;
	}

	public constructor() {
		super();
	}
	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}
	protected childrenCreated():void
	{
		super.childrenCreated();
		this.init();
	}
	private init(){

		StartScreen.getInstance();

		this.playMusicIcon = RES.getRes('music_open'),
		this.closeMusicIcon = RES.getRes('music_close')

		if( SoundManger.isMusic ){
			this.music_btn.source = SoundManger.isMusic ? 
				this.playMusicIcon : 
				this.closeMusicIcon; 
		}	

		this.start_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.startGame,this)
		this.rank_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.showRank,this)
		this.music_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.controlMusic,this)
		this.share_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.showShareMask,this)
	}
	controlMusic(){
		console.log( SoundManger.isMusic,'isMusic' );
		SoundManger.isMusic = !SoundManger.isMusic;
		this.music_btn.source = SoundManger.isMusic ? this.playMusicIcon : this.closeMusicIcon; 
	}
	startGame(){
		// if( !GameManger.playerData.userInfo.isAuthor ){
		// 	window.location.href = `http://315xbapi.sinmore.vip/api/oAuthLogin?url_path=${encodeURIComponent(window.location.href)}`
		// 	return;	
		// }
		let parent:egret.DisplayObjectContainer = this.parent;
		parent.removeChild(this);
		parent.addChild(GameScreen.getInstance());
		// parent.addChild( ResultScreen.getInstance() );
	}
	showRank(){
		let parent:egret.DisplayObjectContainer = this.parent;
		parent.removeChild(this);
		parent.addChild(RankScreen.getInstance());
	}
	showShareMask(){
		let parent:egret.DisplayObjectContainer = this.parent;
		parent.addChildAt(ShareGuideScreen.getInstance(),999);
	}
}