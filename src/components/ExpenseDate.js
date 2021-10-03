export default function ExpenseDate(props){
  //const for date
  const month = props.date.toLocaleString('en-US', {month: 'long'});
  const year = props.date.toLocaleString('en-US', {day: '2-digit'});
  const day = props.date.getFullYear();

  return(
    <div className="date">
        <div>{day}</div>
        <div>{month} /</div>
        <div>{year} /</div>
    </div>
  );
}


// export default ExpenseDate;