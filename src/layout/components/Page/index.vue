<!-- 
博客内容页面主题（必须具有高复用性,因此大部分内容选择后台获取。之后缓存）
为了方便起见，我先自己预定义一个最基本的模板，剩余的模板均使用后台进行读取
当前界面只实现最基本的功能，如翻页，展示等，具体功能视后台html而定
 -->
<template>
    <div id="page" class="site wrapper">
        <div class="blank" style="padding-top: 75px;"></div>
        <div>
            本地模板
           <!-- html模板可以从后台传过来，也可以预先写好模板, 目前来说最好是先写一个本地模板，之后全部采用后端读取 -->
        </div>
        <!-- <div class="pattern-center">
            <div class="pattern-attachment-img">
               
            </div>
            <header class="pattern-header">
               
            </header>
        </div>
        <div id="content" class="site-content">
            
        </div> -->
    </div>
</template>

<script>
export default {

}
</script>