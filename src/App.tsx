import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import Layout from './components/common/layout/Layout';
import UserDetail from './components/dashboard/components/user-data/UserDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='*' element={<Navigate to='/login' replace />} />

        <Route path='/login' element={<Login />} />
        <Route
          path='/dashboard/users'
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path='/dashboard/users/:id'
          element={
            <Layout>
              <UserDetail />
            </Layout>
          }
        />
        <Route
          path='/dashboard/guarantor'
          element={
            <Layout>
              <UserDetail />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
