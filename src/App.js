
import React ,{useState} from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

let DUMMY_EXPENSE =[
  {
    id: 'e1',
    title: 'school fee',
    amount:500,
    date:new Date(2022,5,12)
  },
  {
    id: 'e2',
    title: 'books',
    amount:100,
    date:new Date(2022,5,22)
  },
  {
    id: 'e3',
    title: 'dress',
    amount:50,
    date:new Date(2022,5,25)
  },
  {
    id: 'e4',
    title: 'food',
    amount:250,
    date:new Date(2022,5,30)
  }
 ];

const App =() => {
    
     const [expenses, setExpenses] = useState(DUMMY_EXPENSE);
    
     const addExpenseHandler =(expense) =>{
      const updatedExpense = [expense, ...expenses];
      setExpenses(updatedExpense);
     };

    return (
      <div>
        <NewExpense onAddExpense={addExpenseHandler }/>
        <Expenses item={expenses} />
      </div>
      );
}


export default App;