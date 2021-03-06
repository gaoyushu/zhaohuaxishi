import React, { Component } from 'react'
import { NavBar, Icon, Tabs } from 'antd-mobile';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';
import moment from 'moment';

export default class ApplyMy extends Component {
   
    // constructor(){
    //     super();
    //     this.state={
    //         value:'确认',
    //         // backgroundColor:'#fff',
    //         color:'#000',
    //         backgroundImage: 'linear-gradient(to right, #fff , #fff)',
    //         path:'/apply'
    //     }
    // }
    // click=()=>{
    //     this.setState({
    //         value:'申请成功',
    //         // backgroundColor:'#8bcca1',
    //         color:'#fff',
    //         backgroundImage: 'linear-gradient(to right, #8bcca1 , #57a099)'
    //     },()=>{
    //         setTimeout(function(){
    //             window.location.href = "http://localhost:3000/sentenceYou";
    //         }, 3000)
    //     })
    // }
    render() {
        return (
            <div className='comment'>
                <div style={{width:'100%',height:'50px',position:'fixed',zIndex:'1000',backgroundImage: 'linear-gradient(to right, #8bcca1 , #57a099)',color:'#fff'}}>
                <Link to='/sentenceYou'>
                            <span style={{textDecoration:'none',color:'#fff',fontWeight:'bold',fontSize:'30px',float:'left'}}>{`<`}</span>
                        </Link>
                </div>
                <div style={{width:'100%',height:40,marginTop:50,backgroundColor:'#fff',textAlign:'center',lineHeight:'40px'}}><p>申请理由</p></div>
                <textarea rows="13" cols="30" className='comment-area'></textarea>
                <Link to='/exdiary'><button className='comment-but' style={{backgroundImage:'linear-gradient(to right, #8bcca1 , #57a099)',border:'0px',color:'#fff'}}>接受</button></Link>
            </div>   
        )
    }
}
