



export const Statistic = ({ good, neutral, bad, total, positiveClick })=>(

<div>
    <h3>Statistic</h3>
  <ul>
    <li>Good:{good}</li>
    <li>Neutral:{neutral}</li>
    <li>Bad:{bad}</li>
    <li>Total:{total}</li>
    <li>Positive feedback:{positiveClick}%</li>
  </ul>
</div>


)