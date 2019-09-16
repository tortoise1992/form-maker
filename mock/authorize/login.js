import account from '../../config/account'
import nav from '../../config/nav'
export default {
    'POST /authorize/login': (req, res) => {
        const { username, password } = req.body
        // 遍历用户配置
        let user=account.find(item=>item.username === username)
        if(user){
            if(user.password === password){
                res.send({
                    success: true,
                    msg: '成功',
                    obj: {
                        username,
                        token:'dalkdhadhkahdfafhaifdan',
                        menu:nav
                    }    
                })
            }else{
                res.send({
                    success:false,
                    msg:'用户名或者密码错误',
                    obj:null
                })
            }
        }else{
            res.send({
                success:false,
                msg:'用户不存在',
                obj:null
            })
        }        
    }
}