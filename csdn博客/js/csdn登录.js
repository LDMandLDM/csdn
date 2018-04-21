var vm = new Vue({
	el:"#app",
	data:{
		nowUserName:"",
		nowPassword:"",
		user:{},
	},
	mounted:function(){},
	methods:{
		login:function(){
			var nowNa = this.nowUserName;
			var nowPas = this.nowPassword;
			var that = this;
			if(nowNa == "" || nowPas == ""){
				alert("登录失败！");
			}else{
                $.ajax({
					url:"http://blog.com/api/user/doLogin",
					type:"post",
					dataType:"json",
					data:{
						phone:nowNa,
						password:nowPas,
					},
					success:function(res){
	                    that.user = res.data.user;
	                    if(res.error_code == 0){
	                    	alert("登录成功！")
	                    	window.localStorage.setItem("user_id",res.data.user.userid);
	                        window.localStorage.setItem("user_name",res.data.user.username);
	                        window.localStorage.setItem("user_img",res.data.user.userimg);
	                        location.href = './CSDN首页.html';
	                    }else{
	                    	alert("用户名或密码不正确");
	                    };
	                    console.log(res);
					},
			    });
			};
		},
	},
})