<template>
	<view class="pics">
		<!-- 左侧导航 -->
		<scroll-view class="left" scroll-y>
			<view @click="leftClickHandle(index,item.id)" :class="activeItem===index?'active':''" v-for="(item,index) in cates"
			 :key="item.id">
				{{item.title}}
			</view>
		</scroll-view>
		<!-- 右侧内容 -->
		<scroll-view class="right" scroll-y>
			<view class="item" v-for="item in itemData" :key="item.id">
				<image @click="previewImg(item.img_url)" :src="item.img_url"></image>
				<text>{{item.title}}</text>
			</view>
			<!-- <text v-if="itemData.length === 0">非常抱歉，暂无数据!</text> -->
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cates: [],
				activeItem: 0,
				itemData: [],
			}
		},
		methods: {
			leftClickHandle(index, id) {
				this.activeItem = index
				this.getPicsCateItem(id)
			},
			async getPicsCate() {
				const {data: {cates}} = await this.$api.getPicsCate()
				this.cates = cates
			},
			async getPicsCateItem(id) {
				const {data: {itemData}} = await this.$api.getPicsCateItem({
					id
				})
				console.log(itemData)
				this.itemData = itemData
			},
			previewImg(img_url) {
				let imgList = this.itemData.map(item => item.img_url)
				uni.previewImage({
						current: img_url,
						urls: imgList
					})
				}
			},
			mounted() {
				// 数据
				this.getPicsCate()
				this.getPicsCateItem({
					id: 0
				})
			}
		}
</script>

<style lang="scss">
	page {
		height: 100%;
	}

	.pics {
		height: 100%;
		display: flex;

		.left {
			width: 200rpx;
			height: 100%;
			border-right: 1px solid #eee;

			view {
				height: 60px;
				line-height: 60px;
				color: #333;
				text-align: center;
				font-size: 30rpx;
				border-top: 1px solid #eee;
			}

			.active {
				background: #1989fa;
				color: #fff;
			}
		}

		.right {
			height: 100%;
			width: 520rpx;
			margin: 10rpx auto;

			.item {
				image {
					width: 520rpx;
					height: 520rpx;
					border-radius: 5px;
				}

				text {
					font-size: 30rpx;
					line-height: 60rpx;
				}
			}
		}
	}
</style>
