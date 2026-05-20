import axios from 'axios';

const apiInstance = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para tratar erros de forma global
apiInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.message || 'Erro inesperado na rede';
    return Promise.reject(new Error(message));
  }
);

export const api = {
  // Clientes
  cadastrarCliente: (data: { nome: string; cpf: string; email: string }) =>
    apiInstance.post('/clientes', data),

  // Contas
  cadastrarConta: (data: { clienteid: number; numeroConta: string; saldo: number }) =>
    apiInstance.post('/contas', data),

  // Transações
  depositar: (contaId: number, valor: number) =>
    apiInstance.post(`/contas/${contaId}/deposito`, { valor }),

  transferir: (data: { contaOrigemId: number; contaDestinoId: number; valor: number }) =>
    apiInstance.post('/contas/transferencia', data),

  // Extrato
  getExtrato: async (contaId: number) => {
    const response = await apiInstance.get(`/contas/${contaId}/extrato`);
    return response.data;
  },
};
