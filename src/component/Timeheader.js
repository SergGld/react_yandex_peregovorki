import React, { PureComponent } from 'react'
import Arrowbutton from './Arrowbutton'
import styles from './Timeheader.css'


class Timeheader extends PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        function insertAfter(newNode, referenceNode) {
            referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
        }
        var thIndex = 0;
        var time = new Date()
        var firstEl = document.getElementById('first');
        var hourLine = document.getElementById('hourline');
        var left = firstEl.getBoundingClientRect().left + window.scrollX;
        hourLine.style.left = left + "px";
        for (var i = 0; i < 15; i++) {
            firstEl = firstEl.nextSibling;
            left = firstEl.getBoundingClientRect().left + window.scrollX;
            var clone = hourLine.cloneNode(false);
            clone.style.left = left + "px";
            insertAfter(clone, hourLine);
            hourLine = clone;
        }
        firstEl = document.getElementById('first');

        if (time.getHours() >= 8) {
            thIndex = time.getHours() - 8;
            for (var i = 0; i < thIndex; i++) {
                firstEl.style.color = "#858E98";
                firstEl = firstEl.nextSibling
            }
        }
        left = firstEl.getBoundingClientRect().left + window.scrollX;
        var calcOffset = (firstEl.clientWidth / 60 * time.getMinutes()) + left;

        var lineBlock = document.getElementById('currenttimeline');
        lineBlock.style.height = "535px";
        lineBlock.style.left = calcOffset + "px";

        var timeBlock = document.getElementById('currenttime');
        timeBlock.style.left = calcOffset - timeBlock.clientWidth / 2 + "px";

        var mm = time.getMinutes();
        if (mm < 10) mm = '0' + mm;
        timeBlock.innerHTML = time.getHours() + ":" + mm;
    }
    getMonthName = () => {
        const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
            "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
        ];

        var d = new Date();
        return monthNames[d.getMonth()];
    }
    render() {
        return (
            <div className={styles.timeheaderwrap}>
                <div className={styles.dateblock}>
                    <Arrowbutton left />
                    <div className={styles.date}>{(new Date().getDate() + " " + this.getMonthName())}</div>
                    <Arrowbutton />
                </div>
                <div id="first" className={styles.hour}>8:00</div>
                <div className={styles.hour}>9</div>
                <div className={styles.hour}>10</div>
                <div className={styles.hour}>11</div>
                <div className={styles.hour}>12</div>
                <div className={styles.hour}>13</div>
                <div className={styles.hour}>14</div>
                <div className={styles.hour}>15</div>
                <div className={styles.hour}>16</div>
                <div className={styles.hour}>17</div>
                <div className={styles.hour}>18</div>
                <div className={styles.hour}>19</div>
                <div className={styles.hour}>20</div>
                <div className={styles.hour}>21</div>
                <div className={styles.hour}>22</div>
                <div className={styles.hour}>23:00</div>
                <div>
                    <div id="currenttime" className={styles.currenttime}></div>
                    <div id="currenttimeline" className={styles.currenttimeline}></div>
                    <div id="hourline" className={styles.hourline}></div>
                </div>
            </div>
        )
    }
}

export default Timeheader