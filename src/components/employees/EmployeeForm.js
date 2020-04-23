import React, { useContext, useRef } from 'react'
import { EmployeeContext } from './EmployeeProvider'
import { LocationContext } from '../locations/LocationProvider'
import './Employee.css'

export default (props) => {
  const { addEmployee } = useContext(EmployeeContext)
  const { locations } = useContext(LocationContext)
  const name = useRef()
  const location = useRef()
  const manager = useRef()
  const fullTime = useRef()
  const hourlyRate = useRef()

  const constructNewEmployee = () => {
    const locationId = parseInt(location.current.value)
    const isManager = manager.current.value === 'true' ? true : false
    const isFullTime = fullTime.current.value === 'true' ? true : false

    if (locationId === 0) {
      window.alert('Please select a location')
    } else {
      addEmployee({
        name: name.current.value,
        locationId: locationId,
        manager: isManager,
        fullTime: isFullTime,
        hourlyRate: parseInt(hourlyRate.current.value),
      }).then(props.toggler)
    }
  }

  return (
    <form className="employeeForm">
      <h2 className="employeeForm__title">New Employee</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="employeeName">Employee name: </label>
          <input
            type="text"
            id="employeeName"
            ref={name}
            required
            autoFocus
            className="form-control"
            placeholder="Employee name"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="location">Assign to location: </label>
          <select
            defaultValue=""
            name="location"
            ref={location}
            id="employeeLocation"
            className="form-control"
          >
            <option value="0">Select a location</option>
            {locations.map((e) => (
              <option key={e.id} value={e.id}>
                {e.location}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="manager">Has manager? </label>
          <select
            defaultValue=""
            name="manager"
            ref={manager}
            id="employeeManager"
            className="form-control"
          >
            <option value="0">Select an option</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="fullTime">Is full time? </label>
          <select
            defaultValue=""
            name="fullTime"
            ref={fullTime}
            id="employeeFullTime"
            className="form-control"
          >
            <option value="0">Select an option</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="employeeHourlyRate">Hourly rate: </label>
          <input
            type="text"
            id="employeeHourlyRate"
            ref={hourlyRate}
            required
            autoFocus
            className="form-control"
            placeholder="Employee hourly rate"
          />
        </div>
      </fieldset>
      <button
        type="submit"
        onClick={(evt) => {
          evt.preventDefault() // Prevent browser from submitting the form
          constructNewEmployee()
        }}
        className="btn btn-primary"
      >
        Save Employee
      </button>
    </form>
  )
}
