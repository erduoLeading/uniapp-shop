import {mRequest} from '../utils/mRequest.js'


const api = {
	/*
		获取首页轮播图
	
	*/
   // 获取首页轮播图
	getLunbo: (data) => {
		return mRequest({url:'/api/getLunBo', data})
	},
	// 获取首页商品信息
	getGoods: (data) => {
		return mRequest({url:'/api/getGoods', data})
	},
	// 获取商品详细信息 
	getGoodsDetail: (data) => {
		return mRequest({url:'/api/getGoodsDetail', data})
	},
	// 获取图片写真的左侧菜单
	getPicsCate: (data) => {
		return mRequest({url:'/api/getPicsCate', data})
	},
	// 获取图片写真的左侧对应项的具体内容
	getPicsCateItem: (data) => {
		return mRequest({url:'/api/getimages/:cateid', data})
	},
	// 获取资讯列表
	getNewsList: (data) => {
		return mRequest({url:'/api/getNewsList', data})
	},
	// 获取资讯列表详情
	getNewsDetail: (data) => {
		return mRequest({url:'/api/getNewsDetail/:newsId', data})
	}
}



export default  api