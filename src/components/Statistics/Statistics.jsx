import css from './Statistics.module.css'


export const Statistics = ({ option }) => {
  return <div>
    <h3 className={css.title}>Statistics</h3>
    <ul className={css.list}>
      <li className={css.item}>Good:  {option.good}</li>
      <li className={css.item}>Neutral:  {option.neutral}</li>
      <li className={css.item}>Bad:  {option.bad}</li>
      <li className={css.item}>Total: {option.good + option.neutral + option.bad}</li>
      <li className={css.item}>Positive feedback: {(option.good / (option.good + option.neutral + option.bad) * 100).toFixed()}%</li>
    </ul>
  </div>
}
