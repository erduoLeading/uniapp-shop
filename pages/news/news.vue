<template>
	<newsItem :data="newsList" @getNewsDetail="fGetNewsDetail"/>
</template>

<script>
	import newsItem from '../../components/news/newsItem.vue'
	export default {
		data() {
			return {
				newsList: []
			}
		},
		components: {
			newsItem
		},
		methods: {
			async getNewsList() {
				const {data:{newsList}} = await this.$api.getNewsList()
				this.newsList = newsList
			},
			// 跳转到新闻详情页面
			fGetNewsDetail(newsId) {
				uni.navigateTo({
					url:`/pages/newsDetail/newsDetail?newsId=${newsId}`,
			
				})
			}
		},
		mounted() {
			this.getNewsList()
		}
	}
</script>

<style lang="scss">
.news{
	.news_item{
		display: flex;
		padding: 5px 10px;
		border-bottom: 3px solid $shop-color;
		image{
			width: 300rpx;
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
}
</style>
