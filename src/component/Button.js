import React, { PropTypes } from 'react';
import styles from './Button.css'


function Button(props) {
    return props.href
        ? <a {...props} className={styles.createbutton} />
        : <button {...props} className={styles.createbutton} />;
}

export default Button