from database.db import db
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship

class prescricoes(db.Model):

    def to_dict(self):
        return{
            'medicamento':self.medicamento,
            'dosagem':self.dosagem,
            'frequencia':self.frequencia,
            'datainicio':self.datainicio,
            'datafim':self.datafim,
        }
    
    codigo = db.Column(db.Integer(5), primary_key=True)
    codconsulta = db.Column(ForeignKey('consultas.codigo'))
    medicamento = db.Column(db.String(50))
    dosagem = db.Column(db.String(50))
    frequencia = db.Column(db.String(50))
    datainicio = db.Column(db.Date)
    datafim = db.Column(db.Date)

    consulta = relationship('consultas', backref='prescricoes')

    def __init__(self,medicamento, dosagem, frequencia, datainicio, datafim):
        self.medicamento = medicamento
        self.dosagem = dosagem
        self.frequencia = frequencia
        self.datainicio = datainicio
        self.datafim = datafim