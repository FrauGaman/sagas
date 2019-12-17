import React from 'react';
import { connect } from 'react-redux';

const Counter = ({value, onIncrement, onDecrement, onIncrementAsync }) => {

	return (
		<div>
			<button onClick={onIncrementAsync}>Increment after 1 second</button>
			<button onClick={onIncrement}>Increment</button>
			<button onClick={onDecrement}>Decrement</button>
			<hr/>
			<div>
				Clicked: {value} times
			</div>
		</div>
	)
};

const mapStateToProps = state =>({
	value: state.counterReducer,
});

export default connect(mapStateToProps)(Counter);
