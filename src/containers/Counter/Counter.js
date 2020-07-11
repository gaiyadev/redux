import React, { Component } from 'react';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';


class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = (action, value) => {
        switch (action) {
            case 'inc':
                this.setState((prevState) => { return { counter: prevState.counter + 1 } })
                break;
            case 'dec':
                this.setState((prevState) => { return { counter: prevState.counter - 1 } })
                break;
            case 'add':
                this.setState((prevState) => { return { counter: prevState.counter + value } })
                break;
            case 'sub':
                this.setState((prevState) => { return { counter: prevState.counter - value } })
                break;
        }
    }

    render() {
        return (
            <div>
                <CounterOutput value={this.props.crt} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.onAddFive} />
                <CounterControl label="Subtract 5" clicked={this.props.onSuBtractFive} />
                <hr />
                <button onClick={this.props.onStoreResult} type="button">Store Result</button>
                <ul>
                    {this.props, storeedResults.map(strResult => {
                        <li key={strResult.id}
                            onClick={() => this.props.onDeleteResult(strResult.id)}>
                            {strResult.value}
                        </li>
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateProps = state => {
    return {
        crt: state.counter,
        storeedResults: state.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT, val: 1 }),
        onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT, val: 1 }),
        onAddFive: () => dispatch({ type: actionTypes.ADD_FIVE, val: 5 }),
        onSuBtractFive: () => dispatch({ type: actionTypes.SUBTRACT_FIVE, val: 5 }),
        onStoreResult: () => dispatch({ type: actionTypes.STORE_RESULT }),
        onDeleteResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT, resultElId: id }),
    }
};

export default connect(mapStateProps, mapDispatchToProps)(Counter);