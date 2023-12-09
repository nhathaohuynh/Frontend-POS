import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {
	Categories,
	Fail,
	Home,
	HomeEmployee,
	LayoutAdmin,
	Login,
	ManagementProducts,
	ManagementReposts,
	ManagementUser,
	Success,
} from './pages'
import path from './utils/path'
function App() {
	return (
		<div>
			<Routes>
				<Route element={<Home />} path={path.PUBLIC}>
					<Route element={<HomeEmployee />} path={path.HOME} />
					<Route element={<LayoutAdmin />} path={path.PUBLIC}>
						<Route element={<ManagementProducts />} path={path.ADMIN_PRODUCT} />
						<Route element={<ManagementUser />} path={path.ADMIN_USER} />
						<Route element={<ManagementReposts />} path={path.ADMIN_REPOST} />
						<Route element={<Categories />} path={path.ADMIN_CATEGORY} />
					</Route>
				</Route>
				<Route element={<Login />} path={path.LOGIN} />
				<Route element={<Success />} path={path.SUCCESS} />
				<Route element={<Fail />} path={path.FAIL} />
			</Routes>
			<ToastContainer
				position='top-right'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='light'
			/>
			<ToastContainer />
		</div>
	)
}

export default App
