(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{450:function(v,_,t){"use strict";t.r(_);var r=t(6),s=Object(r.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("blockquote",[t("p",[v._v("认识 WebGL\n")])]),v._v(" "),t("h2",{attrs:{id:"webgl-产生背景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webgl-产生背景"}},[v._v("#")]),v._v(" WebGL 产生背景")]),v._v(" "),t("p",[v._v("WebGL 规范产生以前，浏览器如果想实现 3D 动画效果，只能借助一些浏览器插件，比如 Adobe 的 "),t("strong",[v._v("Flash")]),v._v("、微软的 "),t("strong",[v._v("SilverLight")]),v._v(" 等来实现，那么，为了打破这一局限，各大知名公司联手制定了一种跨平台的 3D 开发标准，也就是 WebGL 规范。")]),v._v(" "),t("h2",{attrs:{id:"webgl-是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webgl-是什么"}},[v._v("#")]),v._v(" WebGL 是什么")]),v._v(" "),t("p",[v._v("WebGL 是一组基于 JavaScript 语言的图形规范，浏览器厂商按照这组规范进行实现，为 Web 开发者提供一套3D图形相关的 API。")]),v._v(" "),t("p",[v._v("这些 API 能够让 Web 开发者使用 JavaScript 语言直接和显卡（GPU）进行通信。当然 WebGL 的 GPU 部分也有对应的编程语言，简称 "),t("strong",[v._v("GLSL")]),v._v("。我们用它来编写运行在 GPU 上的着色器程序。着色器程序需要接收 CPU（WebGL 使用 JavaScript） 传递过来的数据，然后对这些数据进行流水线处理，最终显示在屏幕上，进而实现丰富多彩的 3D 应用，比如 3D 图表，网页游戏，3D 地图，WebVR 等。")]),v._v(" "),t("h2",{attrs:{id:"webgl-工作原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webgl-工作原理"}},[v._v("#")]),v._v(" WebGL 工作原理")]),v._v(" "),t("p",[v._v("我们知道，WebGL 只能够绘制"),t("strong",[v._v("点")]),v._v("、"),t("strong",[v._v("线段")]),v._v("、"),t("strong",[v._v("三角形")]),v._v("这三种基本图元，但是我们经常看到 WebGL 程序中含有立方体、球体、圆柱体等规则形体，甚至很多更复杂更逼真的不规则模型，那么 WebGL 是如何绘制它们的呢？其实这些模型本质上是由一个一个的"),t("strong",[v._v("点")]),v._v("组成，GPU 将这些点用"),t("strong",[v._v("三角形图元")]),v._v("绘制成一个个的微小平面，这些平面之间互相连接，从而组成各种各样的立体模型。")]),v._v(" "),t("p",[v._v("因此，我们的首要任务是创建组成这些模型的顶点数据。")]),v._v(" "),t("p",[v._v("一般情况下，最初的顶点坐标是相对于"),t("strong",[v._v("模型中心")]),v._v("的，不能直接传递到着色器中，我们需要对顶点坐标按照一系列步骤执行"),t("strong",[v._v("模型转换")]),v._v("，"),t("strong",[v._v("视图转换")]),v._v("，"),t("strong",[v._v("投影转换")]),v._v("，转换之后的坐标才是 WebGL 可接受的坐标，即"),t("strong",[v._v("裁剪空间坐标")]),v._v("。我们把最终的"),t("strong",[v._v("变换矩阵")]),v._v("和"),t("strong",[v._v("原始顶点坐标")]),v._v("传递给 "),t("strong",[v._v("GPU")]),v._v("，GPU 的渲染管线对它们执行流水线作业。")]),v._v(" "),t("p",[v._v("GPU 渲染管线的主要处理过程如下：")]),v._v(" "),t("ul",[t("li",[v._v("首先进入顶点着色器阶段，利用 GPU 的并行计算优势对顶点逐个进行坐标变换。")]),v._v(" "),t("li",[v._v("然后进入图元装配阶段，将顶点按照图元类型组装成图形。")]),v._v(" "),t("li",[v._v("接下来来到光栅化阶段，光栅化阶段将图形用不包含颜色信息的像素填充。")]),v._v(" "),t("li",[v._v("在之后进入片元着色器阶段，该阶段为像素着色，并最终显示在屏幕上。")])]),v._v(" "),t("h2",{attrs:{id:"webgl-程序设计知识点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webgl-程序设计知识点"}},[v._v("#")]),v._v(" WebGL 程序设计知识点")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("HTMl")]),v._v(" "),t("p",[v._v("因为 WebGL 应用是网页程序，所以我们仍然需要掌握HTML，至少要知道怎么使用 "),t("strong",[v._v("canvas")]),v._v("。")])]),v._v(" "),t("li",[t("p",[v._v("JavaScript")]),v._v(" "),t("p",[v._v("我们需要使用 JavaScript 声明 WebGL 运行的载体 "),t("strong",[v._v("canvas")]),v._v("，设置 "),t("strong",[v._v("canvas")]),v._v(" 的初始大小，获取 WebGL 的"),t("strong",[v._v("上下文")]),v._v("，对模型顶点的"),t("strong",[v._v("坐标")]),v._v("、"),t("strong",[v._v("颜色")]),v._v("、"),t("strong",[v._v("法向量")]),v._v("等信息进行处理，并将这些处理好的数据传递给 GPU 。对于复杂的 WebGL 应用，顶点、纹理、光照等数据甚至需要从"),t("strong",[v._v("外部模型")]),v._v("文件中获取，所以我们还需要用 JavaScript "),t("strong",[v._v("解析加载")]),v._v("模型数据。")])]),v._v(" "),t("li",[t("p",[v._v("GLSL（着色器语言）")]),v._v(" "),t("p",[v._v("不同于普通网页的开发，除了 JavaScript 语言需要熟练掌握之外，开发者还需要熟练使用 "),t("strong",[v._v("GLSL")]),v._v(" 语言。因为一个完整的 3D 应用离不开 JavaScript 程序和 GLSL 程序，二者缺一不可。我们需要用 GLSL 编写着色器程序，并配合 JavaScript 共同实现 3D 效果。")])]),v._v(" "),t("li",[t("p",[v._v("3D数学知识")]),v._v(" "),t("p",[v._v("除了掌握必要的编程语言，还需要掌握一定的 3D 数学知识，特别是"),t("strong",[v._v("向量")]),v._v("和"),t("strong",[v._v("矩阵")]),v._v("之间的表示和运算。在 WebGL 中顶点位置的"),t("strong",[v._v("坐标系变换")]),v._v("、"),t("strong",[v._v("光照效果")]),v._v("等都需要有 3D 数学的功底才能真正灵活运用。")])])]),v._v(" "),t("h2",{attrs:{id:"什么是-glsl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是-glsl"}},[v._v("#")]),v._v(" 什么是 GLSL？")]),v._v(" "),t("p",[t("strong",[v._v("GLSL")]),v._v(" 的中文意思是 OpenGL 着色语言，英文全称是 OpenGL Shading Language，它是用来在 OpenGL 编写"),t("strong",[v._v("着色器程序")]),v._v("的语言。")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("着色器程序")]),v._v(" "),t("p",[v._v("我们知道了 GLSL 是用来编写着色器程序的语言，那么新的问题来了，着色器程序是用来做什么的呢？ 简单地说，着色器程序是在显卡（GPU）上运行的简短程序，代替了 GPU "),t("strong",[v._v("固定渲染管线")]),v._v("的一部分，使 GPU 渲染过程中的某些部分允许开发者通过"),t("strong",[v._v("编程")]),v._v("进行控制。")])])]),v._v(" "),t("p",[v._v("上面这段解释有些长，用一句话来说：着色器程序允许我们通过编程来控制 GPU 的渲染。")])])}),[],!1,null,null,null);_.default=s.exports}}]);