function getQuery(){
	var str = (location.search.length > 0 ? location.search.substring(1) : ''),
	args = {},
	items = str.length ? str.split("&"):[],
	item = null,
	name = null,
	value = null;
	for(i=0;i<items.length;i++){
		item = items[i].split("=");
		name = decodeURIComponent(item[0]);
		value = decodeURIComponent(item[1]);
		if(name.length){
			args[name] = value;
		}
		return args;
    };
};
var vm = new Vue({
	el:'#app',
	data:{
		'contentIsShow':false,
		'readMoreShow':true,
		info:{},
		related_blog:[],
		// blog_info:{},
    },
	mounted:function(){
		var nowId = getQuery().id;
		var userId = window.localStorage.getItem("user_id");
		var data = {
			id:nowId,
			user_id:userId,
		};
		this.getData(data);
	},
	methods:{
		getData:function(dataobj){
			var that = this; 
			$.ajax({
				url:"http://blog.com/api/blog/info",
				type:"get",
				dataType:"json",
				data:dataobj,
				success:function(res){
					that.info = res.data.blog_info;
					that.related_blog = res.data.related_blog;
					if(that.info.collect_status == 0){
                        alert("没收藏") 
					}else if(that.info.collect_status == 1){
						alert("未登录")
					}else if(that.info.collect_status == 0){
						alert("用户没登录");
						window.location.href = "./CSDN登录.html";
					}
				},
			});
		},
		readMoreClick:function(){
            this.contentIsShow = true;
            this.readMoreShow = false;
		},
		clickCollection:function(item){
			var user_id = localStorage.getItem("user_id");
			var that = this;
			$.ajax({
				"url":"http://blog.com/api/collect/add",
				"type":"post",
				"dataType":"json",
				"data":{
					"user_id":user_id,
					"blog_id":getQuery().id,
				},
				success:function(res){
					if(res.error_code == 0){
						alert("收藏成功")
					}else{
						alert(res.message);
					}
				},
			});
		},
		clickIcon:function(){
			location.href = './CSDN首页.html';
		},
	},
})