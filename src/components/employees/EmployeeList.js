import React, { useContext, useState } from 'react'
import { EmployeeContext } from './EmployeeProvider'
import { LocationContext } from '../locations/LocationProvider'
import Employee from './Employee'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import EmployeeForm from './EmployeeForm'

export default () => {
  const { employees } = useContext(EmployeeContext)
  const { locations } = useContext(LocationContext)

  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

  return (
    <>
      <div className="fakeLink href" onClick={toggle}>
        Hire Employee
      </div>

      <div className="employees">
        {employees.map((employee) => {
          const foundLocation = locations.find(
            (loc) => loc.id === employee.locationId
          )
          return (
            <Employee
              key={employee.id}
              employee={employee}
              location={foundLocation}
            />
          )
        })}
      </div>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>New Employee</ModalHeader>
        <ModalBody>
          <EmployeeForm toggler={toggle} />
        </ModalBody>
      </Modal>
    </>
  )
}
