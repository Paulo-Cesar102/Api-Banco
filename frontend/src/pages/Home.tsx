import React from 'react';
import { Link } from 'react-router-dom';
import { Users, CreditCard, ArrowRightLeft, FileText, Landmark } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem 0' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
        <Landmark size={64} color="var(--primary)" />
      </div>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Gerenciamento Bancário</h1>
      <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
        Sua plataforma simplificada para gestão de clientes, contas e operações financeiras com segurança e agilidade.
      </p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
        <Link to="/clientes" style={{ textDecoration: 'none' }}>
          <div className="card" style={{ height: '100%', transition: 'all 0.2s', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ padding: '1rem', background: '#eef2ff', borderRadius: '50%', marginBottom: '1.5rem', color: 'var(--primary)' }}>
              <Users size={32} />
            </div>
            <h3>Clientes</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Gerencie o cadastro de novos usuários no sistema.</p>
          </div>
        </Link>

        <Link to="/contas" style={{ textDecoration: 'none' }}>
          <div className="card" style={{ height: '100%', transition: 'all 0.2s', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ padding: '1rem', background: '#eef2ff', borderRadius: '50%', marginBottom: '1.5rem', color: 'var(--primary)' }}>
              <CreditCard size={32} />
            </div>
            <h3>Contas</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Abra e configure novas contas bancárias para seus clientes.</p>
          </div>
        </Link>

        <Link to="/operacoes" style={{ textDecoration: 'none' }}>
          <div className="card" style={{ height: '100%', transition: 'all 0.2s', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ padding: '1rem', background: '#eef2ff', borderRadius: '50%', marginBottom: '1.5rem', color: 'var(--primary)' }}>
              <ArrowRightLeft size={32} />
            </div>
            <h3>Operações</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Realize depósitos e transferências entre contas instantaneamente.</p>
          </div>
        </Link>

        <Link to="/extrato" style={{ textDecoration: 'none' }}>
          <div className="card" style={{ height: '100%', transition: 'all 0.2s', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ padding: '1rem', background: '#eef2ff', borderRadius: '50%', marginBottom: '1.5rem', color: 'var(--primary)' }}>
              <FileText size={32} />
            </div>
            <h3>Extratos</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Consulte o saldo e todo o histórico de transações de qualquer conta.</p>
          </div>
        </Link>
      </div>

      <footer style={{ marginTop: '4rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
        Api-Banco Frontend v2.1 • Desenvolvido com React + Axios + Lucide
      </footer>
    </div>
  );
};

export default Home;
