import React, {PureComponent} from 'react'
import Timelineblock from './Timelineblock'
import styles from './Timeline.css'

class Timeline extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
          data: this.props.roomData,
          coords: this.props.defaultValue
        };
    }
    componentDidMount(){
    }
    componentWillReceiveProps(nextProps) {
        this.setCoords(nextProps.hoursCoords);
      }
      setCoords(coords) {
        this.setState({
          coords:coords
        });
      }  
    renderBlocks(){
        return this.state.data.map((el,index) =><Timelineblock key={index} start={el.start} end={el.end} startCoords={this.state.coords}/>)
    }   
    render() {
        return(
            <div>
            <div className={styles.timeline}>
            {this.renderBlocks()}
                </div>
                <div className={styles.timelineempty}></div>
                </div>
        )
    }
}

export default Timeline