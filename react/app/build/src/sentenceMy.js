import React, { Component } from 'react'
import { NavBar, Icon, Tabs } from 'antd-mobile';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';

export default class SentenceMy extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[],
            value:''
        }
      }
    componentDidMount(){
        console.log(this.props.location.state.shortdes_id);
        var url='http://116.62.14.0:8666/change/detail/'+this.props.location.state.shortdes_id+'/'+localStorage.getItem('token');
        console.log(url);
        fetch('http://116.62.14.0:8666/change/detail/'+this.props.location.state.shortdes_id+'/'+localStorage.getItem('token'))
        .then(res =>{ return res.json() })
        .then(res =>{
             console.log(res); 
             this.setState({
                data:res.data
    
            },()=>{
                    if(res.data.dstatus=='true'){
                        this.setState({
                        value:'进行中'
                        })
                    }else{
                        this.setState({
                        value:'已完成'
                        })
                    }
                }
            
            
            )
        });
    
      }
    render() {
        return (
            
                <div className='comment' style={{backgroundColor:'#fff'}}>
                    <div style={{width:'100%',height:'50px',position:'fixed',zIndex:'1000',backgroundImage: 'linear-gradient(to right, #8bcca1 , #57a099)',color:'#fff'}}>
                            <Link to='/sentenceList'>
                                <span style={{marginLeft:10,lineHeight:'45px',width:'20%',textDecoration:'none',color:'#fff',fontWeight:'bold',fontSize:'30px',float:'left'}}>{`<`}</span>
                            </Link>
                    </div>
                    <div style={{marginTop:70,width:'100%',height:70,display:'table',position:'relative'}}>
                        <div className='exchange-touxiang' style={{transform:'translate(-50%)',position:'absolute',left:'50%',width:70,height:70}}>
                            <img src={'http://116.62.14.0:8666/api/image/'+this.state.data.uimage} style={{width:70,height:70}}/>
                        </div>
                    </div>
                    <div style={{width:'100%',backgroundColor:'#fff',marginTop:0,paddingTop:5}}>
                        <div style={{fontWeight:600,width:'100%',paddingBottom:15,marginTop:10,fontSize:'17px',textAlign:'center'}}>
        <p>{this.state.data.shortdes}</p>
                        </div>
        <div style={{width:'100%',textAlign:'center',fontSize:'14px',color:'#ccc'}}><p>{this.state.data.dtime}</p></div>
                        <div style={{width:'100%',marginTop:15}}>
        <p style={{lineHeight:'25px',paddingTop:0,paddingLeft:25,paddingRight:25,paddingBottom:10}}>{this.state.data.longdes}</p>
                        </div>
        <div style={{width:'100%'}}><p style={{color:'#ccc',float:'right',marginRight:30,fontSize:'14px'}}>{this.state.value}</p></div>
                    </div>
                </div>
           
        )
    }
}
