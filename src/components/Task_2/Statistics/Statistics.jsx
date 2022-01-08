import React from "react";
import PropTypes from 'prop-types';

import styles from "./Statistics.module.css"

const Statistics = ({ data, title }) => {
    return (
    <section className={styles.statistics}>
        {title && <h1 className={styles.title}>{title}</h1>}
        <ul className={styles.statList}>
            {data.map(format => {
                return (
                    <li key={format.id} className="item">
                        <span className={styles.label}>{format.label} </span>
                        <span className={styles.percentage}>{format.percentage}%</span>
                    </li>
                )
            })}
        </ul>
    </section>   
);
};

Statistics.defaultProps = {
    title: "",
}

Statistics.propTypes = {
    title: PropTypes.string,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    ),
};

export default Statistics;   