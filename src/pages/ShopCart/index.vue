<template>
  <div class="cart">
    <h4>全部商品</h4>
    <div class="cart-main">
      <div class="cart-th">
        <div class="cart-th1">全部</div>
        <div class="cart-th2">商品</div>
        <div class="cart-th3">单价（元）</div>
        <div class="cart-th4">数量</div>
        <div class="cart-th5">小计（元）</div>
        <div class="cart-th6">操作</div>
      </div>
      <div class="cart-body">
        <ul class="cart-list" v-for="(cart, index) in cartList" :key="cart.id">
          <li class="cart-list-con1">
            <input type="checkbox" name="chk_list" :checked="cart.isChecked" @change="changeChecked(cart, $event)">
          </li>
          <li class="cart-list-con2">
            <img :src="cart.imgUrl">
            <div class="item-msg">{{ cart.skuName }}</div>
          </li>

          <li class="cart-list-con4">
            <span class="price">{{ cart.skuPrice }}.00</span>
          </li>
          <li class="cart-list-con5">
            <a href="javascript:void(0)" class="mins" @click="handler('down', -1, cart)">-</a>
            <input autocomplete="off" type="text" :value="cart.skuNum" minnum="1" class="itxt"
              @change="handler('change', $event.target.value * 1, cart)">
            <a href="javascript:void(0)" class="plus" @click="handler('up', 1, cart)">+</a>
          </li>
          <li class="cart-list-con6">
            <span class="sum">{{ cart.cartPrice * cart.skuNum }}</span>
          </li>
          <li class="cart-list-con7">
            <a href="#none" class="sindelet" @click="deleteCart(cart)">删除</a>
            <br>
            <a href="#none">移到收藏</a>
          </li>
        </ul>

      </div>
    </div>
    <div class="cart-tool">
      <div class="select-all">
        <input class="chooseAll" type="checkbox" :checked="isAllChecked && cartList.length > 0"
          @change="updateAllChecked($event)">
        <span>全选</span>
      </div>
      <div class="option">
        <a href="#none" @click="deleteAllChecked">删除选中的商品</a>
        <a href="#none">移到我的关注</a>
        <a href="#none">清除下柜商品</a>
      </div>
      <div class="money-box">
        <div class="chosed">已选择
          <span>0</span>件商品
        </div>
        <div class="sumprice">
          <em>总价（不含运费） ：</em>
          <i class="summoney">{{ totalPrice }}</i>
        </div>
        <div class="sumbtn">
          <router-link class="sum-btn" to="/trade">结算</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import throttle from "lodash/throttle";
export default {
  name: 'ShopCart',
  mounted() {
    this.getData()
  },
  computed: {
    ...mapGetters(['shopcartList']),
    cartList() {
      return this.shopcartList.cartInfoList || []
    },
    // 计算总价
    totalPrice() {
      let sum = 0;
      this.cartList.forEach(item => {
        sum += item.skuNum * item.skuPrice
      });
      return sum;
    }
  },
  methods: {
    // 获取个人购物车数据
    getData() {
      this.$store.dispatch('getShopcartList')
    },
    // 全选初始状态
    isAllChecked() {
      // Array.every() 遍历数组元素，只要每一个元素都符合回调里面的条件，就返回true，只要有一个不满足条件，就返回false
      return this.cartList.every(item => item.isChecked == 1);

    },
    // 修改产品数量
    handler: throttle(async function (type, disNum, cart) {
      // type:区分触发该回调的三个元素是哪一个
      // disNum：+ 变化量（1） - 变化量(-1) input最终的个数(并不是变化量)
      // cart ：选择的是哪一个产品【产品身上都有ID】
      // 分情况计算disNum
      switch (type) {
        case 'up':
          disNum = 1;
          break;

        case 'down':
          // 判断产品个数大于1，才能向服务器传递-1
          // 如果产品个数小于等于1，则向服务器传递 0
          disNum = cart.skuNum > 1 ? -1 : 0;
          break;

        case 'change':
          // 用户输入非正常情况
          if (isNaN(disNum) || disNum < 1) {
            disNum = 0;
          } else {
            // 用户输入正常情况如果是小数，则带给服务器的变化的量 = 用户输入的量向下取整 - 产品起始的量
            disNum = parseInt(disNum) - cart.skuNum;
          }
          break;
      }
      // 派发actions，通知服务器修改购买的个数
      try {
        await this.$store.dispatch('addUpdateShopCar', {
          skuId:
            cart.skuId,
          skuNum: disNum
        });
        this.getData()
      } catch (error) {
        alert(error.message);
      }
    }, 500),
    // 删除购物车产品功能
    async deleteCart(cart) {
      try {
        await this.$store.dispatch('deleteCart', cart.skuId);
        this.getData()
      } catch (error) {
        alert(error.message)
      }
    },
    // 修改商品选中状态
    async changeChecked(cart, event) {
      try {
        await this.$store.dispatch('changeCheckedById', {
          skuId: cart.skuId,
          isChecked: event.target.checked ? '1' : '0'
        });
        this.getData();
      } catch (error) {
        alert(error.message)
      }
    },
    // 删除所有已选中的产品
    async deleteAllChecked() {
      try {
        await this.$store.dispatch('deleteAllCheckedById');
        // 再次发请求获取购物车数据
        this.getData();
      } catch (error) {
        alert(error.message)
      }
    },
    // 全选功能
    async updateAllChecked(event) {
      try {
        let isChecked = event.target.checked ? '1' : '0';
        await this.$store.dispatch('updateAllChecked', isChecked);
        this.getData();
      } catch (error) {
        alert(error.message)
      }
    }
  }
}

