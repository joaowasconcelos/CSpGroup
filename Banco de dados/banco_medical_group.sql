create database sp_medical_group;

use sp_medical_group;

create table tbl_pessoa (
	id int not null auto_increment primary key,
    nome varchar (20) not null,
    sobrenome varchar (20) not null,
    sexo varchar(15) not null, 
    data_nascimento date not null,
    cpf char(11) not null,
    crm varchar (20),
    categoria varchar (20) not null
);

create table tbl_endereco (
	id int not null auto_increment primary key,
    rua varchar (100) not null,
    bairro varchar (100) not null,
    numero varchar (5) not null,
    cep char (10) not null,
    cidade varchar (20) not null,
    estado char (2) not null,
    foreign key (id_pessoa) references tbl_pessoa(id)
);

create table tbl_email (
	id int not null auto_increment primary key,
    endereco_email varchar (100) not null,
    foreign key (id_pessoa) references tbl_pessoa(id)
);

create table tbl_telefone (
	id int not null auto_increment primary key,
    telefone varchar(20) not null,
    celular varchar(20) not null,
    foreign key (id_pessoa) references tbl_pessoa(id)
);

create table tbl_prontuario (
	id int not null auto_increment primary key,
    observacao varchar (200) not null,
    tratamento_prescricao varchar (100) not null,
    sintomas varchar (100) not null,
	historico varchar (100) not null,
    foreign key (id_pessoa) references tbl_pessoa(id),
    foreign key (id_especialidades) references tbl_especialidades(id)
);

create table tbl_especialidades (			
	id int not null auto_increment primary key,			
	especialidade varchar (20) not null,	
	foreign key (id_pessoa) references tbl_pessoa(id)		
);			
			
create table tbl_login (
	id int not null auto_increment primary key,			
	senha varchar(500) not null,			
	foreign key (id_pessoa) references tbl_pessoa(id),	
	foreign key (id_email) references tbl_email(id)		
);	

create table tbl_agendamento (
	id int not null auto_increment primary key,
    data_agendamento date not null,
    horario time not null,
	foreign key (id_pessoa) references tbl_pessoa(id),	
    foreign key (id_especialidades) references tbl_especialidades(id),
    foreign key (id_prontuario) references tbl_prontuario(id)
)




