-- CreateEnum
CREATE TYPE "TipoTransacao" AS ENUM ('DEPOSITO', 'TRANSFERENCIA_SAIDA', 'TRANSFERENCIA_ENTRADA');

-- CreateTable
CREATE TABLE "cliente" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(120) NOT NULL,
    "cpf" VARCHAR(14) NOT NULL,
    "email" VARCHAR(120) NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "conta" (
    "id" SERIAL NOT NULL,
    "numero" VARCHAR(30) NOT NULL,
    "saldo" DECIMAL(12,2) NOT NULL DEFAULT 0.00,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cliente_id" INTEGER NOT NULL,

    CONSTRAINT "conta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transacao" (
    "id" SERIAL NOT NULL,
    "tipo" "TipoTransacao" NOT NULL,
    "valor" DECIMAL(12,2) NOT NULL,
    "descricao" TEXT,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "conta_id" INTEGER NOT NULL,

    CONSTRAINT "transacao_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cliente_cpf_key" ON "cliente"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "conta_numero_key" ON "conta"("numero");

-- CreateIndex
CREATE INDEX "idx_conta_cliente_id" ON "conta"("cliente_id");

-- CreateIndex
CREATE INDEX "idx_transacao_conta_id" ON "transacao"("conta_id");

-- CreateIndex
CREATE INDEX "idx_transacao_created_at" ON "transacao"("created_at");

-- AddForeignKey
ALTER TABLE "conta" ADD CONSTRAINT "fk_conta_cliente" FOREIGN KEY ("cliente_id") REFERENCES "cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transacao" ADD CONSTRAINT "fk_transacao_conta" FOREIGN KEY ("conta_id") REFERENCES "conta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
