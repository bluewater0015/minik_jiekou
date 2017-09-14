//home.js
import React,{ Component } from 'react';
import Button from '../../components/button/button';
import Title from '../../components/title/title';
import Price from '../../components/price/price';
import DayPrice from '../../components/day_price/day_price';
import Message from '../../components/message/message';
import './home.css';
import '../../css/common.css';
import homeData from '../../services/app_services';
export default class Home extends Component{
	constructor(props){
		super(props);
		this.state = {
			todayPrice: '128.00',
			yesDayPrice: '200',
			averagePrice: '190',
			messageNumber: '10'
		}
	}

	componentDidMount(){
		homeData('uri=/admin/alliance/index').then(res=>{
			return res.json()
		}).then(data=>{
			console.log('homedata',data);
			this.setState({
				todayPrice: data.todayInCome,
				yesterdayPrice: data.yesterdayInCome,
				averagePrice: data.averageIncome,
				messageNumber: data.messageCount
			})
		}).catch(e=>{
			console.log('homedata数据请求失败！')
		})
	}
	/**
	 *	@homeData 处理首页接口数据
	 */
	// homeData(){
	// 	//console.log('getUrl',${getUrl});
	// 	fetch('http://result.eolinker.com/Xb4JaRN2399c52479960e047e9f2ba729d77c3c2ba747cf?uri=/admin/alliance/index',{
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
	// 		console.log('homedata',data);
	// 		this.setState({
	// 			todayPrice: data.todayInCome,
	// 			yesterdayPrice: data.yesterdayInCome,
	// 			averagePrice: data.averageIncome,
	// 			messageNumber: data.messageCount
	// 		})
	// 	}).catch(err=> {
	// 		console.log(err)
	// 	})
	// }

	render(){
		return (
			<div className="home">
				<div className="home_running">
					<div className="trade_price">
						<Title title="今日交易流水（元)" style={{ height: '18px',color: '#fff'}}/>
						<Price price={this.state.todayPrice} />
					</div>
					<div className="trade_account center" onClick={this.treadEvent.bind(this)}>
						<Button style={{width: '133px',border: '1px solid #fff',color: '#fff'}} title="交易流水明细" />
					</div>
					<div className="date_price flex">
						<DayPrice type="昨日" price={ this.state.yesterdayPrice} style={{borderRight: '1px solid #fff'}}/>
						<DayPrice type="平均" price={ this.state.averagePrice} />
					</div>
				</div>
				<div className="accout_message flex" style={{paddingTop:'20px'}}>
					<Message 
						onClick={() => this.props.history.push('/billing_Report')} 
						src='./src/assets/images/account_report.png' content="账单报告"
						style={{ borderRight: '1px solid #ccc'}}
					/>
					<Message 
						onClick={() => this.props.history.push('/news_Inform')} 
						src='./src/assets/images/news.png' content="消息通知"
					/>
				</div>
			</div>
		)
	}
	
	/**
	 *	@treadEvent 点击交易流水明细按钮跳转到交易流水页
	 */
	treadEvent(){
		this.props.history.push('./billitemized');
	}
}
