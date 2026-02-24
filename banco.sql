/*
 Navicat Premium Dump SQL

 Source Server         : lista
 Source Server Type    : PostgreSQL
 Source Server Version : 150013 (150013)
 Source Host           : localhost:5432
 Source Catalog        : tostao
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 150013 (150013)
 File Encoding         : 65001

 Date: 29/01/2026 15:46:18
*/


-- ----------------------------
-- Sequence structure for cliente_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."cliente_id_seq";
CREATE SEQUENCE "public"."cliente_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for conta_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."conta_id_seq";
CREATE SEQUENCE "public"."conta_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for transacao_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."transacao_id_seq";
CREATE SEQUENCE "public"."transacao_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Table structure for cliente
-- ----------------------------
DROP TABLE IF EXISTS "public"."cliente";
CREATE TABLE "public"."cliente" (
  "id" int4 NOT NULL DEFAULT nextval('cliente_id_seq'::regclass),
  "nome" varchar(120) COLLATE "pg_catalog"."default" NOT NULL,
  "cpf" varchar(14) COLLATE "pg_catalog"."default" NOT NULL,
  "created_at" timestamptz(6) NOT NULL DEFAULT now(),
  "email" varchar(255) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Records of cliente
-- ----------------------------
INSERT INTO "public"."cliente" VALUES (1, 'Danilo', '4131312321', '2026-01-25 02:43:39.267+00', 'danilofn@gmail.com');

-- ----------------------------
-- Table structure for conta
-- ----------------------------
DROP TABLE IF EXISTS "public"."conta";
CREATE TABLE "public"."conta" (
  "id" int4 NOT NULL DEFAULT nextval('conta_id_seq'::regclass),
  "numero" varchar(30) COLLATE "pg_catalog"."default" NOT NULL,
  "saldo" numeric(12,2) NOT NULL DEFAULT 0.00,
  "created_at" timestamptz(6) NOT NULL DEFAULT now(),
  "cliente_id" int4 NOT NULL
)
;

-- ----------------------------
-- Records of conta
-- ----------------------------

-- ----------------------------
-- Table structure for transacao
-- ----------------------------
DROP TABLE IF EXISTS "public"."transacao";
CREATE TABLE "public"."transacao" (
  "id" int4 NOT NULL DEFAULT nextval('transacao_id_seq'::regclass),
  "tipo" varchar(20) COLLATE "pg_catalog"."default" NOT NULL,
  "valor" numeric(12,2) NOT NULL,
  "descricao" text COLLATE "pg_catalog"."default",
  "created_at" timestamptz(6) NOT NULL DEFAULT now(),
  "conta_id" int4 NOT NULL
)
;

-- ----------------------------
-- Records of transacao
-- ----------------------------

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."cliente_id_seq"
OWNED BY "public"."cliente"."id";
SELECT setval('"public"."cliente_id_seq"', 1, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."conta_id_seq"
OWNED BY "public"."conta"."id";
SELECT setval('"public"."conta_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."transacao_id_seq"
OWNED BY "public"."transacao"."id";
SELECT setval('"public"."transacao_id_seq"', 1, false);

-- ----------------------------
-- Uniques structure for table cliente
-- ----------------------------
ALTER TABLE "public"."cliente" ADD CONSTRAINT "cliente_cpf_key" UNIQUE ("cpf");

-- ----------------------------
-- Primary Key structure for table cliente
-- ----------------------------
ALTER TABLE "public"."cliente" ADD CONSTRAINT "cliente_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table conta
-- ----------------------------
CREATE INDEX "idx_conta_cliente_id" ON "public"."conta" USING btree (
  "cliente_id" "pg_catalog"."int4_ops" ASC NULLS LAST
);

-- ----------------------------
-- Uniques structure for table conta
-- ----------------------------
ALTER TABLE "public"."conta" ADD CONSTRAINT "conta_numero_key" UNIQUE ("numero");

-- ----------------------------
-- Primary Key structure for table conta
-- ----------------------------
ALTER TABLE "public"."conta" ADD CONSTRAINT "conta_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table transacao
-- ----------------------------
CREATE INDEX "idx_transacao_conta_id" ON "public"."transacao" USING btree (
  "conta_id" "pg_catalog"."int4_ops" ASC NULLS LAST
);
CREATE INDEX "idx_transacao_created_at" ON "public"."transacao" USING btree (
  "created_at" "pg_catalog"."timestamptz_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table transacao
-- ----------------------------
ALTER TABLE "public"."transacao" ADD CONSTRAINT "transacao_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Foreign Keys structure for table conta
-- ----------------------------
ALTER TABLE "public"."conta" ADD CONSTRAINT "fk_conta_cliente" FOREIGN KEY ("cliente_id") REFERENCES "public"."cliente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table transacao
-- ----------------------------
ALTER TABLE "public"."transacao" ADD CONSTRAINT "fk_transacao_conta" FOREIGN KEY ("conta_id") REFERENCES "public"."conta" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;
