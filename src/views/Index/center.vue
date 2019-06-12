<template>
<div class="bgc">
  <div class="tou" >
    <h1>我的</h1>
  <div>
  </div>
  <div class="header">
    <img src="https://img.meituan.net/maoyanuser/8bcb755048586d97d25e8cbb91db389411430.png" alt="">
  </div>
  <div class="container">
    <div class="group">
      <div class="orders">
        <div class="title">我的订单</div>
        <div class="list">
          <div class="movie">
            <a href="">
              <img src="http://s0.meituan.net/bs/file/?f=myfe/canary:static/deploy/dpmmweb/client/dpmmweb/component/mycenter/img/movie.png" alt="">
              <p>电影</p>
            </a>
          </div>
          <div class="store">
            <a href="">
              <img src="http://s0.meituan.net/bs/file/?f=myfe/canary:static/deploy/dpmmweb/client/dpmmweb/component/mycenter/img/store.png" alt="">
              <p>商城</p>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="mb-outline-tb">
      <div class="card">
        <a href="">
          <span>在线观影</span>
        </a>
      </div>
      <div class="card">
        <a href="">
          <span>优惠券</span>
        </a>
      </div>
      <div class="card">
        <a href="">
          <span>折扣卡</span>
        </a>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="less">
.bgc{
height: 100%;
background-color: #f3f2f2;
}
.tou {
    width: 100%;
    height: 50px;
    background-color: #e54847;
    position: sticky;
    top: 0;
    z-index: 100
  }
  .tou h1{
    margin-right: 0 !important;
    display: block;
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
  .header{
    // background-color: #f03d37;
    // background-repeat: no-repeat;
    // background-position: 50%;
    // background-size: 100% 150px;
    height: 150px;
    overflow: hidden;
    text-align: center;
    line-height: 150px;
    background: url('http://s0.meituan.net/bs/file/?f=myfe/canary:static/deploy/dpmmweb/client/dpmmweb/component/mycenter/img/bg.png') no-repeat;
  }
  .header img{
    width: 66px;
    height: 66px;
    border-radius: 50%;
    background-color: #fff;
  }
  .container{
    width: 100%;
    height: 100%;
    .group{
    margin-top: 10px;
    height: 149px;
    background-color: #fff;
  }
  .orders{
    padding: 0 15px;
    height: 149px;
    text-align: center;
  }
  .title{
     padding: 13px 0 0;
  }
  .list{
    height: 115px;
    .movie{
      float: left;
      height: 97px;
      width: 50%;
      img{
      margin-top: 18px;
      width:40px;
      height: 40px;
    }
    p{
      color: #000;
      margin-top: 15px;
    }
    }
    .store{
      img{
        margin-top: 18px;
      width:40px;
      height: 40px;
      }
      p{
        color: #000;
        margin-top: 15px;
      }
    }
  }
  .mb-outline-tb{
    margin-top: 10px;
    background-color: #fff;
    height: 132px;
  }
  .card{
    height:44px;
    line-height: 44px;
    padding: 0 10px;
    border-bottom: 0.2px solid #f3f2f2;
    font-size: 15px;
    span{
      color: #000;
    }
    &::after{
      display: block;
      float: right;
      content: "";
      width: 8px;
      height: 8px;
      border-left: 1px solid #ccc;
      border-top: 1px solid #ccc;
      transform: rotate(135deg);
      margin-top: 18px;
    }
  }
  }
</style>
