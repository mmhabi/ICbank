$(function(){ //目录
	$('.top02_li>li:nth-child(n+2)').each(function(i){ 
		$(this).bind('mouseover',function(){
			$('.float_div>div').eq(i).css('display','block');
			$('.float_div>div').eq(i).siblings().css('display','none');
			$(this).css({'background':'#c8000a'});
			$(this).siblings().css({'background':''});
		});
	})
	$('.top02_li>li:first').hover(function(){
		$('.float_div>div').css('display','none');
		$('.top02_li>li').css({'background':'','color': '#000'});
	})
	
	
	//顶层轮播///////////////////////////////////////////////////////////
	var timer=null;
	var index=1;
	timer=setInterval(lunbo,2000);
		//console.log(index);
    $('#lunboqi li img,#btn_lunbo>div').hover(function(){
    	clearInterval(timer);
    },function(){
    	timer=setInterval(lunbo,2000);
    });
	
	function lunbo(){
		index++;
		if(index>7){
			index=1;
			
		}
		$('#lunboqi li img').attr('src','images/lunbo_'+index+'.jpg');	
		$('#btn_lunbo>div').eq(index-1).css('background','#ccc');
		$('#btn_lunbo>div').eq(index-1).siblings().css({'background':'#000','opacity':'0.4'});
	}
	
	$('#btn_lunbo>div').each(function(i){
		$(this).click(function(){
			$('#lunboqi li img').attr('src','images/lunbo_'+(i+1)+'.jpg');	
			$(this).css('background','#ccc');
			$(this).siblings().css({'background':'#000','opacity':'0.4'});
		})
	});
	
	
			//点击小图标切换图片
	$('.quick_img>li>img').each(function(i){
		$(this).hover(function(){
			$(this).attr('src','images/quick_over_'+(i+1)+'.gif');
			$('.quick_img>li p').eq(i).css('color','#c8000a');
		},function(){
			$(this).attr('src','images/quick_'+(i+1)+'.gif');
			$('.quick_img>li p').eq(i).css('color','#000');
		});
	});
	$('.quick_img2>li>img').each(function(i){
		$(this).hover(function(){
			$(this).attr('src','images/jinrong_over_'+(i+1)+'.gif');
			$('.quick_img>li p').eq(i).css('color','#c8000a');
		},function(){
			$(this).attr('src','images/jinrong_'+(i+1)+'.gif');
			$('.quick_img>li p').eq(i).css('color','#000');
		});
	});
	$('.quick>li').eq(0).hover(function(){
		$(this).siblings().css({'font-weight':100,'border':'none'});
		$(this).css({'font-weight':900,'border-bottom': '2px solid #c8000a'});
		$('.quick_img').css('display','block');
		$('.quick_img2').css('display','none');

	});
	$('.quick>li').eq(1).hover(function(){
		$(this).siblings().css({'font-weight':100,'border':'none'});
		$(this).css({'font-weight':900,'border-bottom': '2px solid #c8000a'});
		$('.quick_img').css('display','none');
		$('.quick_img2').css('display','block');
	});

	 //优惠活动和新品推荐
	$('#quick1>li').eq(0).hover(function(){
		$(this).siblings().css({'font-weight':100,'border':'none'});
		$(this).css({'font-weight':900,'border-bottom': '2px solid #c8000a'});
		$('.body02_right_txt2').css('display','none');
		$('.body02_right_txt,.body02_right_li').css('display','block');

	});
	$('#quick1>li').eq(1).hover(function(){
		$(this).siblings().css({'font-weight':100,'border':'none'});
		$(this).css({'font-weight':900,'border-bottom': '2px solid #c8000a'});
		$('.body02_right_txt2').css('display','block');
		$('.body02_right_txt,.body02_right_li').css('display','none');
	});

	//中间轮播器
	
	var screen_width = document.body.clientWidth ;//判断屏幕宽度，手机版屏蔽
    var screen_height = $(window).height();//判断屏幕宽度，手机版屏蔽
	
	var img=document.getElementById('img');
	var img_width=img.width;
    var i=0;
   // alert(img_width);
	$('.body03>div').eq(0).click(function(){
		//alert(i);
		i--;
		if(i<-2)
		{
			i=0;
			$('.body03_img>ul').css('left','0px');
		}
		else
		{
			$('.body03_img>ul').animate({
				left:i*(img_width+10)
			},500);
	    }	    
	});
	$('.body03>div').eq(2).click(function(){
		i++;
		if(i>0)
		{
			i=-2;
			$('.body03_img>ul').css('left',-2*img_width-20);
		}
		else
		{
			$('.body03_img>ul').animate({
				left:i*(img_width+10)
			},500);
	    }

	});

	//业务产品
	$('.body04 ul li a').each(function(i){
		$(this).hover(function(){
			$('.body04 ul li a').css({'color':'#000','border':'none'});
		    $(this).css({'color':'#c8000a','border-bottom': '2px solid #c8000a'});
			$('.body04_img').eq(i).css('display','block');
			$('.body04_img').eq(i).siblings().css('display','none');
			$('.body04_title').css('display','block');
		});
	});
	
	$('.float_over ul li a').eq(1).hover(function(){
		$('.licai').css('display','block');
	},function(){
		$('.licai').css('display','none');
	});
	$('.float_over ul li a').eq(2).hover(function(){
		$('.jijin').css('display','block');
	},function(){
		$('.jijin').css('display','none');
	});
	$('.float_over ul li a').eq(6).hover(function(){
		$('.baoxian').css('display','block');
	},function(){
		$('.baoxian').css('display','none');
	});
	
	//固定窗口
	$('.float_img').hover(function(){
		$(this).animate({
			right:0
		},500)
	},function(){
		$(this).animate({
			right:-200
		},500)
	});
	$('#float_img02').hover(function(){
		$(this).attr('src','images/float_img03_over.jpg');
		$(this).css('bottom','100px');
	},function(){
		$(this).attr('src','images/float_img03.jpg');
		$(this).css('bottom','140px');
	});
	
	
});
