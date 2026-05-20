import { ClienteCreateDTO } from "../entities/clienteCreateDTO.js";
import { ClienteRepository } from "../repository/clienteRepository.js";
import { AppError } from "../middlewares/AppError.js";

export class ClienteService {
  private clienteRepository: ClienteRepository;

  constructor() {
    this.clienteRepository = new ClienteRepository();
  }

  async cadastrarCliente(cliente: ClienteCreateDTO) {
    const cpfExists = await this.clienteRepository.findByCpf(cliente.cpf);
    if (cpfExists) {
      throw new AppError("CPF já cadastrado", 400);
    }

    const emailExists = await this.clienteRepository.findByEmail(cliente.email);
    if (emailExists) {
      throw new AppError("E-mail já cadastrado", 400);
    }

    return this.clienteRepository.cadastrarCliente(cliente);
  }
}
