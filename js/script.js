$(window).on("load",function(){
	$("#loading").fadeOut(3000);
	$("#loading").remove;
})
$("document").ready(function(){
	$(window).scroll(function(){
		if($(this).scrollTop() >= 700){
			$("nav").css("background-color","rgba(139, 1, 16,0.7)");
			$("#scrollArrow").show(500);
		}
		else{
			$("nav").css("background-color","rgba(10,0,0,0.1)");
			$("#scrollArrow").hide(500);
		}
	});
	$("#scrollArrow").click(function(){
		$("html,body").animate({
			scrollTop:0
		},1000);
	});
	$(window).scroll(function(){
		if($(this).scrollTop() >= 2000){
			var options = {
        useEasing: true, 
        useGrouping: true, 
        separator: '', 
        decimal: '.', 
      };
      var demo = new CountUp('hrs', 0, 12, 0, 1, options);
      if (!demo.error) {
        demo.start();
      } else {
        console.error(demo.error);
      }
      var demo = new CountUp('clients', 0, 500, 0, 1, options);
      if (!demo.error) {
        demo.start();
      } else {
        console.error(demo.error);
      }
      var demo = new CountUp('delivered', 500, 2000, 0, 1, options);
      if (!demo.error) {
        demo.start();
      } else {
        console.error(demo.error);
      }
      var demo = new CountUp('years', 500, 2015, 0, 1, options);
      if (!demo.error) {
        demo.start();
      } else {
        console.error(demo.error);
      }	
	}
	});
});