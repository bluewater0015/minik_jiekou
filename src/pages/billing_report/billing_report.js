//billing_Report.js

import React,{ Component } from 'react';
import './billing_report.css';
export default class Billing extends Component{
	constructor(props){
		super(props);
		this.state = {
			acountList: [{
				acountId:10001,
				year:2017,
				month:'09月01-09月10',
				price:8888
			},{
				acountId:10002,
				year:2017,
				month:'09月01-09月10',
				price:2222
			},{
				acountId:10003,
				year:2017,
				month:'09月01-09月10',
				price:9999
			}]
		}
	}
	componentDidMount(){
		this.fetchData();
	}
	fetchData(){

	}
	goto(index){
		//alert(index);
		console.log(index);
		const id = this.state.acountList[index].acountId;
		if(id){
			//console.log(id);
			this.props.history.push(`/report_Detail/:${id}`);
			//this.props.history.push(`/news_detail/:${id}`);
		}
	}
	render(){
		return (
			<div className="billing_container">
				<ul className="billing">
					{
						this.state.acountList.map((item,index) => {
							return (
								<li 
									key={index} 
									className="bill_item marginTop"
									onClick={() => {this.goto(index)}}
								>
									<div className="bill_left">
										<div className="date_year">
											<p className="date">{item.month}</p>
											<p className="year">{item.year}年</p>
										</div>
									</div>
									<div className="bill_right flex_end align_items">
										<span>{item.price}¥</span>
									</div>
								</li>
							)
						})
					}
					
				</ul>
				<div className="more center marginTop">
					--没有更多内容了--
				</div>
			</div>
		)
	}
}