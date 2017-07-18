<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div  v-if="seller.supports" class="support">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div v-if="seller.supports" class="support-count" @click="showDetail">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="elm-icon">></i>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="showDetail">
      <span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="elm-icon">></i>
    </div>
    <div class="background" >
      <img :src="seller.avatar" style="width:100%; height: 100%;">
    </div>
    <div v-show="detailShow" class="detail"></div>
  </div>
</template>


<script type="text/ecmascript-6">
  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data () {
      return {
        detailShow: false
      }
    },
    methods: {
      showDetail () {
        this.detailShow = true
      }
    },
    created () {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    }
  }

</script>


<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  @import "../../common/stylus/base.styl"
 // @import "../../common/stylus/icon.styl"

  .header
    position: relative
    overflow: hidden
    color: #ffffff
    background-color:rgba(7,17,27,0.5)
    .content-wrapper
      position: relative
      padding:24px 12px 18px 24px
      font-size:0
      .avatar
        display: inline-block
        vertical-align: top
        img
          -webkit-border-radius: 2px
          -moz-border-radius:2px
          border-radius:2px
      .content
        display: inline-block
        margin-left:16px

        .title
          margin:2px 0 8px 0
          .brand
            display: inline-block
            width: 30px
            height: 18px
            vertical-align:top
            bg-img('brand')
            background-size : 30px 18px
            background-repeat:no-repeat
          .name
            margin-left: 6px
            font-size: 16px
            line-height: 18px
            font-weight:bold
            color: rgb(255,255,255)
        .description
          margin-bottom: 10px
          font-size:12px
          line-height:12px
          font-weight:200
        .support
          .icon
            vertical-align: top
            display: inline-block
            margin-left: 2px
            width: 12px
            height: 12px
            background-size 12px 12px
            background-repeat:no-repeat
            &.decrease
              bg-img('decrease_1')
            &.discount
              bg-img('discount_1')
            &.special
              bg-img('special_1')
            &.invoice
              bg-img('invoice_1')
            &.guarantee
              bg-img('guarantee_1')
          .text
            margin-left: 4px
            line-height:12px
            font-size: 10px
            font-weight:200
            color: rgb(255,255,255)

      .support-count
        position: absolute
        right: 12px
        bottom: 18px
        height: 24px
        padding: 0 8px
        line-height:24px
        font-weight: 200
        border-radius:14px
        background-color: rgba(0,0,0,0.2)
        text-align: center
        .count
          font-size: 10px
          vertical-align: top
        .elm-icon
          display: inline-block
          margin-left: 2px
          line-height: 24px
          font-size: 10px



    .bulletin-wrapper
      position: relative
      height: 28px
      line-height: 28px
      padding:0 22px 0 12px
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis
      background-color: rgba(7,17,27,0.2)
      .bulletin-title
        display: inline-block
        width: 22px
        height: 12px
        bg-img(bulletin)
        background-size:22px 12px
        background-repeat:no-repeat
        font-size:10px
      .bulletin-text
        margin:0 4px 0 2px
        vertical-align: top
        font-size:10px
        line-height:28px
        font-weight:200
      .elm-icon
        position: absolute
        display: inline-block
        right: 12px
        bottom: 3px
        font-size: 10px


    .background
      position: absolute
      left: 0
      top: 0
      z-index: -1
      width:100%
      height:100%
      filter:blur(10px)

    .detail
      position: fixed
      top: 0
      left: 0
      z-index:100
      width:100%
      height:100%
      overflow: auto
      background-color:rgba(7,17,27,0.5)
      filter:blur(10px)

</style>
