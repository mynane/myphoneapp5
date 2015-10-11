	
	function setPageEvents(){
		// 设置图片滚动
		 var curIndex=0;
		autoChange = setInterval(function(){
			if(curIndex < $(".li_carousel").length-1){
				curIndex ++;
			}else{
				curIndex = 0;
			}
			changeTo(curIndex);
		},4000);

		//添加tap事件
		$('#dlBtn').tap(function(){
			location.href="login.html";
		})
		$('#goBack').tap(function(){
			location.href=document.referrer; //document.referrer 获取上一个页面的url
		})
		$('#nameText').on('keyup',function(){
				checkoutInput();
		})
		$('#pswText').on('keyup',function(){
				checkoutInput();
		})	
		
		$('#submitbtn').on('click',function(){
			cookieControll();
			window.open('index1.html');
		})
	}
	function changeTo(num){
		$(".li_carousel").animate({
			opacity:0,
		}, 2000).css('display','none').eq(num).css('display','block').animate({
			opacity:1,
		}, 2000);
		$(".cir").removeClass('current').eq(num).addClass('current');
	}

	function checkoutInput(){//alert($(#nameText).val().length);
		if($('#nameText').val().length>=7 && $('#pswText').val().length>=7){
			$('#submitbtn').attr('disabled',null).css({'backgroundColor':'#ff7a61','opacity':1,'cursor':'pointer'});
		}else{
			$('#submitbtn').attr('disabled',true).css({'backgroundColor':'#99CCCC','opacity':0.5,'cursor':'not-allowed'});

		}
		
	};

	function drawImg(_width,parentselect){
		var lgoodsH=parseInt(_width*0.39);
		var sgoodsH=parseInt(_width/2*1.098);
		var _olgoods=null;
		var _osgoods=null;
		var parentselect=$(parentselect);
		
		var lgoods1='<canvas id="lgoods1"></canvas><div class="box_desc"><p class="title">台湾黑糖沙琪玛</p><p class="describe">始于1983年的经典口味古早味</p><p class="price"><span class="price_number">19</span>元</p></div>';
		var sgoods1_1='<canvas id="sgoods1_1"></canvas><div class="box_desc"><p class="title">台湾黑糖沙琪玛</p><p class="describe">始于1983年的经典口味古早味</p><p class="price"><span class="price_number">19</span>元</p></div>';
		var sgoods1_2='<canvas id="sgoods1_2"></canvas><div class="box_desc"><p class="title">台湾黑糖沙琪玛</p><p class="describe">始于1983年的经典口味古早味</p><p class="price"><span class="price_number">19</span>元</p></div>';
		var sgoods1_3='<canvas id="sgoods1_3"></canvas><div class="box_desc"><p class="title">台湾黑糖沙琪玛</p><p class="describe">始于1983年的经典口味古早味</p><p class="price"><span class="price_number">19</span>元</p></div>';
		var sgoods1_4='<canvas id="sgoods1_4"></canvas><div class="box_desc"><p class="title">台湾黑糖沙琪玛</p><p class="describe">始于1983年的经典口味古早味</p><p class="price"><span class="price_number">19</span>元</p></div>';
		
		var lgoods2='<canvas id="lgoods2"></canvas><div class="box_desc"><p class="title">台湾黑糖沙琪玛</p><p class="describe">始于1983年的经典口味古早味</p><p class="price"><span class="price_number">19</span>元</p></div>';
		var sgoods2_1='<canvas id="sgoods2_1"></canvas><div class="box_desc"><p class="title">台湾黑糖沙琪玛</p><p class="describe">始于1983年的经典口味古早味</p><p class="price"><span class="price_number">19</span>元</p></div>';
		var sgoods2_2='<canvas id="sgoods2_2"></canvas><div class="box_desc"><p class="title">台湾黑糖沙琪玛</p><p class="describe">始于1983年的经典口味古早味</p><p class="price"><span class="price_number">19</span>元</p></div>';
		var sgoods2_3='<canvas id="sgoods2_3"></canvas><div class="box_desc"><p class="title">台湾黑糖沙琪玛</p><p class="describe">始于1983年的经典口味古早味</p><p class="price"><span class="price_number">19</span>元</p></div>';
		var sgoods2_4='<canvas id="sgoods2_4"></canvas><div class="box_desc"><p class="title">台湾黑糖沙琪玛</p><p class="describe">始于1983年的经典口味古早味</p><p class="price"><span class="price_number">19</span>元</p></div>';
		
		
		var arr=[
		{str:lgoods1,  id:'#lgoods1'  ,width:_width,height:lgoodsH, 	src:'http://img01.techan.com/wap/misc/pic/newindex_r1_c1.jpg'},
		{str:sgoods1_1,id:'#sgoods1_1',width:_width/2,height:sgoodsH,src:'http://img01.techan.com/wap/misc/pic/newindex_r2_c1.jpg'},
		{str:sgoods1_2,id:'#sgoods1_2',width:_width/2,height:sgoodsH,src:'http://img01.techan.com/wap/misc/pic/newindex_r2_c3.jpg'},
		{str:sgoods1_3,id:'#sgoods1_3',width:_width/2,height:sgoodsH,src:'http://img01.techan.com/wap/misc/pic/newindex_r3_c1.jpg'},
		{str:sgoods1_4,id:'#sgoods1_4',width:_width/2,height:sgoodsH,src:'http://img01.techan.com/wap/misc/pic/newindex_r3_c1.jpg'},
		{str:lgoods2,  id:'#lgoods2'  ,width:_width,height:lgoodsH, 	src:'http://img01.techan.com/wap/misc/pic/newindex_r5_c1.jpg'},
		{str:sgoods2_1,id:'#sgoods2_1',width:_width/2,height:sgoodsH,src:'http://img01.techan.com/wap/misc/pic/newindex_r6_c2.jpg'},
		{str:sgoods2_2,id:'#sgoods2_2',width:_width/2,height:sgoodsH,src:'http://img01.techan.com/wap/misc/pic/newindex_r6_c4.jpg'},
		{str:sgoods2_3,id:'#sgoods2_3',width:_width/2,height:sgoodsH,src:'http://img01.techan.com/wap/misc/pic/newindex_r7_c2.jpg'},
		{str:sgoods2_4,id:'#sgoods2_4',width:_width/2,height:sgoodsH,src:'http://img01.techan.com/wap/misc/pic/newindex_r7_c4.jpg'}];
		parentselect.each(function(index1){
			_olgoods=parentselect.eq(index1).find('.lGoods');
			_osgoods=parentselect.eq(index1).find('.sGoods');
			var a=5*index1;
			_olgoods.drawImg(arr[a].str,arr[a].id,arr[a].width,arr[a].height,arr[a].src);
			
			_osgoods.each(function(index){
			var b=index+a+1;
			_osgoods.eq(index).drawImg(arr[b].str,arr[b].id,arr[b].width,arr[b].height,arr[b].src);
		})

		})
	}
	

	function cookieControll(){
		var user=$('#nameText').val();
		var pass=$('#pswText').val();
		setCookie('username',user);
		setCookie('password',pass)
		// alert(getCookie('username')+'-'+getCookie('password'));

	}
	function setPageCookie(){
		if(getCookie('username')){
			$('#nameText').val(getCookie('username'));
		}else{
			$('#nameText').val('');
		}
		if(getCookie('password')){
			$('#pswText').val(getCookie('password'));
		}else{
			$('#pswText').val('');
		}
	}
	//JS操作cookies方法!
	//写cookies
	function setCookie(name,value)
	{
		var Days = 30;
		var exp = new Date();
		exp.setTime(exp.getTime() + Days*24*60*60*1000);
		document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();//escape 编码
	}
	function getCookie(name)
	{
		var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
		if(arr=document.cookie.match(reg))
		return unescape(arr[2]);
		else
		return null;
	}
