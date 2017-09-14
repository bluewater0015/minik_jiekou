//news_Detail.js
import React,{ Component } from 'react';
import './news_detail.css';
import getList from '../../services/app_services';
export default class News extends Component{
	constructor(props){
		super(props);
		this.state = {
			machine_code:'YT0010102',
			time:'2017.09.12 12:13',
			location:'北京市西直门'
		}
	}
	componentDidMount(){
		/**
		 *	@fetchData 对请求到的接口数据进行处理
		 *
		 *
		 */
		// let id = this.props.match.params.id;
		// getList(id).then(res => {
		// 	this.setState({
		// 		machine_code:res.data.machine_code,
		// 		time:res.data.time,
		// 		code:res.data.code
		// 	})
		// })
	}
	
	render(){
		console.log(this.props);
		return (
			<div className="news_Detail">
				<div className="news_container">
					<ul className="news_list">
						<li className="alarm_date">
							<span>警报时间：</span>
							<span>{this.state.time}</span>
						</li>
						<li className="stage_code">
							<span>点位：</span>
							<span>{this.state.location}</span>
						</li>
						<li className="machine_code">
							<span>机器码：</span>
							<span>{this.state.machine_code}</span>
						</li>
						<li className="alarm_content">
							<span>
								警报内容：
							</span>
							<span>
								机器离线
							</span>
							<p className="tips_content">
								在正常营业时间内，机器连续离线1小时,请检查机器运营状态是否正常
							</p>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}