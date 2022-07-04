import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'
import TabList from '../pages/TabList'
import PrivateRoute from '../modules/PrivateRoute'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/TabList" element={<PrivateRoute />}>
          <Route path="" element={<TabList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
