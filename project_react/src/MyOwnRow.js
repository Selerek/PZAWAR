function MyOwnRow(props) {
    const boomba = "boomba";
  return (
    <div>
      <td>{props.index}</td>
      <td>{props.el}</td>
      <td>{props.el2}</td>
      {/* <td><input type="button" onClick={props.onButtonClick}></input></td> */}
      <td><button onClick={props.onButtonClick}>Zmien</button></td>
    </div>
  );
}

export default MyOwnRow;