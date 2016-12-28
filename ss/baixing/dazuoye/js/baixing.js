	//固定列表
	var hdd=document.getElementById("hdd");
		function om(){
			
			var sT=document.body.scrollTop||document.documentElement.scrollTop;
			
				if(sT>150){
				hdd.style.display="block"
				
			}
			else{
				hdd.style.display="none";
				
			}
		}
	
	window.onscroll=om;
//				
//			
//			
//		
//		
//      
//		
//	//三级列表
		  var lis=document.getElementById("qs");
		  lis.onmousemove=function(){
		  	var xll=document.getElementById("xll")
		  	xll.style.display="block";
		  }
		  lis.onmouseout=function(){
		  	var xll=document.getElementById("xll")
		  	xll.style.display="none";
		  }
		  var ulli=document.getElementById("ulli");
		  
		  
		 ulli.onmousemove=function(){
		  	var ulliul=document.getElementById("ulliul")
		  	ulliul.style.display="block";
		  }
		  ulli.onmouseout=function(){
		  	var ulliul=document.getElementById("ulliul")
		  	ulliul.style.display="none";
		  }
//		 
//// 轮播
	var lb=document.getElementsByClassName("lb");
	var lb1=document.getElementById("lb1");
	var pic=lb1.getElementsByTagName("img");
	var sp=document.getElementById("lbs1").getElementsByTagName("span");
	var index=3;
	    fadeOut(pic[0]);
		fadeOut(pic[1]);
		fadeOut(pic[2]);
		lb1.onmouseover=function(){
		  clearInterval(b);
		  
		}
		lb1.onmouseout=function(){
			b=setInterval("nt()",4000);
			 
		}
	 	function nt(){
					fadeOut(pic[index]);
					index++;
					if(index>=pic.length){
						index=0;
					}
					fadeIn(pic[index]);
					showbotton();
				}
		
		var b=setInterval("nt()",4000);
		
		function fadeIn(elem){
						for(var i=0;i<=100;i++){
							(function(){
							var po=i;
							setTimeout(function(){
								setOpaticy(elem,po)
							},po*20)
						})();
						}
				}
			
		function fadeOut(elem){
			for (var i=0;i<=100;i++) {
				(function(){
					var po=i;
					setTimeout(function(){
						setOpaticy(elem,po)
					},(100-po)*20)
				})()
				
			}
		}
					function showbotton(){
				 	for(var j=0;j<sp.length;j++){
				 		sp[j].className="";
				 	}
				 	sp[index].className="on";
				 }	
			for (var k=0;k<sp.length;k++) {
				sp[k].onclick=function(){
					if(this.className=="on"){//优化  如果点击是当前的小圆点  不再执行下方的语句
					return;
					}
					var newindex=this.getAttribute("index");
						fadeIn(pic[newindex]);
						fadeOut(pic[index]);
						index=newindex;
						showbotton();
						}
				
			}
		function setOpaticy(elem,level){
			if(elem.filters){
				elem.style.filter="alpha(opacity="+level+")";
				elem.style.zoom=1;
			}
			else {
				elem.style.opacity=level/100;
			}
		}
		//上下图片
		var x=document.getElementById("isul");
		var isli=document.getElementById("isli");
		
		isli.innerHTML+=isli.innerHTML;	
		var timer,t
		x.onmouseover=function(){
			clearInterval(timer);
			clearTimeout(t)
		}
		x.onmouseout=function(){
			timer=setInterval(scrollT,10);
		}
		
		function scrollT(){
		
		
						
								if(x.scrollTop>=isli.scrollHeight/2){
										x.scrollTop=0;
									}else{
										x.scrollTop++;
									}
								
										if(x.scrollTop%360==0){
												clearInterval(timer);
												t=setTimeout(startMove,1000);	
											}
			}
		function startMove(){
			x.scrollTop++;
			 timer=setInterval(scrollT,10);
		}
		startMove();
          
		 //左右图片
		var b2=document.getElementById("isd");
		var list2=document.getElementById("isd1");
		
		list2.innerHTML+=list2.innerHTML;	
		var timer1,t1
		b2.onmouseover=function(){
			clearInterval(timer1);
			clearTimeout(t1)
		}
		b2.onmouseout=function(){
			timer1=setInterval(scrollL1,10);
		}
		
		function scrollL1(){
		
		
						
								if(b2.scrollLeft>=1160){
										b2.scrollLeft=0;
									}else{
										b2.scrollLeft++;
									}
								
										if(b2.scrollLeft%580==0){
												clearInterval(timer1);
												t1=setTimeout(startMove1,1000);	
											}
			}
		function startMove1(){
			b.scrollLeft++;
			 timer1=setInterval(scrollL1,10);
		}
		startMove1();
		
   
