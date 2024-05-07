from database.db import db
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship

class pacientes(db.Model):

    def to_dict(self):
        return{
            'nome':self.nome,
            'nascimento':self.nascimento,
            'genero': self.genero,
            'endereco': self.endereco
        }
    
    codigo = db.Column(db.Integer(5), primary_key=True)
    codusuario = db.Column(ForeignKey('usuarios.codigo'))
    nome = db.Column(db.String(50))
    nascimento = db.Column(db.Date)
    genero = db.Column(db.String(50))
    endereco = db.Column(db.String(50))

    usuario = relationship('usuarios', backref='pacientes')

    def __init__(self,nome,nascimento, genero, endereco):
        self.nome = nome
        self.nascimento = nascimento
        self.genero = genero
        self.endereco = endereco