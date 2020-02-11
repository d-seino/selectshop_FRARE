/* instagram連携 */
$(function(){
	var $container1 = $("#insta");
	var html1 = "";
	var $container2 = $("#insta_slick");
	var html2 = "";
	var num=0;
	
	$.ajax({
		url: "instagram.php",//PHPファイルURL
		type:"POST",
		dataType: "json"
	}).done(function(data){
		//通信成功時の処理
		
		$.each(data.business_discovery.media.data,function(i,item){
			var imgurl = item.media_url; //画像のURLを取得
			var link = item.permalink; //リンクを取得
			if(imgurl.indexOf('.jpg') !== -1 || imgurl.indexOf('.png') !== -1 || imgurl .indexOf('.gif') !== -1){
				if(num < 8){
					html1 += "<li><a href='" + link + "' target='_blank'><img src='" + imgurl + "'></a></li>";
					
					html2 += "<div><a href='" + link + "' target='_blank'><img src='" + imgurl + "'></a></div>";
					
					num++;
				}
			}
		});
		
	}).fail(function(){
		//通信失敗時の処理
		html = "<li>画像を取得できません。</li>";
	}).always(function(){
		//通信完了時の処理
		$container1.html(html1);
		$container2.html(html2);
		
		$('#insta_slick').slick({
        autoplay: true,
        autoplaySpeed: 6000,
        speed: 800,
        infinite: true,
        fade:false,
        arrows: true,
        dots: true,
        pauseOnHover: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: 'linear',
        swipe:false,
        centerMode: true
		});
	});
});


/* メニュー表示制御 */
$(function() {
	$('#btnmenu').click(function(e) {
		$('#btnmenu span').toggleClass('close');
		$('header nav ul').slideToggle('normal');
	});
	
	$('header nav ul li a').click(function(e) {
		if($('#btnmenu').css('display')=="block"){
			$('#btnmenu span').removeClass('close');
			$('header nav ul').slideToggle('normal');
		}
	});
	
	$('#wrapper').click(function(e) {
		if($('#btnmenu').css('display')=="block" && $('header nav ul').css('display')=="block"){
			if(!$(e.target).closest('nav').length) {
				$('#btnmenu span').removeClass('close');
				$('header nav ul').slideToggle('normal');
			}
		}
	});
});


$(window).resize(function() {
	if(navigator.userAgent.indexOf('iPhone')>0 || navigator.userAgent.indexOf('iPad')>0 || navigator.userAgent.indexOf('iPod')>0 || navigator.userAgent.indexOf('Android')>0 || navigator.userAgent.indexOf('Windows Phone')>0)return;
	if($('#btnmenu').css('display')=="none"){
		$('header nav ul').show();
		$('#btnmenu span').removeClass('close');
	}else{
		$('header nav ul').hide();
		$('#btnmenu span').removeClass('close');
	}
});


/* スクロール関連制御 */
$(function() {
	$(window).on('load scroll', function(){
		var scr_count = $(document).scrollTop();
		
		if(scr_count>0){
			$('header').addClass('shadow');
		}else{
			$('header').removeClass('shadow');
		}
		
		if(scr_count>200){
			$('#page_top').css('right','30px');
		}else{
			$('#page_top').css('right','-50px');
		}
	});
});


