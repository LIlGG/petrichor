<!-- 全局布局 -->
<template>
    <div>
        <section ref="main-container">
            <!-- 头部(home) -->
            <div class="headertop filter-dot" style="height: auto;"></div>
            <!-- 头部（非Home) -->
            <!-- 页面主体 -->
            <div></div>
            <!-- 页脚 -->
            <footer></footer>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Layout'
}
</script>

<style lang="less" scoped>
.headertop,.pattern-center {
	animation:header 1s
}
.headertop {
	position:relative;
	overflow:hidden;
	height:0
}
.headertop:before {
	content:'';
	position:absolute;
	top:0;
	bottom:0;
	left:0;
	right:0;
	z-index:3;
	background-attachment:fixed
}
.headertop.filter-undertint:before {
	background-color:rgba(255,255,255,.3)
}
.headertop.filter-dim:before {
	background-color:rgba(0,0,0,.3)
}
.headertop.filter-grid:before {
	background-image:url(https://cdn.lixingyong.com/img/Sakura/images/grid.png)
}
.headertop.filter-dot:before {
	background-image:url(https://cdn.lixingyong.com/img/Sakura/images/dot.gif)
}
@media (max-width:860px) {
	.headertop.filter-dot:before {
	background-image:url(https://cdn.lixingyong.com/img/Sakura/images/grid.png)
}
}.headertop-bar:after {
	content:'';
	width:150%;
	height:4.375rem;
	background:#fff;
	left:-25%;
	bottom:-2.875rem;
	border-radius:100%;
	position:absolute;
	z-index:4
}
.headertop-down {
	position:absolute;
	bottom:50px;
	left:50%;
	cursor:pointer;
	z-index:5
}
@media (max-width:860px) {
	.headertop-down {
	display:none
}
}.headertop-down i {
	font-size:28px;
	color:#fff;
	-ms-transform:scale(1.5,1);
	-webkit-transform:scale(1.5,1);
	transform:scale(1.5,1)
}
</style>

