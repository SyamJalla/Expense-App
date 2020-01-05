import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import {setTextFilter, setStartDate, setEndDate, sortByDate, sortByAmount} from './actions/filters'

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 2000 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 500 }));
store.dispatch(addExpense({ description: 'Rent', amount: 24000 }));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filter);    
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
