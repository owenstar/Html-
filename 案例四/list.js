//Javascript hide OR show
// window.onload = function(){
// 	var tagList, questions, answers, currentNode;
// 	tagList = document.getElementById("list");
// 	answers = tagList.getElementsByTagName("dd");
// 	for (var i = 0; i < answers.length; i++) {
// 		answers[i].style.display = "none";
// 	}

// 	questions = tagList.getElementsByTagName("dt");
// 	for (var i = 0; i < questions.length; i++) {
// 		questions[i].onclick = function(){
// 			currentNode = this.nextSibling;
// 			while (currentNode) {
// 				// 判断节点的tagname需要大写字母
// 				if (currentNode.nodeType == "1" && currentNode.tagName == "DD") {
// 					if (currentNode.style.display == "none") {
// 						currentNode.style.display = "block";
// 					}else {
// 				 		currentNode.style.display = "none";
// 					}
// 					break;
// 				}
// 				currentNode = currentNode.nextSibling;
// 			}
// 			return false;
// 		};
// 	}
// }

//JQuery  hide OR show
// $(function(){
// 	$("#list dd").hide();
// 	$("#list dt").click(function(event){
// 		event.preventDefault();
// 		$(this).next("dd").toggle();
// 	});
// });


//Javascript addElement
//插入<a>标签 点击标签控制所有的展示与隐藏

// window.onload = function(){
// 	addExpandBtn();
// }

// function addExpandBtn(){
// 	var expandDiv, expandLink, faq;
// 	expandDiv = document.createElement("div");
// 	expandDiv.setAttribute("id","expandDiv");
// 	expandLink = document.createElement("a");
// 	expandLink.setAttribute("href","#");
// 	expandLink.setAttribute("id", "expandLink");
// 	expandLink.appendChild(document.createTextNode("Expand ALL"));
// 	expandDiv.appendChild(expandLink);

// 	expandLink.onclick = function(){
// 		var tagList, answers;
// 		tagList = document.getElementById("list");
// 		answers = tagList.getElementsByTagName("dd");
// 		if (this.innerHTML == "Expand ALL") {
// 			for (var i = 0; i < answers.length; i++) {
// 				answers[i].style.display = 'block';
// 			}
// 			this.innerHTML = "Collapse ALL";
// 		}else {
// 			for (var i = 0; i < answers.length; i++) {
// 				answers[i].style.display = 'none';
// 			}
// 			this.innerHTML = "Expand ALL";
// 		}
// 		return false;
// 	}
// 	faq = document.getElementById("list");
// 	var listDD = faq.getElementsByTagName("dd");
// 	for (var i = 0; i < listDD.length; i++) {
// 		listDD[i].style.display = 'none';
// 	}
// 	faq.insertBefore(expandDiv, faq.firstChild);
// }

//JQuery addElement
//插入<a>标签 点击标签控制所有的展示与隐藏
$(function(){
	$("<a href='#' id='expandALL'>Expand ALL</a>").insertAfter($("h1"));
	$("#list dd").hide();
	$("#expandALL").click(function(event){
		event.preventDefault();
		if ($(this).html() == "Expand ALL") {
			$("#list dd").show();
			$(this).html("Collapse All");
		}else {
			$("#list dd").hide();
			$(this).html("Expand ALL");
		}
	})
})




