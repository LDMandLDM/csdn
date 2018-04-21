var vm = new Vue({
		el:"#app",
		data:{
			lists:[],
		},
		mounted:function(){
			this.getData();
		},
		methods:{
			getData:function(){
				var that = this;
				$.ajax({
					"url":"http://blog.com/api/collect/lists",
					"type":"post",
					"dataType":"json",
					"data":{
						"user_id":localStorage.getItem("user_id"),
					},
					success:function(res){
                        that.lists = res.data.blog_lists;
					}
				});
			},
		},
	});