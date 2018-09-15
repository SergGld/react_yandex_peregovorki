import React, {PureComponent} from 'react'
import Timeline from './Timeline'
import schema from '../schema'
import styles from './Timelinetable.css'
import Timeheader from './Timeheader'
import Currenttimepointer from './Currenttimepointer'

class Timelinetable extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
          data: this.props.initialData,
          coords:null
        };
      }
      
    componentDidMount(){
        var coords=document.getElementById("first").getBoundingClientRect();
        this.setState({
            coords:coords
        }) 
    }
    calculateGridStart(){
        //'280px'
    }
    sortByRooms(data,roomName){
        return data.filter(meeting=> meeting.room == roomName);
    }
    renderSchema(){
        return schema.map((el,index) =><div key={index} className={styles.rowname}> <a className="room-name">{el.room}</a>
        <div className="rooms-info">{el.capacity} человек</div>
        </div>)
    }
    renderTimelines(){
        return schema.map((el,index) =>
        <Timeline hoursCoords={this.state.coords} roomData={this.sortByRooms(this.state.data,el.room)}/>
)
    }    
    render() {
        return (
            <div>
                <Timeheader/>
                <div className={styles.roomnames}>    
                {this.renderSchema()}
                </div>
                <div className={styles.timelines}>
                <div className={styles.timelineemptyfirst}></div>
                {this.renderTimelines()}
                </div>
                {/* <Currenttimepointer/> */}
            </div>
        )
    }
}

export default Timelinetable