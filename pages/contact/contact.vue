<template>
	<view class="contact">
		<image class="img" src="http://www.itcast.cn/2018czydz/images/gywmban.jpg"></image>
		<view class="info">
			<view @click="phone">联系电话：400-618-9090 ( 点击拨打 )</view>
			<view>公司地址：太平洋网络有限公司</view>
		</view>
		<map class="map" :longitude="longitude" :scale="scale" :latitude="latitude" :markers="markers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude: 113.421955,
				latitude: 23.182381,
				scale: 13,
				markers:[
					{
						longitude: 113.421955,
						latitude: 23.182381,
						iconPath: '../../static/icon/hmlogo.png',
						width: 40,
						height: 40
					}
				]
				
			}
		},
		methods: {
			phone() {
				uni.makePhoneCall({
				    phoneNumber: '：400-618-9090' //仅为示例
				});
			}
		}
	}
</script>

<style lang="scss">
.contact{
	.img{
		width: 750rpx;
		height: 320rpx;
	}
	.info{
		padding: 10rpx 20rpx;
		font-size: 30rpx;
		view{
			line-height: 80rpx;
			border-bottom: 1px solid #eee;
		}
	}
	
	.map{
		width: 750rpx;
		height: 750rpx;
	}
}
</style>

