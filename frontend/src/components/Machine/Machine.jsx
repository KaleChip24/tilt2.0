

const Machine = (props) => {
  return (
    <div className="machine-card">
      <h3>{props.name}</h3>
      <p>Commnents: {props.comments}</p>
      <h4>Price: {`$${props.price}`}</h4>
    </div>
  );
};

export default Machine;