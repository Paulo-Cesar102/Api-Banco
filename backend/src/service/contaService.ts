import { ContaCreateDTO } from "../entities/contaCreateDTO.js";
import { ContaRepository } from "../repository/contaRepository.js";
import { ClienteRepository } from "../repository/clienteRepository.js";
import { AppError } from "../middlewares/AppError.js";

export class ContaService {
  private contaRepository: ContaRepository;
  private clienteRepository: ClienteRepository;

  constructor() {
    this.contaRepository = new ContaRepository();
    this.clienteRepository = new ClienteRepository();
  }

  async cadastrarConta(conta: ContaCreateDTO) {
    const clienteExists = await this.clienteRepository.findById(conta.clienteid);
    if (!clienteExists) {
      throw new AppError("Cliente não encontrado", 404);
    }

    const contaExists = await this.contaRepository.findByClienteId(conta.clienteid);
    if (contaExists) {
      throw new AppError("Cliente já possui uma conta", 400);
    }

    return this.contaRepository.cadastrarConta(conta);
  }
}
