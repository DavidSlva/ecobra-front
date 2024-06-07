import { App as AntdApp } from 'antd';
import SecureRouter from './routes/secureRouter';

function App() {
  return (
    <AntdApp>
      <SecureRouter/>
    </AntdApp>
  );
}

export default App;
