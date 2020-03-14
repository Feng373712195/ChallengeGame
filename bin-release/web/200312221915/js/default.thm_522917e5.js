window.skins=window.skins||{};
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","StartScreen":"resource/eui_skins/StartScreen.exml","GameScreen":"resource/eui_skins/GameScreen.exml","ResultScreen":"resource/eui_skins/ResultScreen.exml","RankScreen":"resource/eui_skins/RankScreen.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameScreen.exml'] = window.GameScreenSkin = (function (_super) {
	__extends(GameScreenSkin, _super);
	function GameScreenSkin() {
		_super.call(this);
		this.skinParts = ["game_bg","question_title","timeout","answer_button_01","answer_button_text_01","error_icon_player_01","error_icon_ai_01","right_icon_player_01","right_icon_ai_01","answer_button_group_01","answer_button_02","answer_button_text_02","error_icon_player_02","error_icon_ai_02","right_icon_player_02","right_icon_ai_02","answer_button_group_02","answer_button_03","answer_button_text_03","error_icon_player_03","error_icon_ai_03","right_icon_player_03","right_icon_ai_03","answer_button_group_03","answer_group","question_tipe","question_screen"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.game_bg_i(),this._Label1_i(),this._Group3_i(),this.question_screen_i()];
	}
	var _proto = GameScreenSkin.prototype;

	_proto.game_bg_i = function () {
		var t = new eui.Rect();
		this.game_bg = t;
		t.fillColor = 0xffb663;
		t.height = 1136;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "平安银行北京分行消费者权益保护中心";
		t.textColor = 0x796428;
		t.y = 1050;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 180;
		t.horizontalCenter = 0;
		t.width = 560;
		t.y = 0;
		t.elementsContent = [this._Group1_i(),this._Group2_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.height = 180;
		t.right = 0;
		t.top = 0;
		t.width = 100;
		t.elementsContent = [this._Rect1_i(),this._Label2_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 100;
		t.ellipseWidth = 100;
		t.fillColor = 0xffffff;
		t.height = 100;
		t.right = 0;
		t.strokeColor = 0x6679ec;
		t.strokeWeight = 5;
		t.width = 100;
		t.y = 25;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "碗里没有水";
		t.y = 140;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.height = 180;
		t.left = 0;
		t.top = 0;
		t.width = 100;
		t.elementsContent = [this._Rect2_i(),this._Label3_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 100;
		t.ellipseWidth = 100;
		t.fillAlpha = 1;
		t.fillColor = 0xffffff;
		t.height = 100;
		t.horizontalCenter = 0;
		t.strokeAlpha = 1;
		t.strokeColor = 0xed6f44;
		t.strokeWeight = 5;
		t.width = 100;
		t.y = 25;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "西瓜";
		t.y = 140;
		return t;
	};
	_proto.question_screen_i = function () {
		var t = new eui.Group();
		this.question_screen = t;
		t.anchorOffsetY = 0;
		t.height = 800;
		t.horizontalCenter = 0;
		t.width = 560;
		t.y = 220;
		t.elementsContent = [this._Rect3_i(),this.question_title_i(),this._Group4_i(),this.answer_group_i(),this.question_tipe_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xffffff;
		t.height = 700;
		t.horizontalCenter = 0;
		t.width = 560;
		t.y = 0;
		return t;
	};
	_proto.question_title_i = function () {
		var t = new eui.Label();
		this.question_title = t;
		t.alpha = 0;
		t.horizontalCenter = 0;
		t.lineSpacing = 10;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "";
		t.textColor = 0x4d4d4d;
		t.width = 500;
		t.x = 0;
		t.y = 94.3;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 200;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 200;
		t.x = 200.00000000000003;
		t.y = -99.14;
		t.elementsContent = [this._Rect4_i(),this.timeout_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 120;
		t.ellipseWidth = 120;
		t.fillColor = 0xffffff;
		t.height = 120;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeColor = 0xf6c24d;
		t.strokeWeight = 10;
		t.verticalCenter = 0;
		t.width = 120;
		return t;
	};
	_proto.timeout_i = function () {
		var t = new eui.Label();
		this.timeout = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 40;
		t.text = "10";
		t.textAlign = "center";
		t.textColor = 0xf6c24d;
		t.verticalCenter = 0;
		return t;
	};
	_proto.answer_group_i = function () {
		var t = new eui.Group();
		this.answer_group = t;
		t.alpha = 0;
		t.anchorOffsetY = 0;
		t.height = 324.24;
		t.width = 560;
		t.x = 0;
		t.y = 187.88;
		t.elementsContent = [this.answer_button_group_01_i(),this.answer_button_group_02_i(),this.answer_button_group_03_i()];
		return t;
	};
	_proto.answer_button_group_01_i = function () {
		var t = new eui.Group();
		this.answer_button_group_01 = t;
		t.alpha = 1;
		t.height = 80;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 500;
		t.y = 0;
		t.elementsContent = [this.answer_button_01_i(),this.answer_button_text_01_i(),this.error_icon_player_01_i(),this.error_icon_ai_01_i(),this.right_icon_player_01_i(),this.right_icon_ai_01_i()];
		return t;
	};
	_proto.answer_button_01_i = function () {
		var t = new eui.Rect();
		this.answer_button_01 = t;
		t.alpha = 1;
		t.anchorOffsetX = 250;
		t.anchorOffsetY = 40;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xffffff;
		t.height = 80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeColor = 0xcccccc;
		t.strokeWeight = 2;
		t.width = 500;
		t.x = 251.52;
		t.y = 39.39;
		return t;
	};
	_proto.answer_button_text_01_i = function () {
		var t = new eui.Label();
		this.answer_button_text_01 = t;
		t.horizontalCenter = 0;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.width = 440;
		return t;
	};
	_proto.error_icon_player_01_i = function () {
		var t = new eui.Group();
		this.error_icon_player_01 = t;
		t.alpha = 0;
		t.height = 35;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 35;
		t.x = -17.5;
		t.y = 145;
		t.elementsContent = [this._Rect5_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0xFC0000;
		t.height = 35;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 35;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.error_icon_ai_01_i = function () {
		var t = new eui.Group();
		this.error_icon_ai_01 = t;
		t.alpha = 0;
		t.height = 35;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 35;
		t.x = 482.5;
		t.y = 145;
		t.elementsContent = [this._Rect6_i()];
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0xFC0000;
		t.height = 35;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 35;
		t.y = 0;
		return t;
	};
	_proto.right_icon_player_01_i = function () {
		var t = new eui.Group();
		this.right_icon_player_01 = t;
		t.alpha = 0;
		t.height = 35;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 35;
		t.x = -17.5;
		t.y = 145;
		t.elementsContent = [this._Rect7_i()];
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0xA7FF05;
		t.height = 35;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 35;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.right_icon_ai_01_i = function () {
		var t = new eui.Group();
		this.right_icon_ai_01 = t;
		t.alpha = 0;
		t.height = 35;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 35;
		t.x = 482.5;
		t.y = 145;
		t.elementsContent = [this._Rect8_i()];
		return t;
	};
	_proto._Rect8_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0xA7FF05;
		t.height = 35;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 35;
		t.y = 0;
		return t;
	};
	_proto.answer_button_group_02_i = function () {
		var t = new eui.Group();
		this.answer_button_group_02 = t;
		t.height = 80;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 500;
		t.y = 120;
		t.elementsContent = [this.answer_button_02_i(),this.answer_button_text_02_i(),this.error_icon_player_02_i(),this.error_icon_ai_02_i(),this.right_icon_player_02_i(),this.right_icon_ai_02_i()];
		return t;
	};
	_proto.answer_button_02_i = function () {
		var t = new eui.Rect();
		this.answer_button_02 = t;
		t.alpha = 1;
		t.anchorOffsetX = 250;
		t.anchorOffsetY = 40;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xFFFFFF;
		t.height = 80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeColor = 0xCCCCCC;
		t.strokeWeight = 2;
		t.width = 500;
		t.x = 248.48;
		t.y = 39.39;
		return t;
	};
	_proto.answer_button_text_02_i = function () {
		var t = new eui.Label();
		this.answer_button_text_02 = t;
		t.horizontalCenter = 0;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.width = 440;
		return t;
	};
	_proto.error_icon_player_02_i = function () {
		var t = new eui.Group();
		this.error_icon_player_02 = t;
		t.alpha = 0;
		t.height = 35;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 35;
		t.x = -17.499999999999993;
		t.y = 23;
		t.elementsContent = [this._Rect9_i()];
		return t;
	};
	_proto._Rect9_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0xFC0000;
		t.height = 35;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 35;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.error_icon_ai_02_i = function () {
		var t = new eui.Group();
		this.error_icon_ai_02 = t;
		t.alpha = 0;
		t.height = 35;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 35;
		t.x = 482.5;
		t.y = 23;
		t.elementsContent = [this._Rect10_i()];
		return t;
	};
	_proto._Rect10_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0xFC0000;
		t.height = 35;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 35;
		t.y = 0;
		return t;
	};
	_proto.right_icon_player_02_i = function () {
		var t = new eui.Group();
		this.right_icon_player_02 = t;
		t.alpha = 0;
		t.height = 35;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 35;
		t.x = -17.499999999999993;
		t.y = 23;
		t.elementsContent = [this._Rect11_i()];
		return t;
	};
	_proto._Rect11_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0xa7ff05;
		t.height = 35;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 35;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.right_icon_ai_02_i = function () {
		var t = new eui.Group();
		this.right_icon_ai_02 = t;
		t.alpha = 0;
		t.height = 35;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 35;
		t.x = 482.5;
		t.y = 23;
		t.elementsContent = [this._Rect12_i()];
		return t;
	};
	_proto._Rect12_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0xA7FF05;
		t.height = 35;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 35;
		t.y = 0;
		return t;
	};
	_proto.answer_button_group_03_i = function () {
		var t = new eui.Group();
		this.answer_button_group_03 = t;
		t.height = 80;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 500;
		t.x = 3;
		t.y = 240;
		t.elementsContent = [this.answer_button_03_i(),this.answer_button_text_03_i(),this.error_icon_player_03_i(),this.error_icon_ai_03_i(),this.right_icon_player_03_i(),this.right_icon_ai_03_i()];
		return t;
	};
	_proto.answer_button_03_i = function () {
		var t = new eui.Rect();
		this.answer_button_03 = t;
		t.alpha = 1;
		t.anchorOffsetX = 250;
		t.anchorOffsetY = 40;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xFFFFFF;
		t.height = 80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeColor = 0xCCCCCC;
		t.strokeWeight = 2;
		t.width = 500;
		t.x = 248;
		t.y = 36;
		return t;
	};
	_proto.answer_button_text_03_i = function () {
		var t = new eui.Label();
		this.answer_button_text_03 = t;
		t.horizontalCenter = 0;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.width = 440;
		return t;
	};
	_proto.error_icon_player_03_i = function () {
		var t = new eui.Group();
		this.error_icon_player_03 = t;
		t.alpha = 0;
		t.height = 35;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 35;
		t.x = -17.5;
		t.y = -95.00000000000011;
		t.elementsContent = [this._Rect13_i()];
		return t;
	};
	_proto._Rect13_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0xFC0000;
		t.height = 35;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 35;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.error_icon_ai_03_i = function () {
		var t = new eui.Group();
		this.error_icon_ai_03 = t;
		t.alpha = 0;
		t.height = 35;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 35;
		t.x = 482.5;
		t.y = -95.00000000000011;
		t.elementsContent = [this._Rect14_i()];
		return t;
	};
	_proto._Rect14_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0xFC0000;
		t.height = 35;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 35;
		t.y = 0;
		return t;
	};
	_proto.right_icon_player_03_i = function () {
		var t = new eui.Group();
		this.right_icon_player_03 = t;
		t.alpha = 0;
		t.height = 35;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 35;
		t.x = -17.5;
		t.y = -95.00000000000011;
		t.elementsContent = [this._Rect15_i()];
		return t;
	};
	_proto._Rect15_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0xA7FF05;
		t.height = 35;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 35;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.right_icon_ai_03_i = function () {
		var t = new eui.Group();
		this.right_icon_ai_03 = t;
		t.alpha = 0;
		t.height = 35;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 35;
		t.x = 482.5;
		t.y = -95.00000000000011;
		t.elementsContent = [this._Rect16_i()];
		return t;
	};
	_proto._Rect16_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0xA7FF05;
		t.height = 35;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 35;
		t.y = 0;
		return t;
	};
	_proto.question_tipe_i = function () {
		var t = new eui.Label();
		this.question_tipe = t;
		t.alpha = 0;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xf6c24d;
		t.y = 567;
		return t;
	};
	return GameScreenSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RankScreen.exml'] = window.RankScreenSkin = (function (_super) {
	__extends(RankScreenSkin, _super);
	function RankScreenSkin() {
		_super.call(this);
		this.skinParts = ["user_avater_mask_01","user_avatar_group","user_avater_mask_02","user_avatar_group0","user_avater_mask_03","user_avatar_group1","rank_list_group"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this._Group7_i(),this._Scroller1_i()];
		
		eui.Binding.$bindProperties(this, ["user_avater_mask_01"],[0],this._Image1,"mask");
		eui.Binding.$bindProperties(this, ["user_avater_mask_02"],[0],this._Image2,"mask");
		eui.Binding.$bindProperties(this, ["user_avater_mask_03"],[0],this._Image3,"mask");
	}
	var _proto = RankScreenSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xfc6d02;
		t.height = 1136;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.height = 200;
		t.horizontalCenter = 0;
		t.width = 520;
		t.y = 94;
		t.elementsContent = [this._Group2_i(),this._Group4_i(),this._Group6_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.height = 200;
		t.left = 0;
		t.top = 0;
		t.width = 120;
		t.elementsContent = [this.user_avatar_group_i(),this._Group1_i(),this._Label2_i(),this._Label3_i()];
		return t;
	};
	_proto.user_avatar_group_i = function () {
		var t = new eui.Group();
		this.user_avatar_group = t;
		t.anchorOffsetX = 0;
		t.height = 100;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.y = 0;
		t.elementsContent = [this._Rect2_i(),this.user_avater_mask_01_i(),this._Image1_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 110;
		t.ellipseWidth = 110;
		t.height = 110;
		t.horizontalCenter = 0;
		t.width = 110;
		t.y = -5;
		return t;
	};
	_proto.user_avater_mask_01_i = function () {
		var t = new eui.Rect();
		this.user_avater_mask_01 = t;
		t.ellipseHeight = 100;
		t.ellipseWidth = 100;
		t.height = 100;
		t.horizontalCenter = 0;
		t.top = 0;
		t.width = 100;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_jpg";
		t.top = 0;
		t.width = 100;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 40;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 0;
		t.y = -40;
		t.elementsContent = [this._Rect3_i(),this._Label1_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.height = 40;
		t.width = 120;
		t.x = 2;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.text = "保消教授";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "何沙乐";
		t.textAlign = "center";
		t.width = 100;
		t.x = 10;
		t.y = 114.00000000000004;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bottom = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "1280分";
		t.textAlign = "center";
		t.width = 100;
		t.x = 10;
		t.y = 174;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.height = 200;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.width = 120;
		t.y = -94;
		t.elementsContent = [this.user_avatar_group0_i(),this._Group3_i(),this._Label5_i(),this._Label6_i()];
		return t;
	};
	_proto.user_avatar_group0_i = function () {
		var t = new eui.Group();
		this.user_avatar_group0 = t;
		t.anchorOffsetX = 0;
		t.height = 100;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.y = 0;
		t.elementsContent = [this._Rect4_i(),this.user_avater_mask_02_i(),this._Image2_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 110;
		t.ellipseWidth = 110;
		t.height = 110;
		t.horizontalCenter = 0;
		t.width = 110;
		t.y = -5;
		return t;
	};
	_proto.user_avater_mask_02_i = function () {
		var t = new eui.Rect();
		this.user_avater_mask_02 = t;
		t.ellipseHeight = 100;
		t.ellipseWidth = 100;
		t.height = 100;
		t.horizontalCenter = 0;
		t.top = 0;
		t.width = 100;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_jpg";
		t.top = 0;
		t.width = 100;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 40;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 0;
		t.y = -40;
		t.elementsContent = [this._Rect5_i(),this._Label4_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.height = 40;
		t.width = 120;
		t.x = 2;
		t.y = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.text = "保消专家";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "何沙乐";
		t.textAlign = "center";
		t.width = 100;
		t.x = 10;
		t.y = 114.00000000000004;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.bottom = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "1280分";
		t.textAlign = "center";
		t.width = 100;
		t.x = 10;
		t.y = 174;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.height = 200;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 120;
		t.elementsContent = [this.user_avatar_group1_i(),this._Group5_i(),this._Label8_i(),this._Label9_i()];
		return t;
	};
	_proto.user_avatar_group1_i = function () {
		var t = new eui.Group();
		this.user_avatar_group1 = t;
		t.anchorOffsetX = 0;
		t.height = 100;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.y = 0;
		t.elementsContent = [this._Rect6_i(),this.user_avater_mask_03_i(),this._Image3_i()];
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 110;
		t.ellipseWidth = 110;
		t.height = 110;
		t.horizontalCenter = 0;
		t.width = 110;
		t.y = -5;
		return t;
	};
	_proto.user_avater_mask_03_i = function () {
		var t = new eui.Rect();
		this.user_avater_mask_03 = t;
		t.ellipseHeight = 100;
		t.ellipseWidth = 100;
		t.height = 100;
		t.horizontalCenter = 0;
		t.top = 0;
		t.width = 100;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		this._Image3 = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_jpg";
		t.top = 0;
		t.width = 100;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 40;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = 0;
		t.y = -40;
		t.elementsContent = [this._Rect7_i(),this._Label7_i()];
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.height = 40;
		t.width = 120;
		t.x = 2;
		t.y = 0;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.text = "保消王者";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "何沙乐";
		t.textAlign = "center";
		t.width = 100;
		t.x = 10;
		t.y = 114.00000000000004;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.bottom = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "1280分";
		t.textAlign = "center";
		t.width = 100;
		t.x = 10;
		t.y = 174;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 500;
		t.horizontalCenter = 0;
		t.verticalCenter = 30;
		t.width = 560;
		t.viewport = this.rank_list_group_i();
		return t;
	};
	_proto.rank_list_group_i = function () {
		var t = new eui.Group();
		this.rank_list_group = t;
		return t;
	};
	return RankScreenSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ResultScreen.exml'] = window.ResultScreenSkin = (function (_super) {
	__extends(ResultScreenSkin, _super);
	function ResultScreenSkin() {
		_super.call(this);
		this.skinParts = ["userIconMask","user_icon","user_name","user_group","result_text","again_btn"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this._Group2_i(),this._Group4_i()];
		
		eui.Binding.$bindProperties(this, ["userIconMask"],[0],this._Image2,"mask");
	}
	var _proto = ResultScreenSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xf7c65c;
		t.height = 1136;
		t.width = 640;
		t.x = -3.03;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 700;
		t.horizontalCenter = 0;
		t.width = 560;
		t.y = 100;
		t.elementsContent = [this._Group1_i(),this.user_group_i(),this.result_text_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 700;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.width = 560;
		t.x = -40;
		t.y = -100;
		t.elementsContent = [this._Rect2_i(),this._Image1_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xfcfcfc;
		t.height = 700;
		t.left = 0;
		t.top = 0;
		t.width = 560;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 370.67;
		t.horizontalCenter = 0;
		t.source = "xiaoan_png";
		t.width = 243.88;
		t.y = 299.03;
		return t;
	};
	_proto.user_group_i = function () {
		var t = new eui.Group();
		this.user_group = t;
		t.height = 120;
		t.horizontalCenter = 0;
		t.width = 200;
		t.y = 0;
		t.elementsContent = [this.user_icon_i(),this.user_name_i()];
		return t;
	};
	_proto.user_icon_i = function () {
		var t = new eui.Group();
		this.user_icon = t;
		t.height = 120;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 120;
		t.x = -28;
		t.y = -60;
		t.elementsContent = [this._Rect3_i(),this.userIconMask_i(),this._Image2_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 130;
		t.ellipseWidth = 130;
		t.fillColor = 0xfcae05;
		t.height = 130;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 130;
		return t;
	};
	_proto.userIconMask_i = function () {
		var t = new eui.Rect();
		this.userIconMask = t;
		t.ellipseHeight = 120;
		t.ellipseWidth = 120;
		t.height = 120;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeColor = 0xf96c02;
		t.strokeWeight = 5;
		t.width = 120;
		t.x = 68;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.height = 120;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_jpg";
		t.width = 120;
		t.x = 68;
		t.y = 0;
		return t;
	};
	_proto.user_name_i = function () {
		var t = new eui.Label();
		this.user_name = t;
		t.bottom = 0;
		t.text = "碗里没有水";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 200;
		t.x = 6;
		return t;
	};
	_proto.result_text_i = function () {
		var t = new eui.Group();
		this.result_text = t;
		t.anchorOffsetY = 0;
		t.height = 93.94;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 480;
		t.y = 180;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 200;
		t.horizontalCenter = 0;
		t.width = 560;
		t.y = 857.94;
		t.elementsContent = [this.again_btn_i(),this._Group3_i()];
		return t;
	};
	_proto.again_btn_i = function () {
		var t = new eui.Group();
		this.again_btn = t;
		t.anchorOffsetY = 0;
		t.height = 63.64;
		t.width = 200;
		t.x = 51;
		t.y = 51;
		t.elementsContent = [this._Label1_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "在玩一次";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 63.64;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 200;
		t.x = 286;
		t.y = 51;
		t.elementsContent = [this._Label2_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "分享好友";
		t.verticalCenter = 0;
		return t;
	};
	return ResultScreenSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/StartScreen.exml'] = window.StartScreenSkin = (function (_super) {
	__extends(StartScreenSkin, _super);
	function StartScreenSkin() {
		_super.call(this);
		this.skinParts = ["start_bg","start_btn","rank_btn","invitation_btn","music_btn"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.start_bg_i(),this._Group1_i(),this.music_btn_i()];
	}
	var _proto = StartScreenSkin.prototype;

	_proto.start_bg_i = function () {
		var t = new eui.Image();
		this.start_bg = t;
		t.anchorOffsetX = 0;
		t.height = 1136;
		t.source = "";
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 272;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 366;
		t.elementsContent = [this.start_btn_i(),this.rank_btn_i(),this.invitation_btn_i()];
		return t;
	};
	_proto.start_btn_i = function () {
		var t = new eui.Label();
		this.start_btn = t;
		t.text = "开始游戏";
		t.textColor = 0x050505;
		t.x = 123;
		t.y = 170;
		return t;
	};
	_proto.rank_btn_i = function () {
		var t = new eui.Label();
		this.rank_btn = t;
		t.text = "游戏排行";
		t.textColor = 0x020202;
		t.x = 201;
		t.y = 30;
		return t;
	};
	_proto.invitation_btn_i = function () {
		var t = new eui.Label();
		this.invitation_btn = t;
		t.text = "分享好友";
		t.textColor = 0x050404;
		t.x = 23;
		t.y = 30;
		return t;
	};
	_proto.music_btn_i = function () {
		var t = new eui.Label();
		this.music_btn = t;
		t.text = "音乐";
		t.textColor = 0x020202;
		t.x = 466;
		t.y = 90;
		return t;
	};
	return StartScreenSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);