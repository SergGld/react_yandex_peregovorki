import React, {PureComponent} from 'react'
import Header from './Header'
import Timeheader from './Timeheader'
import Timelinetable from './Timelinetable'
import meetdata from '../meetings'

class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
          data: props.initialData
        };
      }
    render() {
        return (
            <div className="container">
            <Header/>
            <Timelinetable initialData={meetdata}/>
            </div>
        )
    }

    revert = () => {
        this.setState({
            reverted: !this.state.reverted
        })
    }
}

export default App