window.onload=function(){
	// 获取上方的ul的所有子标签
	var titleCardChildren = document.getElementById("titleCard").children;
	// 获取下方展示的标签
	var contentChildren = document.getElementById("content").children;

	for (var i = 0; i < titleCardChildren.length; i++) {
		// 设置当前li的index
		titleCardChildren[i].index = i;
		//当前li添加点击事件
		titleCardChildren[i].onclick = function(){
			//下方展示的内容全部不展示
			for (var j = 0; j < contentChildren.length; j++) {
				contentChildren[j].className = "hide";
				titleCardChildren[j].className = "";
			}
			//显示当前点击的index对应的内容
			contentChildren[this.index].className = "show";
			titleCardChildren[this.index].className = "liActive";
		}
	}
}