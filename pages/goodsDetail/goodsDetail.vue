<template>
	<view class="goods_detail">
		<swiper indicator-dots>
			<swiper-item v-for="(item,index) in swipers" :key="index">
				<image :src="item.src"></image>
			</swiper-item>
		</swiper>
		<view class="box1">
			<view class="price">
				<text>￥{{goodsDetail.sell_price}}</text>
				<text>￥{{goodsDetail.market_price}}</text>
			</view>
			<view class="goods_name">{{goodsDetail.title}}</view>
		</view>
		<view class="line"></view>
		<view class="box2">
			<view>货号：{{goodsDetail.goods_no}}</view>
			<view>库存：{{goodsDetail.stock_quantity}}</view>
		</view>
		<view class="line"></view>
		<view class="box3">
			<view class="tit">详情介绍</view>
			<view class="content">
				<rich-text :nodes="content"></rich-text>
			</view>
		</view>
		<view class="goods_nav">
			<uni-goods-nav :fill="true"  :options="options" :button-group="buttonGroup"  @click="onClick" @buttonClick="buttonClick" ></uni-goods-nav>
		</view>
	</view>
</template>

<script>
	import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue'
	export default {
		components: {uniGoodsNav},
		data() {
			return {
				goodsDetail: [],
				swipers: [],
				content: [],
				options: [
					{
						icon: '../../static/icon/kefu.png',
						text: '客服'
					}, {
						icon: '../../static/icon/shop.png',
						text: '店铺'
					}, {
						icon: '../../static/icon/cart(2).png',
						text: '购物车',
						info: 12
					},
				],
				buttonGroup: [
					{
						text: '加入购物车',
						backgroundColor: '#ff0000',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: '#ffa200',
						color: '#fff'
					}
				]
			}
		},
		methods: {
			async getGoodsDetail(goodsId) {
				const {data:{goodsDetail,swipers,content}} = await this.$api.getGoodsDetail({goodsId})
				console.log(goodsDetail)
				console.log(swipers)
				console.log(content)
				this.goodsDetail = goodsDetail
				this.swipers = swipers
				this.content = content
				
			},
			onClick() {
				
			},
			buttonClick() {}
		},
		onLoad(options) {
			this.getGoodsDetail(options.id)
		}
	}
</script>

<style lang="scss">
.goods_detail{
	swiper{
		height: 700rpx;
		image{
			width: 100%;
			height: 100%;
		}
	}
	.box1 {
		padding: 10px;
		.price {
			font-size: 35rpx;
			color: $shop-color;
			line-height: 80rpx;
			text:nth-child(2){
				color: #ccc;
				font-size: 28rpx;
				text-decoration: line-through;
				margin-left: 20rpx;
			}
		}
		.goods_name{
			font-size: 32rpx;
			line-height: 60rpx;
		}
	}
	.box2 {
		padding: 0 10px;
		font-size: 32rpx;
		line-height: 70rpx;
	}
	.box3 {
		padding-bottom: 50px;
		.tit{
			font-size: 32rpx;
			padding-left: 10px;
			border-bottom: 1px solid #eee;
			line-height: 70rpx;
		}
		.content {
			padding: 10px;
			font-size: 28rpx;
			color: #333;
			line-height: 50rpx;
		}
	}
}

.goods_nav {
	position: fixed;
	bottom:0;
	width: 100%;
}

.line {
	height: 10rpx;
	width: 750rpx;
	background: #eee;
}
</style>
