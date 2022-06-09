import React from 'react'
import { GridComponent, ColumnDirective, ColumnsDirective, Page, Inject, Toolbar, Edit, Sort, Filter, Selection } from '@syncfusion/ej2-react-grids'
import { Header } from '../components'
import { customersData, customersGrid } from '../data/dummy'

const Customers = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Customers" />
      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={['Delete']}
        editSettings={{
          allowDeleting:true,
          allowEditing:true
        }}
        width='auto'
      >
        <ColumnsDirective>
          {customersGrid.map((item, i) => <ColumnDirective key={i} { ...item } />)}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Edit, Sort, Filter, Selection]} />
      </GridComponent>
    </div>
  )
}

export default Customers