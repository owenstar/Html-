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
$(function(){
	$("#list dd").hide();
	$("#list dt").click(function(event){
		event.preventDefault();
		$(this).next("dd").toggle();
	});
});