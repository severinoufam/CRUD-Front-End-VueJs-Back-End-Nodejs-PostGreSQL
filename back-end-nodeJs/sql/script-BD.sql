CREATE TABLE paciente (
	paciente_id uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
	nome VARCHAR (255) NOT NULL,
	cpf VARCHAR (255) NOT NULL,
	fone VARCHAR (255) NOT NULL,
  email VARCHAR (255) NOT NULL
)