import React, { useState } from 'react';
import { api } from '../services/api';
import { CreditCard, Loader2 } from 'lucide-react';

const ContaForm: React.FC = () => {
  const [clienteId, setClienteId] = useState('');
  const [numeroConta, setNumeroConta] = useState('');
  const [saldo, setSaldo] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setLoading(true);

    try {
      await api.cadastrarConta({ 
        clienteid: Number(clienteId), 
        numeroConta, 
        saldo: Number(saldo) 
      });
      setMessage({ type: 'success', text: 'Conta aberta com sucesso!' });
      setClienteId('');
      setNumeroConta('');
      setSaldo('');
    } catch (error: any) {
      setMessage({ type: 'error', text: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
        <CreditCard size={24} color="var(--primary)" />
        <h2 style={{ margin: 0 }}>Abrir Nova Conta</h2>
      </div>
      <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.875rem' }}>
        Vincule uma nova conta bancária a um cliente existente.
      </p>

      {message && (
        <div className={`message message-${message.type}`}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="clienteId">ID do Cliente</label>
          <input
            id="clienteId"
            type="number"
            placeholder="Ex: 1"
            value={clienteId}
            onChange={(e) => setClienteId(e.target.value)}
            required
            disabled={loading}
          />
        </div>
        <div className="form-group">
          <label htmlFor="numeroConta">Número da Conta</label>
          <input
            id="numeroConta"
            type="text"
            placeholder="Ex: 12345-6"
            value={numeroConta}
            onChange={(e) => setNumeroConta(e.target.value)}
            required
            disabled={loading}
          />
        </div>
        <div className="form-group">
          <label htmlFor="saldo">Saldo Inicial (R$)</label>
          <input
            id="saldo"
            type="number"
            step="0.01"
            placeholder="0,00"
            value={saldo}
            onChange={(e) => setSaldo(e.target.value)}
            required
            min="0"
            disabled={loading}
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? <Loader2 className="animate-spin" size={20} /> : <CreditCard size={20} />}
          {loading ? 'Abrindo Conta...' : 'Abrir Conta Bancária'}
        </button>
      </form>
    </div>
  );
};

export default ContaForm;
