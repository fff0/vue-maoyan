<template>
<div>
    <div class="tou">
    <h1>猫眼电影</h1>
    </div>
<van-tabs v-model="active">
  <van-tab title="美团账号登录">
    <input type="text" class="txt" placeholder="账户名/手机号/Email">
    <input type="password" class="pwd" placeholder="请输入您的密码">
    <div class="btn-wrapper">
      <button class="btn-larger">登录</button>
    </div>
    <ul class="subline">
      <li class="pull-left"><a href="">立即注册</a></li>
      <li class="pull-right"><a href="">找回密码</a></li>
    </ul>
    <div class="copyright">
      <span>© 猫眼电影 客服电话：400-670-5335</span>
    </div>
  </van-tab>
  <van-tab title="手机验证登录">
    <input type="text" class="txt" placeholder="请输入手机号">
    <input type="password" class="pwd" placeholder="请输入短信验证码">
    <div class="btn-wrapper">
      <button class="btn-larger">登录</button>
    </div>
    <ul class="subline">
      <li class="pull-left"><a href="">立即注册</a></li>
      <li class="pull-right"><a href="">找回密码</a></li>
    </ul>
    <div class="copyright">
      <span>© 猫眼电影 客服电话：400-670-5335</span>
    </div>
  </van-tab>
</van-tabs>
</div>
</template>

<script>
export default {

}
</script>
<style lang="less">
.tou {
    width: 100%;
    height: 50px;
    background-color: #e54847;
  }
  .tou h1{
    margin-right: 0!important;
    display: block;
    -webkit-box-flex: 1;
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    line-height: 50px;
    margin: 0 52.5px 0 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: #fff;
  }
  .txt{
    width: 100%;
    height: 40px;
    border: 0px;
    border-bottom: 1px solid #ccc;
    padding-left: 10px;
    font-size: 12px;
  }
  .pwd{
    width: 100%;
    border: 0px;
    height: 40px;
    border-bottom: 1px solid #ccc;
    padding-left: 10px;
    font-size: 12px;
  }
  .btn-wrapper{
    margin: 10px 10px 0px 10px;
    height: 50px;
    border: 1px solid #e54847;
    border-radius: 3px;
  }
  .btn-wrapper .btn-larger{
    width: 100%;
    height: 50px;
    border: 0px;
    background-color: #e54847;
    color: #fff;
  }
  .subline{
    margin: 10px 10px;
    height: 12px;
    // color: #df2d2d;
  }
  .pull-left a{
    color: #df2d2d;
    font-size: 12px;
    float: left;
  }
  .pull-right a{
    color: #df2d2d;
    font-size: 12px;
    float: right;
  }
  .copyright{
    font-size: 12px;
    color: #333;
    text-align: center;
  }
</style>
