import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Users, CreditCard, ArrowRightLeft, FileText, Landmark } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <nav>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: 'bold', fontSize: '1.25rem' }}>
            <Landmark size={24} />
            <span>Api-Banco</span>
          </div>
          <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', margin: 0, padding: 0 }}>
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Home size={18} /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/clientes" className={({ isActive }) => (isActive ? 'active' : '')} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Users size={18} /> Clientes
              </NavLink>
            </li>
            <li>
              <NavLink to="/contas" className={({ isActive }) => (isActive ? 'active' : '')} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CreditCard size={18} /> Contas
              </NavLink>
            </li>
            <li>
              <NavLink to="/operacoes" className={({ isActive }) => (isActive ? 'active' : '')} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <ArrowRightLeft size={18} /> Operações
              </NavLink>
            </li>
            <li>
              <NavLink to="/extrato" className={({ isActive }) => (isActive ? 'active' : '')} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <FileText size={18} /> Extrato
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">{children}</div>
    </>
  );
};

export default Layout;
