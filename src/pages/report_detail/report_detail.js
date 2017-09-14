//report_Detail.js
import React,{ Component } from 'react';
import "./report_detail.css";
import { ajax } from '../../service/base_service';
import { getTaskSubjectList } from '../../service/app_service';
export default class Report extends Component{
	constructor(props){
		super(props);
		this.state = {
			acountDate:'2017-09-01 06:00至2017-10-01',
			acountGetFormMachine: '8767.00',
			acountGetFromMe: '7000.00',
			ServiceCharge: '42.00',
			getMoney: '6958.00'
		}
	}

	componentDidMount(){
		//this.fetchData();
		//let id = this.props.match.params.id;
		/**
		 *	@fetchData 处理接口数据
		 */
	}
	// fetchData(){
	// 	//用ajax的封装可以请求到数据（备用）
	//     //let taskSubjectId = this.props.match.params.id;
 //        let keywords = '北京';
 //        let city = 110000;
 //        let page_size = 1;
 //        let curr_location = '116.434619,39.937819';
 //        getTaskSubjectList(keywords,city,page_size,curr_location).then(res => {
 //            console.log('getTaskSubjectList',res);
 //            res = JSON.parse(res);
 //            // this.setState({
 //            //     compoleteNumber:res.total,
 //            //     numberList:res.rows

 //            // })
 //        });
	// }
	render(){
		return (
			<div className="report_Detail">
				<div className="report_date">
					<p className="center date_scope">对账日期范围</p>
					<p className="center date_now">{ this.state.acountDate }</p>
				</div>
				<ul className="account_list">
					<li className="item item_border">
						<span className="left item_name">机器入账</span>
						<span className="right item_price">{ this.state.acountGetFormMachine }</span>
					</li>
					<li className="item">
						<span className="left item_name">我的收益</span>
						<span className="right item_price">{ this.state.acountGetFromMe }</span>
					</li>
					<li className="item">
						<span className="left item_name">手续费</span>
						<span className="right item_price">{ this.state.ServiceCharge }</span>
					</li>
					<li className="item">
						<span className="left item_name reality">实际到账</span>
						<span className="right item_price">{ this.state.getMoney }</span>
					</li>
				</ul>
				<div className="services">
					<p className="center">如对账单有疑问，请拔打</p>
					<p className="center">星糖服务电话：88888888</p>
				</div>
			</div>
		)
	}
}