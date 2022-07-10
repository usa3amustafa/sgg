import React from 'react'
import Dropdown from './Dropdown'
import dData from '../../dashboardData'
import Carousel from './Carousel'
import Sidebar from '../../components/Sidebar'
import Topbar from '../../components/Topbar'
import BackToTop from '../BackToTop'

const Dashboard = () => {
  return (
    <>
      <Topbar />

      <main>
        <div className='main'>
          <Sidebar />
          <div className='dashboard'>
            <Carousel />
            <h2 className='section-dropdown-header'>Existing Proposal</h2>
            <hr className='section-hr'></hr>
            {dData.map(item => {
              return <Dropdown key={item.id} dropdownItem={item} />
            })}
            <footer className='dashboard-footer'>
              © 2022 Tokio Marine Life Insurance Singapore Ltd. (Company Reg.
              No. 19480005D)
            </footer>
          </div>
        </div>
      </main>

      <BackToTop />
    </>
  )
}

export default Dashboard
