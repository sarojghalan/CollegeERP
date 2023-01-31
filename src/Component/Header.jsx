import React from 'react'

const Header = () => {
    const date = new Date();
    const currentHour = date.getHours();
    let greeting = ''
    if (currentHour >= 0 && currentHour < 12) {
        greeting = 'Good morning';
    } else if (currentHour >= 12 && currentHour < 17) {
        greeting = 'Good afternoon';
    } else if (currentHour >= 17 && currentHour < 22) {
        greeting = 'Good evening';
    } else {
        greeting = 'Best of Luck for Tomorrow';
    }

  return (
    <div className='header-main'>
    <div className="container-fluid">
        <div className="container">
            <div className="header-topic">
                <h3> {greeting} ! Saroj</h3>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Header