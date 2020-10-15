import React from 'react';
import Aux from '../../../hoc/Aux';

const orderSummary = (props) => {
  const ingredientSummary = Object.entries(props.ingredients).map((el) => {
    return (
      <li key={el[0]}>
        <span style={{ textTransform: 'capitalize' }}>{el[0]}</span>: {el[1]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to checkout?</p>
    </Aux>
  );
};

export default orderSummary;
