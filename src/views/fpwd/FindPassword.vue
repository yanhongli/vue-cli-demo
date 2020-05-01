<template>
	<el-row class='unauth-bg' type='flex' align='middle' justify='center'>
		<el-card style='width: 450px;'>
			<el-steps :active="active" align-center finish-status="success" style='margin-bottom: 15px;'>
				<el-step title="邮箱找回"></el-step>
				<el-step title="重置密码"></el-step>
				<el-step title="完成"></el-step>
			</el-steps>
			<el-form v-show='active === 0' label-width='80px' ref='emailFormRef' :model='emailFormData' :rules='emailFormDataRules'>
				<el-form-item prop='account' label='用户名'>
					<el-input type='text' v-model='emailFormData.account' />
				</el-form-item>
				<el-form-item prop='email' label='联系邮箱'>
					<el-input type='text' v-model='emailFormData.email' />
				</el-form-item>
				<el-form-item prop='code' label='验证码'>
					<el-row type='flex'>
						<el-input type='text' v-model='emailFormData.code' class='validate-code-input' />
						<el-button>获取验证码</el-button>
					</el-row>
				</el-form-item>
				<el-form-item>
					<el-button type='primary' @click='next()' style='width: 100%'>下一步</el-button>
				</el-form-item>
			</el-form>
			<el-form v-show='active === 1' label-width='80px' :model='pwdFormData' :rules='pwdFormRules' ref='pwdFormRef'>
				<el-form-item prop='pwd' label='新密码'>
					<el-input type='password' v-model='pwdFormData.pwd' />
				</el-form-item>
				<el-form-item prop='checkPwd' label='确认密码'>
					<el-input type='password' v-model='pwdFormData.checkPwd' />
				</el-form-item>
				<el-form-item>
					<el-button type='primary' @click='next()' style='width: 100%'>下一步</el-button>
				</el-form-item>
			</el-form>
			<el-form v-show='active === 2'>
				<el-form-item>
					<div>恭喜您，密码重置成功</div>
					<div>5秒后自动跳转到登录页面</div>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" style="width: 100%;">立即登录</el-button>
				</el-form-item>
			</el-form>
		</el-card>
	</el-row>
</template>

<script>
	export default {
		data() {
			let validatePass = (r, v, callback) => {
				if (v !== this.pwdFormData.pwd) {
					callback(new Error('两次输入密码不一致'))
				} else {
					callback()
				}
			}
			return {
				active: 0,
				emailFormData: {
					account: '',
					email: '',
					code: ''
				},
				emailFormDataRules: {
					account: [{
						required: true,
						message: '用户名不能为空',
						trigger: 'blur'
					}],
					email: [{
						required: true,
						message: '邮箱不能为空',
						trigger: 'blur'
					}],
					code: [{
							required: true,
							message: '验证码不能为空',
							trigger: 'blur'
						},
						{
							len: 6,
							message: '验证码6位',
							trigger: 'blur'
						}
					]
				},
				pwdFormData: {
					pwd: '',
					checkPwd: ''
				},
				pwdFormRules: {
					pwd: [{
						required: true,
						message: '请输入密码',
						trigger: 'blur'
					}],
					checkPwd: [{
						required: true,
						message: '请输入确认密码',
						trigger: 'blur'
					}, {
						validator: validatePass,
						trigger: 'blur'
					}]
				}
			}
		},
		methods: {
			next() {
				let formRefs = ['emailFormRef', 'pwdFormRef']
				this.$refs[formRefs[this.active]].validate((invalid) => {
					if (invalid) {
						this.active++;
					}
				})
			}
		}
	}
</script>

<style>
</style>
