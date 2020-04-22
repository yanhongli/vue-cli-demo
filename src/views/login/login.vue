<template>
	<el-row class='login unauth-bg' type='flex' justify='end'>
		<el-row type='flex' align='middle'>
			<el-card class='card'>
				<el-row type='flex' align='middle' justify='center' style='margin-bottom: 20px;'>
					登录平台
				</el-row>
				<el-form ref='formRef' :model='formData' :rules='formRules'>
					<el-form-item prop='name'>
						<el-input placeholder='请输入用户名' v-model='formData.name' />
					</el-form-item>
					<el-form-item prop='pwd'>
						<el-input placeholder='请输入密码' v-model='formData.pwd' />
					</el-form-item>
					<el-form-item prop='code'>
						<el-row type='flex'>
							<el-input style='width: 100px;' placeholder='请输入验证码' v-model='formData.code' />
							<img style='margin: 0 15px;' :src='codeLink' />
							<a href='javascript:void(0)' @click="codeRandomHandle">换一张</a>
						</el-row>
					</el-form-item>
					<el-form-item prop='check'>
						<el-row type='flex'>
							<el-checkbox v-model='formData.check'>同意用户协议</el-checkbox>
						</el-row>
					</el-form-item>
					<el-form-item>
						<el-button style='width: 100%' type='primary' @click='login'>登录</el-button>
					</el-form-item>
					<el-form-item>
						<el-row type='flex'>
							<router-link to="/pwd">忘记密码</router-link>	
						</el-row>						
					</el-form-item>
				</el-form>
			</el-card>
		</el-row>
	</el-row>
</template>

<script>
	export default {
		data() {
			return {
				formData: {
					name: '',
					pwd: '',
				},
				formRules: {
					name: [{
						required: true,
						trigger: 'blur',
						message: '用户名不能为空'
					}],
					pwd: [{
						required: true,
						trigger: 'blur',
						message: '密码不能为空'
					}],
					code: [{
						required: true,
						trigger: 'blur',
						message: '验证码不能为空'
					}],
					check: [{
						validator: (r, v, callback) => {
							if (v) {
								callback()
							} else {
								callback(new Error('请勾选用户协议'))
							}
						},
					}]
				},
				codeRandom: Math.random()
			}
		},
		computed: {
			codeLink() {
				return `http://qa.e.163.com/user/open/api/v1/user/getVerifyCode?r=${this.codeRandom}`
			}
		},
		methods: {
			login() {
				this.$refs.formRef.validate((f) => {
					console.log(f)
				})
			},
			codeRandomHandle() {
				this.codeRandom = Math.random()
			}
		}
	}
</script>

<style scoped lang="scss">
	.login {
		.card {
			width: 450px;
			margin-right: 160px;
		}
	}
</style>
