import React, { Component } from 'react'
import './index.less'
import Logo from './logo.png'
import { Form, Input, Icon, Button ,message} from 'antd'
import {postAction} from '../../axios'
import router from 'umi/router';
const FormItem = Form.Item
class Login extends Component {
    state = {
        username: '',
        password: '',
        loginLoading:false
    }    
    handleLogin=()=>{        
        this.props.form.validateFields((err,values)=>{
            if(!err){
                // 逐一校验
                if(!values.username || values.username === ''){
                    message.error('用户名不能为空')
                    return
                }
                if(!values.password || values.password === ''){
                    message.error('密码不能为空')
                    return
                }
                this.setState({
                    loginLoading:true
                })

                postAction(
                    '/authorize/login',
                    {
                        username:values.username,
                        password:values.password
                    }
                ).then(res=>{
                    this.setState({
                        loginLoading:false
                    })
                    if(res.success){                        
                        localStorage.setItem('userInfo',JSON.stringify(res.obj))
                        message.success('登录成功')
                        router.replace('/designer')
                    }
                }).catch(err=>{
                    this.setState({
                        loginLoading:false
                    })
                })
            }
        })
    }    
   
    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <div className='login-wrapper'>                
                <div className='wrapper'>
                    <div className='logo'>
                        <img src={Logo} alt='logo' />
                    </div>
                    <div className='login'>
                        <Form>
                            <FormItem>
                                {
                                    getFieldDecorator('username', {

                                    })(<Input size='large' prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='请输入用户名'></Input>)
                                }
                            </FormItem>
                            <FormItem>
                                {
                                    getFieldDecorator('password', {

                                    })(<Input type='password' size='large' prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='请输入密码'></Input>)
                                }
                            </FormItem>                              
                           
                            <FormItem>
                                <Button loading={this.state.loginLoading} onClick={this.handleLogin} size='large' style={{ width: '100%' }} type='primary'>登录</Button>
                            </FormItem>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}
Login = Form.create()(Login)
export default Login
