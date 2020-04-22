<template>
	<el-row class='unauth-bg' type='flex' align='middle' justify='center'>
		<el-card style='width: 450px;'>
			<el-steps :active="active" finish-status="success" style='margin-bottom: 15px;'>
				<el-step title="邮箱找回"></el-step>
				<el-step title="重置密码"></el-step>
				<el-step title="完成"></el-step>
			</el-steps>
			<el-form v-if='active === 0' label-width='80px' ref='emailFormRef' :model='emailFormData' :rules='emailFormDataRules'>
				<el-form-item prop='account' label='用户名'>
					<el-input type='text' v-model='emailFormData.account' />
					<el-row type='flex'>

					</el-row>
				</el-form-item>
				<el-form-item prop='email' label='联系邮箱'>
					<el-input type='text' v-model='emailFormData.email' />
					<el-row type='flex'>

					</el-row>
				</el-form-item>
				<el-form-item prop='code' label='验证码'>
					<el-row type='flex'>
						<el-input type='text' v-model='emailFormData.code' />
						<el-button>获取验证码</el-button>
					</el-row>
				</el-form-item>
				<el-form-item>
					<el-button type='primary' @click='next(0)' style='width: 100%'>下一步</el-button>
				</el-form-item>
			</el-form>
		</el-card>
	</el-row>
</template>

<script>
	export default {
		data() {
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
				}
			}
		},
		methods: {
			next(v) {
				this.active = v + 1;
			}
		}
	}
</script>

<style>
</style>
