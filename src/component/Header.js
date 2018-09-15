import React, {PureComponent} from 'react'
import Button from './Button'

class Header extends PureComponent {
    render() {
        return (
            <header className="header">
            <div className="header-wrap">
                <div className="header-logo"></div>
                <Button>Создать встречу</Button>
            </div>
            <div className="date-wrap-mobile">
                <div className="button-arrow button-prev"></div>
                <div className="date-text"><a className="calendar-link">14 дек · Сегодня</a></div>
                <div className="button-arrow button-next"></div>
            </div>
        </header>
        )
    }
}

export default Header