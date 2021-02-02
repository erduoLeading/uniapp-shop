<template>
	<view class="news_detail">
		<view class="news_title">
			{{newsDetail.title}}
		</view>
		<view class="info">
			<text>发表时间：{{newsDetail.add_time | formatDate}}</text>
			<text>浏览：{{newsDetail.click}}</text>
		</view>
		<view class="content" >
			<rich-text :nodes="newsDetail.content"></rich-text>
		</view>
	</view>
</template>

<script>
	import filters from '../../utils/filters.js'
	export default {
		data() {
			return {
				newsDetail: {}
			}
		},
		filters: {
			...filters
		},
		methods: {
			async getNewsDetail(newsId) {
				const {data:{newsDetail}} = await this.$api.getNewsDetail({newsId})
				console.log(newsDetail)
				this.newsDetail = newsDetail
			}
		},
		onLoad(options) {
			this.getNewsDetail(options.newsId)
		}
	}
</script>

<style lang="scss">
.news_detail {
	padding: 15rpx;
	.news_title{
		text-align: center;
		font-size: 32rpx;
	}
	.info{
		font-size: 28rpx;
		display: flex;
		justify-content: space-between;
	}
}
</style>