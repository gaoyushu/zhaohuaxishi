import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Headers from '../Headers';
export default class Comments extends Component {
    constructor(props){
        super(props);
        this.state={
            // datay:[],
            // datan:[],
            data:[]
        }
    }
    componentDidMount(){
        fetch('http://116.62.14.0:8678/check/comment/list')
        .then(res =>{ return res.json() })
        .then(res=>{
            var commentun=res.nocheck;
            for(var i=0;i<res.nocheck.length;i++){
              commentun[i].comtype='未审查';
          }
            var commenty=res.truecom;
            for(var i=0;i<res.truecom.length;i++){
                commenty[i].comtype='审查通过';
            }
            var commentn=res.bancom;
            for(var i=0;i<res.bancom.length;i++){
                commentn[i].comtype='未通过审查';
            }
            var temp=commentun.concat(commentn)
            var ss=temp.concat(commenty);
            for(var i=0;i<ss.length;i++){
                var time =ss[i].comtime;
                var time1=time.split(' ');
                ss[i].time=time1[1];
                var time2=time1[0].split('/');
                var year=time2[2];
                var month=time2[0];
                var day=time2[1];
                ss[i].year=year;
                ss[i].month=month;
                ss[i].day=day;
            }
            this.setState({
                data:ss
            })
        })

        // fetch('http://116.62.14.0:8677/comments')
        // .then(res =>{ return res.json() })
        // .then(res =>{
        //     console.log(res);  
        //      var ss=res.data;
        //      for(var i=0;i<ss.length;i++){
        //          var time =ss[i].comtime;
        //          var time1=time.split(' ');
        //          ss[i].time=time1[1];
        //          var time2=time1[0].split('/');
        //          var year=time2[2];
        //          var month=time2[0];
        //          var day=time2[1];
        //          ss[i].year=year;
        //          ss[i].month=month;
        //          ss[i].day=day;
        //      }
        //      this.setState({
        //          data:ss
        //      })
        // });

      }
    render() {
        return (
            <div>
                    <div className='co-h'>
                        评论管理
                    </div>
                    <div className='co-c'>
                        <table>
                            <tbody>
                                <tr>
                                    <th>评论ID</th>
                                    <th>日记ID</th>
                                    <th>用户ID</th>
                                    <th>评论内容</th>
                                    <th>评论时间</th>
                                    <th>评论状态</th>
                                    <th>审核状态</th>
                                    <th>操作</th>
                                </tr>
                               {this.state.data.map((item,key)=>(
                                    <tr key={key}>
                                        <td>{item.comid}</td>
                                        <td>{item.did}</td>
                                        <td>{item.uid}</td>
                                        <td className='temp2'>{item.comcontent}</td>
                                        <td>{item.year}/{item.month}/{item.day} {item.time}</td>
                                        <td>{item.comstatus}</td>
                                        <td>{item.comtype}</td>
                                        <td>
                                        <Link to={{ pathname: `${'/enter/commentexamine/'+item.comid}` }} key={key}>
                                            <button>审查</button>
                                        </Link>
                                            {/* <button>删除</button> */}
                                        </td>
                                    </tr>
                               ))} 
                                
                                {/* <tr>
                                    <td>2</td>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>1111</td>
                                    <td>2019/12/11</td>
                                    <td>1</td>
                                    <td>
                                        <button>审查</button>
                                        <button>删除</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>1111</td>
                                    <td>2019/12/11</td>
                                    <td>1</td>
                                    <td>
                                        <button>审查</button>
                                        <button>删除</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>1111</td>
                                    <td>2019/12/11</td>
                                    <td>1</td>
                                    <td>
                                        <button>审查</button>
                                        <button>删除</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>1111</td>
                                    <td>2019/12/11</td>
                                    <td>1</td>
                                    <td>
                                        <button>审查</button>
                                        <button>删除</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>1111</td>
                                    <td>2019/12/11</td>
                                    <td>1</td>
                                    <td>
                                        <button>审查</button>
                                        <button>删除</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>1111</td>
                                    <td>2019/12/11</td>
                                    <td>1</td>
                                    <td>
                                        <button>审查</button>
                                        <button>删除</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>1111</td>
                                    <td>2019/12/11</td>
                                    <td>1</td>
                                    <td>
                                        <button>审查</button>
                                        <button>删除</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>1111</td>
                                    <td>2019/12/11</td>
                                    <td>1</td>
                                    <td>
                                        <button>审查</button>
                                        <button>删除</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>1111</td>
                                    <td>2019/12/11</td>
                                    <td>1</td>
                                    <td>
                                        <button>审查</button>
                                        <button>删除</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>1111</td>
                                    <td>2019/12/11</td>
                                    <td>1</td>
                                    <td>
                                        <button>审查</button>
                                        <button>删除</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>1111</td>
                                    <td>2019/12/11</td>
                                    <td>1</td>
                                    <td>
                                        <button>审查</button>
                                        <button>删除</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>1111</td>
                                    <td>2019/12/11</td>
                                    <td>1</td>
                                    <td>
                                        <button>审查</button>
                                        <button>删除</button>
                                    </td>
                                </tr> */}
                            </tbody>
                        </table>
                    </div>
                {/* </div> */}
            </div>
        )
    }
}
