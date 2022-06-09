import React from 'react'
import { GridComponent, ColumnDirective, ColumnsDirective, Search, Page, Inject, Toolbar } from '@syncfusion/ej2-react-grids'
import { Header } from '../components'
import { employeesData, employeesGrid } from '../data/dummy'

const Employees = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Employees" />
      <GridComponent
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={['Search']}
        width='auto'
      >
        <ColumnsDirective>
          {employeesGrid.map((item, i) => <ColumnDirective key={i} { ...item } />)}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  )
}

export default Employees