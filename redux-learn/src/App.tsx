
import { useState } from 'react'
import './App.css'
import CustomerView from './component/CustomerView';
import { addCustomer as addCustomerAction } from './slice/CustomerSlice';
import { useDispatch } from 'react-redux';

function App() {

  const [customer,setCustomer] = useState("");
  const dispatch = useDispatch()
  // const [customers,setCustomers]= useState<string[]>([]);

  function addCustomer() {
     if(customer) {
      // setCustomers((prevState)=> [...prevState,customer]) 
      dispatch(addCustomerAction(customer));
     }
  }

  return (
      <div>
           <h3>
               Add new Customer
           </h3>
           <input type="text" value={customer} onChange={(event)=> {setCustomer(event.target.value)}}/>
           <button onClick={addCustomer}>
             Add
           </button>

           <CustomerView/>
      </div>
  )
}

export default App
