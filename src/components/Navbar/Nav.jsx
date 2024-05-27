import React from 'react'

const Nav = (props) => {
    const {label,link} = props.userItems
  return (
    <div>
            <li className="py-2 md:py-0"><a className="text-base font-raleway font-normal hover:text-pramary text-navtext" href={link}>{label}</a></li>
    </div>
  )
}

export default Nav