let isMusic  = true;

class SoundManger{
    public static get isMusic() {
        return isMusic;
    }
    public static set isMusic(value) {
        isMusic = value;
        egret.localStorage.setItem('music_play',value ? '1' : '0');
    }
    private static errorSound:egret.Sound;

     constructor(){
        SoundManger.errorSound = this.loadSound('resource/sound/error.mp3');
        if( egret.localStorage.getItem('music_play') ){
            isMusic = egret.localStorage.getItem('music_play') == '1' ? true : false;
        }else{
            egret.localStorage.setItem('music_play','1')
        }
    }
    private loadSound(url){
        var sound:egret.Sound = new egret.Sound();
        sound.addEventListener(egret.IOErrorEvent.IO_ERROR, function loadError(event:egret.IOErrorEvent) {
            console.log("loaded error!");
        }, this);
        sound.load(url);
        return sound;
    }

    public static playErrorSound(){
        if( SoundManger.isMusic ){
            this.errorSound.play(0,1);
        }
    }
}