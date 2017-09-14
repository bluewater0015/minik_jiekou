//'message_Inform.js
import React,{ Component } from 'react';
import './news_inform.css';
import informList from '../../services/app_services';
import 'whatwg-fetch';
import 'es6-promise';

export default class Inform extends Component{
	constructor(props){
		super(props);
		this.state = {
			list:[{
				id: 1,
				title:"机器警报",
				content:'机器离线',
				time:'2017-09-01 23:00',
				isRead: true
			},{
				id: 2,
				title:"机器警报2",
				content:'机器离线2',
				time:'2016-09-01 23:00',
				isRead:false
			}]
		}
	}
	
	
	componentDidMount(){
		//uri=admin/alliance/messages
		/**
		 *	@informList 处理消息通知页面接口数据
		 *	@prama{}
		 */
		informList('uri=admin/alliance/messages').then(res=>{
			return res.json()
		}).then(data=>{
			console.log(data);
		}).catch(e=>{
			console.log('informList数据请求失败！')
		})
	}

	/**
	 *	@newsInformData 处理消息通知页面接口数据 用纯fetch的发方式
	 */
	// newsInformData(){
	// 	fetch('http://result.eolinker.com/Xb4JaRN2399c52479960e047e9f2ba729d77c3c2ba747cf?uri=admin/alliance/messages',{
	// 		method:'GET',
	// 		headers:{
	// 			'Accept': 'application/json',
	// 			'Content-type':'application/json'
	// 		},
	// 		//mode: 'cors'
	// 	})
	// 	.then((res) => {
	// 		return res.json()
	// 	}).then(data=>{
	// 		console.log('newsInformData',data);
	// 		this.setState({
				
	// 		})
	// 	}).catch(err=> {
	// 		console.log(err)
	// 	})
	// }


	/**
	 *	@itemEvent 获取消息通知页面的ID
	 *	@param {number} 参数index 传索引值
	 */
	itemEvent(index){
		let id = this.state.list[index].id;
		this.props.history.push(`/news_Detail/:${id}`);
		this.setState({
			//isRead: !this.state.list[index].isRead
		})
	}

	render(){
		return (
			<div className="news_Inform">
				{
					this.state.list.map((item,index) => {
						return(
							<div className="inform marginTop" key={index}>
								<div className="triangle_up" style={{ borderBottomColor : item.isRead ? '#FEE300': '#57D5E7' }}>
									<p className="isRead justify-content">{item.isRead ? '已读' : "未读"}</p>
								</div>
								<div className="inform_list" onClick={()=>{this.itemEvent(index)}}>
									<p className="machine_alarm  border_bottom">{item.title}</p>
									<p className="marginTop">
										<span>警报时间：</span>
										<span>{ item.time }</span>
									</p>
									<p className="marginTop">
										<span>警报内容：</span>
										<span>{ item.content }</span>
									</p>
								</div>
							</div>
						) 
					})
				}
				
			</div>
		)
	}
}