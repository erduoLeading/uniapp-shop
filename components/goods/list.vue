<template>

	<view class="hot_goods">
		<!-- 一般用法 -->
		<view class="goods_list">
			<view class="goods_item" v-for="(item, index) in goodsList" :key="index" @click="cSendGoodsDetail(item)">
				<image :src="item.img" style="width: 150px;"></image>
				<view class="price">
					<text>￥{{item.discountPrice}}</text>
					<text>￥{{item.price}}</text>
				</view>
				<view class="name">{{item.name}}</view>
			</view>
		</view>
		<view class="bottom-line" v-show="isBottom">--------我是有底线的----------</view>
	</view>
</template>

<script>
	import loading from '../common/loading.vue'
	export default {
		props: ['goodsList', 'isBottom'],
		components: {
			loading,
		},
		data() {
			return {
				loadingStyle: {
					color: "#000",
					margin: "5rpx 0 0 0"
				}
			}
		},
		methods: {
			cSendGoodsDetail(item) {
				this.$emit('handleCoodsDetail', item)
			}
		}
	}
</script>
	
<style lang="scss">
	// 推荐商品列表
		.hot_goods {
			background: #eee;
			.goods_list {
				display: flex;
				padding: 0 15rpx;
				justify-content: space-between;
				overflow: hidden;
				flex-wrap: wrap;
	
				.goods_item {
					width: 355rpx;
					margin-bottom: 15rpx;
					background: #fff;
					padding: 10px;
					box-sizing: border-box;
	
					image {
						height: 150px;
						width: auto;
						mix-width: 160px;
						margin: 10px auto;
					}
	
					.price {
						font-size: 18px;
						color: red;
						padding: 8px 0;
	
						text:nth-child(2) {
							color: #ccc;
							text-decoration: line-through;
							margin-left: 10px;
							font-size: 13px;
						}
					}
	
					.name {
						font-size: 14px;
	
					}
				}
			}
			.bottom-line {
				text-align: center;
			}
		}
</style>
