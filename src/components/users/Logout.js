import {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { userLoggout } from '../../redux/actions/userActions';

function Logout() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userLoggout())
  }, [])
  
  
  
  return (
      <div className="text-gray-100 font-bold from-neutral-100 ">
          Logout
      </div>
  )
}

export default Logout