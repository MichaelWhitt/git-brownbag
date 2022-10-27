import {useState} from 'react'

const ListItem = (props) => {
  const [cross, setCross] = useState(false)

  const crossOut = () => {
    setCross(c => !c)
  }

  return(
    <li onClick={crossOut} style={{textDecoration: cross && 'line-through', fontWeight: 600, fontSize: 40}}>
      {props.children}
    </li>
  )
}
export default ListItem
