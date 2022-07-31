import React from 'react'
import {Routes , Route} from 'react-router-dom'
import AddEmployee from '../View/AddEmployee'
import CreateTask from '../View/CreateTask'
import EmployeeBoard from '../View/EmployeeBoard'
import EmployeeLogin from '../View/EmployeeLogin'
import ManagerBoard from '../View/ManagerBoard'
import ManagerLogin from '../View/ManagerLogin'

const Navigator = () => {
  return (
    <Routes>
        <Route path='/' element={<ManagerLogin />} />
        <Route path='employee-login' element={<EmployeeLogin />} />
        <Route path='add-employee' element={<AddEmployee />} />
        <Route path='create-task' element={<CreateTask />} />
        <Route path='employee-board/:id' element={<EmployeeBoard />} />
        <Route path='manager-board/:id' element={<ManagerBoard />} />
    </Routes>
  )
}

export default Navigator