<template>
	<view>
		<view class="news_item" v-for="item in data" :key="item.id"  @click="cSendNewsDetail(item)">
			<image :src="item.img_url"></image>
			<view class="content">
				<view class="tit">{{item.title}}</view>
				<view class="info">
					<text>发表时间：{{item.add_time | formatDate}}</text>
					<text>浏览：{{item.click+123}}次</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import filters from '../../utils/filters.js'
	export default {
		props: ['data'],
		filters:{
			...filters
		},
		methods: {
			cSendNewsDetail(item) {
				this.$emit('getNewsDetail', item.id)
			}
		}
	}
</script>

<style lang="scss">
	.news_item{
		display: flex;
		padding: 5px 10px;
		border-bottom: 1rpx solid $shop-color;
		image{
			max-width: 200rpx;
			min-width: 200rpx;
			height: 150rpx;
		}
		.content {
			padding: 5px 10px;
			position: relative;
			.tit{
				font-size: 30rpx;
			}
			.info{
				font-size: 26rpx;
				position: absolute;
				left: 10px;
				bottom: 5px;
				text:nth-child(2){
					margin-left: 20px;
				}
			}
		}
	}
</style>