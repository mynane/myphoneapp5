$.fn.drawImg=function(str,cvsId,cvsW,cvsH,imgSrc){
		var teml=str;
		this.html(teml);
		var cvsid=$(cvsId)[0];
		var cxt=cvsid.getContext('2d');
		var img=new Image();
		img.width=cvsW;
		img.height=cvsH;
		img.onload=function(){
			cvsid.height=cvsH;
			cvsid.width=cvsW;
			cxt.drawImage(img,0,0,img.width,img.height);
			
		}
		img.src=imgSrc;
		
}