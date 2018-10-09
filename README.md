##案例一：用html+css+js实现上面的选项卡功能。
####分析：
该选项卡大体上分成两部分：

#####一部分是ul，它的border-bottom是褐色的，ul里面有三个li，他们是inline-block的，才能水平排列，或者使用float：left属性也行。
#####每个li有边框，字体居中排列，被选中的li的css发生变化，border-top变色加粗，同时用白色的border-bottom遮挡住ul的border-bottom，形成缺口的样子。
#####第二部分是下面的三个内容div，div的宽度与上面的ul相同。但这里注意div的宽度是width+左右border的宽度，所以在计算时要多加留神。css中，设置一个.show{display:block}，再设置一个.hide{display:none}，根据上面的ul中的li被选中的情况，相应的控制其中一个的className是show，其他两个div的className都是hide，就能形成好似选中li，就能相应的显示不同div的样子。js的控制策略：


#####当页面加载时，向ul的三个li中，分别绑定onclick方法，方法体中进行如下控制对ul中的li，添加index属性，作为编号，每个li都有自己唯一的编号。获得三个div，可以通过得到父节点的子节点数组的方式得到这三个div，那么他们在数组中的位置，就可以用上一条提到的编号与之相对应。利用循环，将对应编号的div的className设置成show，其他的设置成hide即可。
