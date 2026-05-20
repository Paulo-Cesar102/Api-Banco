import React, { useState } from 'react';
import { api } from '../services/api';
import { FileSearch, Loader2, ArrowUpRight, ArrowDownLeft, RefreshCcw } from 'lucide-react';

const Extrato: React.FC = () => {
  const [contaId, setContaId] = useState('');
  const [extrato, setExtrato] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleConsultar = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setExtrato(null);
    setLoading(true);

    try {
      const data = await api.getExtrato(Number(contaId));
      setExtrato(data);
    } catch (error: any) {
      setMessage({ type: 'error', text: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
        <FileSearch size={24} color="var(--primary)" />
        <h2 style={{ margin: 0 }}>Consultar Extrato</h2>
      </div>
      <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.875rem' }}>
        Informe o ID da conta para visualizar o saldo e o histórico de transações.
      </p>

      <form onSubmit={handleConsultar} style={{ marginBottom: '2rem' }}>
        <div className="form-group">
          <label>ID da Conta</label>
          <input
            type="number"
            placeholder="Ex: 1"
            value={contaId}
            onChange={(e) => setContaId(e.target.value)}
            required
            disabled={loading}
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? <Loader2 className="animate-spin" size={20} /> : <FileSearch size={20} />}
          {loading ? 'Consultando...' : 'Consultar Extrato'}
        </button>
      </form>

      {message && <div className={`message message-${message.type}`}>{message.text}</div>}

      {extrato && (
        <div style={{ animation: 'slideIn 0.4s ease-out' }}>
          <div style={{ 
            background: '#f1f5f9', 
            padding: '1.5rem', 
            borderRadius: 'var(--radius)', 
            marginBottom: '2rem',
            border: '1px solid var(--border)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontWeight: '600' }}>SALDO DISPONÍVEL</span>
              <div style={{ fontSize: '2rem', fontWeight: '800', color: extrato.saldo >= 0 ? 'var(--success)' : 'var(--danger)' }}>
                R$ {extrato.saldo.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </div>
            </div>
            <button 
              onClick={handleConsultar} 
              style={{ width: 'auto', padding: '0.5rem', background: 'transparent', color: 'var(--text-muted)' }}
              title="Atualizar"
            >
              <RefreshCcw size={20} />
            </button>
          </div>
          
          <h3>Histórico de Transações</h3>
          <div style={{ overflowX: 'auto' }}>
            <table className="transaction-list">
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Tipo</th>
                  <th>Valor</th>
                </tr>
              </thead>
              <tbody>
                {extrato.transacoes && extrato.transacoes.length > 0 ? (
                  extrato.transacoes.map((t: any) => (
                    <tr key={t.id}>
                      <td>
                        <div style={{ fontSize: '0.9375rem' }}>{new Date(t.data).toLocaleDateString('pt-BR')}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                          {new Date(t.data).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </td>
                      <td>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          {t.tipo.includes('DEPOSITO') ? (
                            <ArrowDownLeft size={16} color="var(--success)" />
                          ) : (
                            <ArrowUpRight size={16} color="var(--danger)" />
                          )}
                          <span className="badge" style={{ background: '#e2e8f0', color: '#475569' }}>
                            {t.tipo.toUpperCase()}
                          </span>
                        </div>
                      </td>
                      <td className={t.valor >= 0 ? 'value-positive' : 'value-negative'}>
                        {t.valor >= 0 ? '+' : '-'} R$ {Math.abs(t.valor).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3} style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)' }}>
                      Nenhuma movimentação registrada.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Extrato;
