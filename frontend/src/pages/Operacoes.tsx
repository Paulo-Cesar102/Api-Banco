import React, { useState } from 'react';
import { api } from '../services/api';
import { ArrowDownCircle, ArrowRightLeft, Loader2 } from 'lucide-react';

const Operacoes: React.FC = () => {
  const [contaIdDeposito, setContaIdDeposito] = useState('');
  const [valorDeposito, setValorDeposito] = useState('');
  
  const [contaOrigem, setContaOrigem] = useState('');
  const [contaDestino, setContaDestino] = useState('');
  const [valorTransferencia, setValorTransferencia] = useState('');

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleDeposito = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setLoading(true);
    try {
      await api.depositar(Number(contaIdDeposito), Number(valorDeposito));
      setMessage({ type: 'success', text: 'Depósito de R$ ' + valorDeposito + ' realizado com sucesso!' });
      setContaIdDeposito('');
      setValorDeposito('');
    } catch (error: any) {
      setMessage({ type: 'error', text: error.message });
    } finally {
      setLoading(false);
    }
  };

  const handleTransferencia = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setLoading(true);
    try {
      await api.transferir({
        contaOrigemId: Number(contaOrigem),
        contaDestinoId: Number(contaDestino),
        valor: Number(valorTransferencia)
      });
      setMessage({ type: 'success', text: 'Transferência de R$ ' + valorTransferencia + ' realizada com sucesso!' });
      setContaOrigem('');
      setContaDestino('');
      setValorTransferencia('');
    } catch (error: any) {
      setMessage({ type: 'error', text: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {message && (
        <div className={`message message-${message.type}`}>
          {message.text}
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
            <ArrowDownCircle size={24} color="var(--success)" />
            <h2 style={{ margin: 0 }}>Depósito</h2>
          </div>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.875rem' }}>
            Adicione saldo a uma conta específica.
          </p>
          <form onSubmit={handleDeposito}>
            <div className="form-group">
              <label>ID da Conta</label>
              <input
                type="number"
                placeholder="ID da conta"
                value={contaIdDeposito}
                onChange={(e) => setContaIdDeposito(e.target.value)}
                required
                disabled={loading}
              />
            </div>
            <div className="form-group">
              <label>Valor (R$)</label>
              <input
                type="number"
                step="0.01"
                placeholder="0,00"
                value={valorDeposito}
                onChange={(e) => setValorDeposito(e.target.value)}
                required
                min="0.01"
                disabled={loading}
              />
            </div>
            <button type="submit" disabled={loading} style={{ background: 'var(--success)' }}>
              {loading ? <Loader2 className="animate-spin" size={20} /> : <ArrowDownCircle size={20} />}
              <span>{loading ? 'Processando...' : 'Confirmar Depósito'}</span>
            </button>
          </form>
        </div>

        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
            <ArrowRightLeft size={24} color="var(--primary)" />
            <h2 style={{ margin: 0 }}>Transferência</h2>
          </div>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.875rem' }}>
            Transfira valores entre contas do banco.
          </p>
          <form onSubmit={handleTransferencia}>
            <div className="form-group">
              <label>Conta de Origem (ID)</label>
              <input
                type="number"
                placeholder="ID da conta de origem"
                value={contaOrigem}
                onChange={(e) => setContaOrigem(e.target.value)}
                required
                disabled={loading}
              />
            </div>
            <div className="form-group">
              <label>Conta de Destino (ID)</label>
              <input
                type="number"
                placeholder="ID destino"
                value={contaDestino}
                onChange={(e) => setContaDestino(e.target.value)}
                required
                disabled={loading}
              />
            </div>
            <div className="form-group">
              <label>Valor (R$)</label>
              <input
                type="number"
                step="0.01"
                placeholder="0,00"
                value={valorTransferencia}
                onChange={(e) => setValorTransferencia(e.target.value)}
                required
                min="0.01"
                disabled={loading}
              />
            </div>
            <button type="submit" disabled={loading}>
              {loading ? <Loader2 className="animate-spin" size={20} /> : <ArrowRightLeft size={20} />}
              <span>{loading ? 'Processando...' : 'Transferir Agora'}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Operacoes;
