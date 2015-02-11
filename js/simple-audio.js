var LittleAudio=function(){
};

LittleAudio.prototype.init=function(params){
	// this.clear();
	this.play=false;
	this.audio=new Audio(params.url);
	this.element=params.element;
	this.callback=params.callback;
	var self=this;

	$(this.audio).on('loadeddata play pause',function(){
		self.callback(self.play);
	});
};

LittleAudio.prototype.clear=function(){
	if (this.audio) {
		this.audio.pause();
		$(this.audio).off('loadeddata play pause');
		$(this.element).off('click');
		this.element=null;
		this.audio=null;
	}
	console.log('music init');
};

LittleAudio.prototype.playOrPause=function(){
	console.log('click');
	if(!this.play){
		this.audio.play();
		console.log('play');
	}else{
		// this.audio.pause();
		console.log('pause');
	}
	this.play=!this.play;
};