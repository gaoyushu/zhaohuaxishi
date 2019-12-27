import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom';
export default class Anonymous extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
      }
      componentDidMount(){
        fetch('http://116.62.14.0:8666/chat/exchange/'+localStorage.getItem('token'))
        .then(res =>{ return res.json() })
        .then(res =>{
             console.log(res); 
             this.setState({
                data:res.data

            })
        });

      }
    render() {
        return (
            <div>
                <div className='f-headers'>
                <Link to='/exchange'><div style={{width:'10%',lineHeight:'45px',float:'left'}}> 
                            <span style={{float:'right',textDecoration:'none',color:'#fff',fontWeight:'bold',fontSize:'30px'}}>{`<`}</span>
                       </div> </Link>
                        <p style={{width:'80%',float:'left',paddingRight:'10%',textAlign:'center',fontSize:'17px',lineHeight:'50px'}}>匿名交换列表</p>
                    
                </div>
                {/* <div className='f-choise'>
                    <div className='f-but1'>
                        匿名
                    </div>
                    <Link to='/open'>
                        <div className='f-but2'>
                            公开
                        </div>
                    </Link>    
                </div> */}
                {
                this.state.data=="匿名列表为空或获取好友失败，后端错误，请联系管理员！"
                ?<div></div>
                :this.state.data.map((item,key)=>(
                        <Link to={{
                            pathname:'/exdiary',
                            state:{
                                shortdes_id:item.shortdes_id
                            }
                        }}><div className='f-p'>
                            <div className='f-p-h'>
                                <img src='http://116.62.14.0:8666/api/image/5' />
                            </div>
                            <div className='f-p-t'>
                                朝花夕拾
                            </div>
                            <div className='f-p-y'>
                                {item.shortdes}
                            </div>
                        </div></Link>
                    ))
                
                
                }
                {/* <div className='f-p'>
                    <div className='f-p-h'>
                        <img src='src/images/logo.png' />
                    </div>
                    <div className='f-p-t'>
                        朝花夕拾
                    </div>
                    <div className='f-p-y'>
                        一句话：只要你主动，我们就会有故事
                    </div>
                </div>
                <div className='f-p'>
                    <div className='f-p-h'>
                        <img src='src/images/logo.png' />
                    </div>
                    <div className='f-p-t'>
                        朝花夕拾
                    </div>
                    <div className='f-p-y'>
                        一句话：只要你主动，我们就会有故事
                    </div>
                </div>
                <div className='f-p'>
                    <div className='f-p-h'>
                        <img src='src/images/logo.png' />
                    </div>
                    <div className='f-p-t'>
                        朝花夕拾
                    </div>
                    <div className='f-p-y'>
                        一句话：只要你主动，我们就会有故事
                    </div>
                </div> */}
            </div>
        )
    }
}
