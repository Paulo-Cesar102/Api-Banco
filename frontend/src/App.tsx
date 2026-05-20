import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ClienteForm from './pages/ClienteForm';
import ContaForm from './pages/ContaForm';
import Operacoes from './pages/Operacoes';
import Extrato from './pages/Extrato';
import Layout from './components/Layout';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clientes" element={<ClienteForm />} />
          <Route path="/contas" element={<ContaForm />} />
          <Route path="/operacoes" element={<Operacoes />} />
          <Route path="/extrato" element={<Extrato />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
