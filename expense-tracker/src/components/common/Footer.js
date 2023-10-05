import React from 'react'

function Footer({handleTab, activeTab}) {
  return (
    <div className='container'>
        <div className='button-wrapper'>
          <button className={activeTab ==="tabcontent1" ? 'expense-button active':"expense-button"}  type='submit' onClick={()=>{handleTab("tabcontent1")}}>Expenses</button>
        </div>
        {/* <div className='divider'></div> */}
        <div className='button-wrapper'>
          <button className= {activeTab ==="tabcontent2" ? 'category-button active':"category-button"} type="submit" onClick={()=>{handleTab("tabcontent2")}}>Category</button>
        </div>
    </div>
  )
}

export default Footer