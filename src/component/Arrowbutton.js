import React, {PureComponent} from 'react'
import Button from './Button'
import styles from './Arrowbutton.css'

class Arrowbutton extends PureComponent {
    constructor(props) {
        super(props);
      }
      getStyle() {
        return this.props.left ? {
            transform: 'rotate(180deg)'
        } : {
            transform: 'rotate(360deg)'
        }
    }  
      handleClick = () => {
        console.log('this is:', this);
      }
    render() {
        return (
            <button className={styles.arrowbutton} style={this.getStyle()} onClick={this.handleClick}>
          </button>
        )
    }
}

export default Arrowbutton