class ShareGuideScreen extends eui.Component implements eui.UIComponent {
	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}

	private static shared:ShareGuideScreen;
	public static getInstance(){
		if( !ShareGuideScreen.shared){
			ShareGuideScreen.shared = new ShareGuideScreen();
		}
		return ShareGuideScreen.shared;
	}
	protected childrenCreated():void
	{
		super.childrenCreated();
		this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,()=>{
			this.parent.removeChild(this);
		},this);
	}
	
}