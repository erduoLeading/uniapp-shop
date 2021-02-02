const baseUrl = "https://www.fastmock.site/mock/7b1466d9f83e650ad3d23692d4010dbd/test"
export const mRequest = ({url,method,data,}) => {
			console.log(`${baseUrl}url`)
	return new Promise((resolve, reject)=> {
		uni.request({
			method: method || "GET",
			data: data || {},
			url: `${baseUrl}${url}`,
			success(res) {
				if(res.statusCode !== 200 || res.data.code !== 0) {
					return uni.showToast({
						title: "获取数据失败",
						icon: 'none'
					})
				}
				resolve(res.data)
			},
			fail(err) {
				uni.showToast({
					title:"获取数据失败",
					icon: 'none'
				})
				reject(err)
			}
		})
	})
}