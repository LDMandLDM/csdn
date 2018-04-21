var vm = new Vue({
	el:'#app',
	data:{
    blog_lists:[],
	},
	mounted:function(){
		this.getData();
	},
	methods:{
		getData:function(){
			var that = this;
			$.ajax({
				'url':"http://blog.com/api/index/index",
				'type':"get",
				'dataType':"json",
				success:function(res){
					that.blog_lists = res.data.blog_lists;
				},
			});
		},
	},
})