</script>

<style lang="less" scoped>
.cart {
  width: 1200px;
  margin: 0 auto;

  h4 {
    margin: 9px 0;
    font-size: 14px;
    line-height: 21px;
  }

  .cart-main {
    .cart-th {
      background: #f5f5f5;
      border: 1px solid #ddd;
      padding: 10px;
      overflow: hidden;

      &>div {
        float: left;
      }

      .cart-th1 {
        width: 25%;

        input {
          vertical-align: middle;
        }

        span {
          vertical-align: middle;
        }
      }

      .cart-th2 {
        width: 25%;
      }

      .cart-th3,
      .cart-th4,
      .cart-th5,
      .cart-th6 {
        width: 12.5%;

      }
    }

    .cart-body {
      margin: 15px 0;
      border: 1px solid #ddd;

      .cart-list {
        padding: 10px;
        border-bottom: 1px solid #ddd;
        overflow: hidden;

        &>li {
          float: left;
        }

        .cart-list-con1 {
          width: 15%;
        }

        .cart-list-con2 {
          width: 35%;

          img {
            width: 82px;
            height: 82px;
            float: left;
          }

          .item-msg {
            float: left;
            width: 150px;
            margin: 0 10px;
            line-height: 18px;
          }
        }



        .cart-list-con4 {
          width: 10%;

        }

        .cart-list-con5 {
          width: 17%;

          .mins {
            border: 1px solid #ddd;
            border-right: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }

          input {
            border: 1px solid #ddd;
            width: 40px;
            height: 33px;
            float: left;
            text-align: center;
            font-size: 14px;
          }

          .plus {
            border: 1px solid #ddd;
            border-left: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }
        }

        .cart-list-con6 {
          width: 10%;

          .sum {
            font-size: 16px;
          }
        }

        .cart-list-con7 {
          width: 13%;

          a {
            color: #666;
          }
        }
      }
    }
  }

  .cart-tool {
    overflow: hidden;
    border: 1px solid #ddd;

    .select-all {
      padding: 10px;
      overflow: hidden;
      float: left;

      span {
        vertical-align: middle;
      }

      input {
        vertical-align: middle;
      }
    }

    .option {
      padding: 10px;
      overflow: hidden;
      float: left;

      a {
        float: left;
        padding: 0 10px;
        color: #666;
      }
    }

    .money-box {
      float: right;

      .chosed {
        line-height: 26px;
        float: left;
        padding: 0 10px;
      }

      .sumprice {
        width: 200px;
        line-height: 22px;
        float: left;
        padding: 0 10px;

        .summoney {
          color: #c81623;
          font-size: 16px;
        }
      }

      .sumbtn {
        float: right;

        a {
          display: block;
          position: relative;
          width: 96px;
          height: 52px;
          line-height: 52px;
          color: #fff;
          text-align: center;
          font-size: 18px;
          font-family: "Microsoft YaHei";
          background: #e1251b;
          overflow: hidden;
        }
      }
    }
  }
}
</style>