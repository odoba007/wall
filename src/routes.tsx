import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/home'
import LoginPage from './pages/login'
import DashboardPage from './pages/dashboard'
import AccountPage from './pages/dashboard/account'
import ActivitiesPage from './pages/dashboard/activities'
import TransferPage from './pages/dashboard/transfer'
import ProfilePage from './pages/dashboard/profile'




export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/dashboard' element={<DashboardPage/>}/>
            <Route path='/dashboard/account' element={<AccountPage/>}/>
            <Route path='/dashboard/activities' element={<ActivitiesPage/>}/>
            <Route path='/dashboard/transfer' element={<TransferPage/>}/>
            <Route path='/dashboard/profile' element={<ProfilePage/>}/>
        </Routes>
    </BrowserRouter>
  )
}