var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var isMusic = true;
var SoundManger = (function () {
    function SoundManger() {
        SoundManger.errorSound = this.loadSound('resource/sound/error.mp3');
        if (egret.localStorage.getItem('music_play')) {
            isMusic = egret.localStorage.getItem('music_play') == '1' ? true : false;
        }
        else {
            egret.localStorage.setItem('music_play', '1');
        }
    }
    Object.defineProperty(SoundManger, "isMusic", {
        get: function () {
            return isMusic;
        },
        set: function (value) {
            isMusic = value;
            egret.localStorage.setItem('music_play', value ? '1' : '0');
        },
        enumerable: true,
        configurable: true
    });
    SoundManger.prototype.loadSound = function (url) {
        var sound = new egret.Sound();
        sound.addEventListener(egret.IOErrorEvent.IO_ERROR, function loadError(event) {
            console.log("loaded error!");
        }, this);
        sound.load(url);
        return sound;
    };
    SoundManger.playErrorSound = function () {
        if (SoundManger.isMusic) {
            this.errorSound.play(0, 1);
        }
    };
    return SoundManger;
}());
__reflect(SoundManger.prototype, "SoundManger");
