import React, {PureComponent} from 'react'
import styles from './Tooltip.css'

class Tooltip extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
          isVisible=false
        };
    }
    componentDidMount(){
    }  
    render() {
        return(
            <div class="statusRollup">
                                <div class="button-arrow button-edit"></div>
                                <div class="mn-wrap">
                                    <p class="meeting-name">Рассуждения о высоком.</p>
                                </div>
                                <p class="meeting-info">14 декабря 8:00 - 9:00 · Ржавый фред</p>
                                <div class="users-info">
                                    <img src="assets/user-tooltip-img.png"/>
                                    <div class="un-wrap">
                                        <p class="user-name">Дарт вейдер<span class="user-count"> и 12 участников</span></p>
                                    </div>
                                </div>
                            </div>
        )
    }
}

export default Tooltip