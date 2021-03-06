import React, { Component } from 'react'
import Headers from './Headers';
import Siders from './Siders';
import System from './content/System';
import User from './content/User';
import Diary from './content/Diary';
import Comments from './content/Comments';
import PictureExamine from './content/Pictureexamine';
import DiaryExamine from './content/Diaryexamine';
import CommentExamine from './content/Commentexamine';
import Home from './content/Home';
import { HashRouter as Router,Route,Link} from 'react-router-dom';
import pubsub from 'pubsub-js'
import Picture from './content/Picture';

export default class Enter extends Component {
    componentDidMount(){
        pubsub.subscribe('token',(msg,data)=>{
          console.log(data);
      })
    }

    render() {
        return (
            // <div style={{width:'100%',height:'100%',position:'fixed',background:'ghostwhite'}}>
            <div>
                <div className='siders'>
                    <Siders/>
                </div>
                <div className='headers'>
                    <Headers />
                </div>
                <div className='contents'>
                    <Route exact path={this.props.match.url} component={Home}/>
                    <Route path={this.props.match.url+`/home`} component={Home}/>
                    <Route path={this.props.match.url+`/system`} component={System}/>
                    <Route path={this.props.match.url+`/user`} component={User}/>
                    <Route path={this.props.match.url+`/diary`} component={Diary}/>
                    <Route path={this.props.match.url+`/comments`} component={Comments}/>
                    <Route path={this.props.match.url+`/pictureexamine/:id`} component={PictureExamine}/>
                    <Route path={this.props.match.url+`/diaryexamine/:id`} component={DiaryExamine}/>
                    <Route path={this.props.match.url+`/commentexamine/:id`} component={CommentExamine}/>
                    <Route path={this.props.match.url+`/picture`} component={Picture}/>
                </div>
            </div>
        )
    }
}
