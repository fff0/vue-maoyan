<template>
<div>
  <ul>
    <li v-for="cinema in list"
    :key="cinema.id"
    class="li">
    <div class="l1">
      <div class="nm">
        {{ cinema.nm }}
      </div>
      <span>
        {{cinema.sellPrice}}
        <div>元起</div>
      </span>
    </div>
    <div class="l2">
      <div class="addr">
        {{ cinema.addr }}
      </div>
      <span>
        {{cinema.distance}}
      </span>
    </div>
    <div class="l3">
      <span class="b1">退</span>
      <span class="b1">改签</span>
      <span class="b2">小吃</span>
      <span class="b2">折扣卡</span>
      <span class="b1">CGS中国巨幕厅</span>
    </div>
    <div class="l4">
      <span class="b3">卡</span>
      <p>开卡特惠，首单2张立减6元</p>
    </div>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array
    }
  }
}
</script>

<style lang="less">
.li{
  width: 100%;
  height: 110px;
  margin: 10px 0;
  padding: 0 15px 0 10px;
  box-sizing: border-box;
  border-bottom: 0.6px solid #ccc;
}
.l1{
  display: flex;
  .nm{
    font: 18px '黑体';
    font-weight: 100;
    width: 75%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: rgb(43, 42, 42);
  }
  span{
    margin-left: 20px;
    font-size: 18px;
    color: rgb(233, 61, 61);
    display: flex;
    div{
      margin-left: 4px;
      line-height: 20px;
      font-size: 10px;
    }
  }
}
.l2{
  display: flex;
  .addr{
    margin-top: 8px;
    font-size: 14px;
    width: 85%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #666;
  }
  span{
    margin-top: 8px;
    font-size: 14px;
    margin-left: 4px;
    color: #666;
  }
}
.l3{
  margin-top: 10px;
  display: flex;
  .b1{
    padding: 3px;
    font-size: 10px;
    color: #589daf;
    border-radius: 4px;
    margin-left: 6px;
    border: 0.6px solid #589daf;
  }
  .b2{
    padding: 3px;
    font-size: 10px;
    color: #f90;
    border-radius: 4px;
    margin-left: 6px;
    border: 0.6px solid #f90;
  }
}
.l4{
  margin-top: 10px;
  display: flex;
  .b3{
    padding: 3px;
    font-size: 8px;
    color: #fff;
    border-radius: 2px;
    margin-left: 6px;
    background-color: #55ceec;
    border: 0.6px solid #55ceec;
  }
  p{
    font-size: 11px;
    color: #666;
    margin-left: 10px;
  }
}
</style>
