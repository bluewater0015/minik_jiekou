
//机器收入详情页
import React, {Component} from 'react';
import billbg from './images/billbg.png'
import incomebg from './images/incomebg.png'
import './income_detail.css'

const bg = {
    backgroundImage: `url(${billbg})`,
    backgroundSize: '100% 100%',
    color: '#fff',
    textAlign: 'center',
    height: '1.28rem'
};
const incomeBg = {
    backgroundImage: `url(${incomebg})`,
    width:'2.24rem',
    backgroundSize:'100% 100%'
}
export default class Income extends Component {
    constructor(props) {
        super(props);
        const selectDate = props.location.query !== undefined && props.location.query.date !== undefined ?props.location.query.date:new Date()
        this.state={month:selectDate.getMonth()+1,day:selectDate.getDay()}
    }

    render() {
        const { month,day } = this.state
        return (
            <div>
                <div style={bg} className="income-title">
                    <div className="bill-trade-title">{month}月{day}日单机流水（元）</div>
                    <div className="bill-trade-sum">128.00</div>
                </div>
                <div className="wrap-income">
                    <div className="warp-income-time income-top">
                        <div className="wrap-income-detail"><span>09:01</span></div>

                        <div className="wrap-income-detail">09:02</div>

                        <div className="wrap-income-detail">09:03</div>

                        <div className="wrap-income-detail">09:04</div>

                        <div className="wrap-income-detail">09:05</div>

                    </div>
                    <div className="wrap_process">
                        <div className="process_dot"></div>
                        <div className="process_line"></div>

                        <div className="process_dot"></div>
                        <div className="process_line"></div>

                        <div className="process_dot"></div>
                        <div className="process_line"></div>

                        <div className="process_dot"></div>
                        <div className="process_line"></div>

                        <div className="process_dot"></div>
                    </div>
                    <div>
                        <div className="wrap-income-detail">
                            <div style={incomeBg}>
                                <div className="income-detail-bg"><span className="income-detail-title">单曲收入</span><span>6元</span></div>
                            </div>
                        </div>
                        <div className="wrap-income-detail">
                            <div style={incomeBg}>
                                <div className="income-detail-bg"><span className="income-detail-title">单曲收入</span><span>6元</span></div>
                            </div>
                        </div>
                        <div className="wrap-income-detail">
                            <div style={incomeBg}>
                                <div className="income-detail-bg"><span className="income-detail-title">单曲收入</span><span>6元</span></div>
                            </div>
                        </div>
                        <div className="wrap-income-detail">
                            <div style={incomeBg}>
                                <div className="income-detail-bg"><span className="income-detail-title">单曲收入</span><span>6元</span></div>
                                <div className="refund-male">
                                    <div>套餐：15min</div>
                                </div>
                            </div>
                        </div>
                        <div className="wrap-income-detail"><div className="income-detail-bg">开始营业</div></div>
                    </div>
                </div>
            </div>
        )
    }
}