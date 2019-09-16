import React, { Component } from 'react'
import {Menu,Icon} from 'antd'
import Link from 'umi/link'
import Logo from './singleLogo.png'
const SubMenu=Menu.SubMenu
export default class SideMenu extends Component {
  state={
    menu:[]
  }
  componentDidMount = () => {
    if(localStorage.getItem('userInfo')){
      let menu=JSON.parse(localStorage.getItem('userInfo')).menu
      this.setState({
        menu
      })
    }
  }
  renderMenu=(menus)=>{
     return menus.map(item=>{
      if(item.children && item.children.length>0){
        return (          
          <SubMenu key={item.title} title={<span><Icon type={item.icon} />{item.title}</span>}>
              {this.renderMenu(item.children)}
          </SubMenu>)
      }else{
        return (<Menu.Item key={item.url}>
          <Link to={item.url}><Icon type={item.icon} />{item.title}</Link> 
        </Menu.Item>)
      }
    })
  }
  render() {
    return (
      <div>
        <div>
          <img style={{height:60,float:'left',marginTop:2}} src={Logo} alt=''/>
        </div>        

        <Menu
          mode="inline"
          theme="dark"
        >
          {
            this.renderMenu(this.state.menu)
          }
        </Menu>
      </div>
    )
  }
}
