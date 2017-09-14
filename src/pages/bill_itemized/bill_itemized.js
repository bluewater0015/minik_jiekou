import React, {Component} from 'react'
import billbg from './images/billbg.png'
import './bill_itemized.css'

const bg = {
    backgroundImage: `url(${billbg})`,
    backgroundSize:'100% 100%',
    color:'#fff',
    textAlign:'center',
    height:'1.6rem'
};
class billItemiezd extends Component {
    constructor(props) {
        super(props)
        const selectDate = props.location.query
        let dateTime;
        if(selectDate !== undefined) {
            dateTime = selectDate
        }else{
            dateTime = new Date()
        }
        this.state = {dateTime:dateTime,clickIndex:-1}
    }
    componentDidMount() {
        this.getMonthWeekDay(this.state.dateTime)
    }
    prevDay(){
       let prevDate = new Date(this.state.dateTime.getTime() - 24*60*60*1000)
       this.getMonthWeekDay(prevDate)
       this.setState({
           dateTime:prevDate
       })
    }
    nextDay(){
        let nextDate = new Date(this.state.dateTime.getTime() + 24*60*60*1000)
        this.getMonthWeekDay(nextDate)
        this.setState({
            dateTime:nextDate
        })
    }
    getMonthWeekDay(dateTime){
        let month, week, day;
        month = dateTime.getMonth()+1
        day = dateTime.getDate()
        week = dateTime.getDay()
        this.setState({
            month:month,week:week,day:day
        })
    }
    toCalender(){
        let path = {
            pathname: '/calender',
            query: this.state.dateTime,
        }
        this.props.history.push(path)
    }
    toIncomeDetail(){
        let path = {
            pathname: '/income_detail',
            query: {machineId:'TY0010022',date:this.state.dateTime},
        }
        this.props.history.push(path)
    }
    spread(){
        this.setState({clickIndex:1})
    }
    render() {
        const {month, week, day, clickIndex} = this.state
        return (
            <div>
                <div style={bg}>
                <div className="bill-date">
                    <div onClick={this.prevDay.bind(this)}>前一天</div>
                    <div onClick={this.toCalender.bind(this)}><img src={require('./images/calender.png')} className="caldener-img"/>{month>9?month:'0'+month}-{day>9?day:'0'+day} 周{week === 0?'日':week}</div>
                    <div onClick={this.nextDay.bind(this)}>后一天</div>
                </div>
                <div className="bill-trade-title">交易流水（元）</div>
                <div className="bill-trade-sum">128.00</div>
                </div>
                <div className="wrap-bill-detail">
                    <ul>
                        <li onClick={this.spread.bind(this)}><div className="bill-detail-flex"><div><img src={require('./images/right.png')} className="bill-right-img"/>北京通州万达</div><div>100.00</div></div>
                            {
                                clickIndex === 1?                    <ul>
                                    <li className="bill-detail-flex" onClick={this.toIncomeDetail.bind(this)}><div className="bill-detail-full"><img src={require('./images/ down.png')} className="bill-mechine-img"/>YT00102010</div><div>80.00<img src={require('./images/index_right.png')} className="bill-index-right"/></div></li>
                                    <li className="bill-detail-flex"><div className="bill-detail-full"><img src={require('./images/ down.png')} className="bill-mechine-img"/>YT00102010</div><div>80.00<img src={require('./images/index_right.png')} className="bill-index-right"/></div></li>
                                </ul>:''
                            }
                        </li>
                        <li><div className="bill-detail-flex"><div><img src={require('./images/right.png')} className="bill-right-img"/>北京通州万达</div><div>100.00</div></div>
                            <ul className="none">
                                <li className="bill-detail-flex"><div><img src={require('./images/ down.png')} className="bill-mechine-img"/>YT00102010</div><div>80.00></div></li>
                                <li className="bill-detail-flex"><div><img src={require('./images/ down.png')} className="bill-mechine-img"/>YT00102010</div><div>80.00></div></li>
                            </ul>
                        </li>
                        <li><div className="bill-detail-flex"><div><img src={require('./images/right.png')} className="bill-right-img"/>北京通州万达</div><div>100.00</div></div>
                            <ul className="none">
                                <li className="bill-detail-flex"><div><img src={require('./images/ down.png')} className="bill-mechine-img"/>YT00102010</div><div>80.00></div></li>
                                <li className="bill-detail-flex"><div><img src={require('./images/ down.png')} className="bill-mechine-img"/>YT00102010</div><div>80.00></div></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        )

    }
}

export default billItemiezd