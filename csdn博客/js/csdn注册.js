var vm = new Vue({
	el:"#app",
	data:{
		nowUserName:"",
		nowPassword:"",
		nowPhone:"",
	},
	methods:{
		register:function(){
			var that = this;
			// var flag = false;
			var nowNa = this.nowUserName;
			var nowPas = this.nowPassword;
			var nowPh = this.nowPhone;
			if(nowNa == "" || nowPas == "" || nowPh == ""){
				alert("输入的用户名密码或者电话号码不能为空！");
			}else{
				$.ajax({
					url:"http://blog.com/api/user/doReg",
					type:"post",
					dataType:"json",
					data:{
						uname:nowNa,
						password:nowPas,
						phone:nowPh,
					},
					success:function(res){
						if(res.error_code == 0){
							alert("注册成功！");
							location.href = './CSDN登录.html';
						}else{
							alert("注册失败！");
						}
					},
			    });
			}
		},
	},
})