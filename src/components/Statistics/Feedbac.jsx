import css from './Statistics.module.css'
import React from 'react'

import { Statistics } from './Statistics'
import { Notification } from './Notification'
import { useState } from 'react'

export const Feedbac = () => {
    const [feedback, setFeedback] = useState({
        good: 0,
        neutral: 0,
        bad: 0,
    })

    const [visible, setVisible] = useState(false)

    const onIncrement = (type) => {
        setFeedback({
            ...feedback,
            [type]: feedback[type] + 1
        })
        setVisible(true)
    }

    return (<div>
        <h3 className={css.title}>Please leave feedback</h3>
        {['good', 'neutral', 'bad'].map(e => <button key={e} className={css.btn} onClick={() => onIncrement(e)}>{e}</button>)}
        {visible && <Statistics option={feedback} />}
        {visible || <Notification />}
    </div>)
}

