import LoginPage from '../pages/login'
import AppPage from '../pages/app'

const routes = [
  {
    path: '/',
    exact: true,
    layout: false,
    private: false,
    component: LoginPage
  },
  {
    path: '/login',
    exact: true,
    layout: true,
    private: false,
    component: LoginPage
  },
  {
    path: '/app',
    exact: true,
    layout: true,
    private: false,
    component: AppPage
  }
]

export default routes
