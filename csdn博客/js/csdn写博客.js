var vm = new Vue({
	el:"#app",
	data:{
		classify_id:"",
		my_title:"",
		// classify_lists:[],
		// my_blog_info:{},
	},
	mounted:function(){
		var ue = UE.getEditor('container');
		this.getQuery();
		this.getData();
	},
	methods:{
		getUeditorContent: function(){
    	    return UE.getEditor('container').getContent()
    	},
    	getQuery:function(){
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
        },
		release:function(){
			var that = this;
			var nowTitle = this.my_title;
			var nowClassifyId = this.classify_id;
			var nowId = window.localStorage.getItem("user_id");
			$.ajax({
				"url":"http://blog.com/api/blog/doAdd",
				"type":"post",
				"dataType":"json",
				"data":{
					"user_id":nowId,
					"title":nowTitle,
					"content":that.getUeditorContent(),
					"classify_id":nowClassifyId,
				},
				success:function(res){
					if(res.error_code == 0){
						alert("发布成功即将跳转！");
						window.location.href = './CSDN个人日记列表.html'
					}else{
						alert(res.message);
					};
				},
			});
		},
		getData:function(){
    		var that = this;
    		var nowBlogId = this.getQuery().id;
    		var user_id = window.localStorage.getItem("user_id");
    		$.ajax({
    			"url":"http://blog.com/api/blog/add",
    			"type":"get",
    			"dataType":"json",
    			"data":{
    				"user_id":user_id,
    				"blog_id":nowBlogId,
    			},
    			success:function(res){
    				if(res.error_code == 0){
    					that.my_title = res.data.my_blog_info.title;
    					that.classify_id = rea.data.my_blog_info.classify_id;
    				}else{
    					alert(res.error_code);
    				}
    			},
    		});
    	},
		edit:function(){
			var that = this;
			var user_id = window.localStorage.getItem("user_id");
            var nowBlogId  = this.getQuery().id;
			$.ajax({
				"url":"http://blog.com/api/blog/doEdit",
				"type":"post",
				"dataType":"json",
				"data":{
					"user_id":user_id,
					"blog_id":nowBlogId,
					"title":that.my_title,
					"content":that.getUeditorContent(),
					"classify_id":that.classify_id,
				},
				success:function(res){
                    if(res.error_code == 0){
                    	alert("修改成功");
                    	window.location.href = './CSDN个人日记列表.html';
                    }else{
                    	alert(res.message);
                    }
				},
			})
		},
	},
})