import React from 'react';

import Styles from './Toggle.module.css';

const Toggle = (props) => {
    return (
        <div className={Styles.container}>
            <div className={Styles["switches-container"]}>
                <input type="radio" id="switchMonthly" name="switchPlan" value="Monthly" checked="checked"/>
                <input type="radio" id="switchYearly" name="switchPlan" value="Yearly"/>
                <label htmlFor="switchMonthly">Monthly</label>
                <label htmlFor="switchYearly">Yearly</label>
                <div className={Styles["switch-wrapper"]}>
                    <div className={Styles["switch"]}>
                        <div>Monthly</div>
                        <div>Yearly</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Toggle;