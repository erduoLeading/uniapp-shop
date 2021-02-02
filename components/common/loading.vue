<template>
	<view class="loading" v-show="list.length == 0" >
		<text>
			loading....
		</text>
	</view>
</template>

<script>
export default {
	props: ['list', 'loadingStyle']
}
</script>

<style lang="scss">
	.loading {
		position: relative;
		width: 79px;
		z-index: 999;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text {
			height: 21px;
			color: #FFFFFF;
			font-weight: bold;
		}
	}
</style>
