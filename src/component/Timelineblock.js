import React, {PureComponent} from 'react'
import styles from './Timelineblock.css'
import Timelineheader from './Timeheader'

class Timelineblock extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
          start: this.props.start,
          end: this.props.end,
          coords: this.props.defaultValue,
          style:{width:'100px',left:'100px'},
          hover:false,
        };
      }
    componentDidMount(){

    }
    componentWillReceiveProps(nextProps) {
        if (typeof nextProps.startCoords!=="undefined"){
            console.log(nextProps.startCoords);
            this.setState({coords:nextProps.startCoords},() => {
                this.setState({style:this.getStyle()})
            });
        }
      }  
    getWidthFromData(){
        var dateStart = new Date(this.state.start);
        var dateEnd = new Date(this.state.end);
        var hStart=dateStart.getHours();
        var mStart=dateStart.getMinutes();
        var hEnd=dateEnd.getHours();
        var mEnd=dateEnd.getMinutes();
        var dif=hEnd-hStart+(mEnd/60)-(mStart/60);

        var hourWidth=this.state.coords.width;
        var temp=dif*hourWidth;
        console.log(dif);
        return temp+'px';
    }
    getLeftFromData(){
        var hourWidth=this.state.coords.width;
        var date = new Date(this.state.start);

        var hours=date.getHours();
        var minutes=date.getMinutes();

        var temp = hours-8;
        var calculatedOffset=temp*hourWidth+hourWidth/60*minutes;
        return calculatedOffset;
    }
    getStyle() {
        return {
            width: this.getWidthFromData(),
            left: this.getLeftFromData()
        }
    }
    showInfo(){
        alert(this.state.start);
    }
    handleMouseIn() {
        this.setState({ hover: true })
      }
      handleMouseOut() {
        this.setState({ hover: false })
      }  
    render() {
        const tooltipStyle = {
            display: this.state.hover ? 'block' : 'none'
          }
        return(
            <div>
            <div onMouseOver={this.handleMouseIn.bind(this)} onMouseOut={this.handleMouseOut.bind(this)} style={this.state.style} className={styles.full}></div>
            <div style={tooltipStyle} className={styles.statusRollup}>
                                <div className={styles.buttonarrow}></div>
                                <div className={styles.mnwrap}>
                                    <p className={styles.meetingname}>Рассуждения о высоком.</p>
                                </div>
                                <p className={styles.meetinginfo}>14 декабря 8:00 - 9:00 · Ржавый фред</p>
                                <div className={styles.usersinfo}>
                                    <img src=""/>
                                    <div className={styles.unwrap}>
                                        <p className={styles.username}>Дарт вейдер<span className={styles.usercount}> и 12 участников</span></p>
                                    </div>
                                </div>
                            </div>
            </div>
        )
    }
}

export default Timelineblock