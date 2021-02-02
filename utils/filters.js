const filters = {
	// 格式化时间为 xxxx-xx-xx格式
	formatDate(data) {
		const date = new Date(data)
		const year =   date.getFullYear() 
		const month = date.getMonth() < 10 ? (date.getMonth() + 1).toString().padStart(2, '0') : date.getMonth()
		const day = date.getDate() < 10 ? date.getDate().toString().padStart(2, '0') :  date.getDate()
		return  year + '-' + month + '-' + day
	}
}


export default filters
