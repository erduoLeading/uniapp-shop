<template>
	<view class="content">
		<!-- 轮播图 -->
		<view class="swiper-wrapper">
			<loading :list="lunBoList" />
			<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular="true">
				<swiper-item class="swiper-item" v-for="item in lunBoList" :key="item.id">
					<a :href="item.href">
						<image :src="item.img" mode="widthFix"></image>
					</a>
				</swiper-item>
			</swiper>
		</view>
		<!-- 菜单导航 -->
		<view class="menu-wrapper">
			<view class="nav">
				<view class="nav_item" v-for="(item,index) in navs" :key="index" @click="navItemClick(item.path)">
					<view :class="item.icon"></view>
					<text>{{item.title}}</text>
				</view>
			</view>
		</view>
		<!-- 推荐商品列表 -->
		<view class="goods-wrapper">
			<view class="hot_goods">
				<view class="tit">推荐商品</view>
				<goodsList  :goodsList="goodsList" :isBottom="isBottom" @handleCoodsDetail="jumpToGoodsDetail"/>
			</view>
			
		</view>
	</view>
</template>

<script>
	import loading from '../../components/common/loading.vue'
	import goodsList from '../../components/goods/list.vue'
	export default {
		data() {
			return {
				title: 'Hello',
				navs: [{
						icon: 'iconfont icon-ziyuan',
						title: '黑马超市',
						path: '/pages/goods/goods'
					},
					{
						icon: 'iconfont icon-guanyuwomen',
						title: '联系我们',
						path: '/pages/contact/contact'
					},
					{
						icon: 'iconfont icon-tupian',
						title: '图片写真',
						path: '/pages/pics/pics'
					},
					{
						icon: 'iconfont icon-shipin',
						title: '学习视频',
						path: '/pages/videos/videos'
					}
				],
				lunBoList: [],
				goodsList: [],
				pageNo: 0,
				pages: 4,
				isBottom: false,
				isDownRefresh: false
			}
		},
		watch: {
			isDownRefresh(newVal, oldVal) {
				console.log(oldVal, newVal)
				if (newVal == false) {
					uni.stopPullDownRefresh()
				}
			}
		},
		components: {
			loading,
			goodsList
		},
		onLoad() {

		},
		methods: {
			async getGoods() {
				if (this.pageNo < this.pages) {
					let pageNo = ++this.pageNo
					const {
						data: {
							goodsList
						}
					} = await this.$api.getGoods({
						pageNo
					})
					this.isDownRefresh = false
					this.goodsList = this.goodsList.concat(goodsList)
				} else {
					this.isBottom = true
					setTimeout(() => {
						this.isDownRefresh = false
					})
				}
				//下拉获取数据完毕


			},
			navItemClick(url) {
				uni.navigateTo({
					url
				})
			},
			jumpToGoodsDetail(item) {
				console.log("item:",item)
				uni.navigateTo({
					url:`/pages/goodsDetail/goodsDetail?goodsId=${item.id}`
				})
			}

		},
		async mounted() {
			const {
				data: {
					lunBoList
				}
			} = await this.$api.getLunbo()
			this.lunBoList = lunBoList
			this.getGoods()
		},
		// 到底加载更多
		onReachBottom() {
			this.getGoods()
		},
		// 下拉加载更多
		onPullDownRefresh() {
			console.log("触发下拉刷新")
			this.isDownRefresh = true
			this.getGoods()
		}
	}
</script>

<style lang="scss">
	// 轮播
	.swiper-wrapper {
		height: 150px;
		background-color: #333333;

		.swiper {
			.swiper-item {
				text-align: center;
			}
		}
	}

	// 菜单
	.menu-wrapper {
		.nav {
			display: flex;

			.nav_item {
				width: 25%;
				text-align: center;

				view {
					width: 120rpx;
					height: 120rpx;
					background: $shop-color;
					border-radius: 60rpx;
					margin: 10px auto;
					line-height: 120rpx;
					color: #fff;
					font-size: 50rpx;
				}

				.icon-tupian {
					font-size: 45rpx;
				}

				text {
					font-size: 30rpx;
				}
			}
		}
	}
	
	// 商品
	.goods-wrapper {
		.hot_goods {
			background: #eee;
			overflow: hidden;
			margin-top: 10px;
			.tit{
				height: 50px;
				line-height: 50px;
				color: $shop-color;
				text-align: center;
				letter-spacing: 20px;
				background: #fff;
				margin: 7rpx 0;
			}
		}
	}
</style>
