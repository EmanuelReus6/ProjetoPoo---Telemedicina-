from database.db import db
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship

class consultas(db.Model):

    def to_dict(self):
        return{
            'horariodata':self.horariodata,
            'status':self.status,
            'descricao':self.descricacao
        }
    
    codigo = db.Column(db.Integer(5), primary_key=True)
    codpaciente = db.Column(ForeignKey('pacientes.codigo'))
    codmedico = db.Column(ForeignKey('medicos.codigo'))
    horariodata = db.Column(db.DateTime)
    status = db.Column(db.String(50))
    descricacao = db.Column(db.String(200))

    paciente = relationship('pacientes', backref='consultas')
    medico = relationship('medicos', backref='consultas')

    def __init__(self,horariodata, status, descricao):
        self.horariodata = horariodata
        self.status = status
        self.descricacao = descricao