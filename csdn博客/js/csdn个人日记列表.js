var vm = new Vue({
	el:"#app",
	data:{
        my_blog_lists:[], 
	},
	mounted:function(){
		this.getList();
	},
	methods:{
		getList:function(){
			var that = this;
			var user_id = localStorage.getItem("user_id");
			$.ajax({
				"url":"http://blog.com/api/blog/myBlog",
				"type":"post",
				"dataType":"json",
                "data":{
                	"user_id":user_id,
                },
                success:function(res){
                    if(res.error_code == 0){
                    	that.my_blog_lists = res.data.my_blog_lists;
                    }else{
                    	alert(res.message);
                    }
                },
			})
		},
		deleteBlog:function(item){
			var that = this;
			var user_id = localStorage.getItem("user_id");
			$.ajax({
				"url":"http://blog.com/api/blog/del",
                "type":"post",
                "dataType":"json",
                "data":{
                    "user_id":user_id,
                	"blog_id":item.id,
                },
                success:function(res){
                    if(res.error_code == 0){
                        alert("删除成功！");
                        that.my_blog_lists.forEach(function(i,index){
                            if( item.id == i.id ){
                            	that.my_blog_lists.splice(index,1);
                            }
                        });
                    }else{
                    	alert(res.message);
                    }
                },
			});
		},
		editBlog:function(item){
            window.location.href = "./CSDN写博客.html?id="+item.id;
		},
	},
})