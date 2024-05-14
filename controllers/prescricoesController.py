from flask import request, render_template
from database.db import db
from models.prescricoes import prescricoes

def prescricoesController():
    if request.method == 'POST':
        try:
            data = request.get_json()
            user = prescricoes(data['codconsulta'], data['medicamento'], data['dosagem'], data['frequencia'], data['datainicio'], data['datafim'])
            db.session.add(user)
            db.session.commit()
            return 'Prescrição criada com sucesso', 200
        except:
            return 'A prescrição não foi criada', 405
        
    elif request.method == 'GET':
        try:
            data = prescricoes.query.all()
            return render_template('prescricoes.html', data={'prescricoes': [prescricao.to_dict() for prescricao in data]})
        except Exception as e:
            return 'Não foi possível buscar prescricoes', 405
    
    elif request.method == 'PUT':
         try:
              data = request.get_json()
              put_prescricao_id = data['codigo']
              put_prescricao = prescricoes.query.get(put_prescricao_id)
              if put_prescricao is None:
                   return {'error': 'Prescrição não encontrada'}, 404
              put_prescricao.codconsulta = data.get('codconsulta', put_prescricao.codconsulta)
              put_prescricao.medicamento = data.get('medicamento', put_prescricao.medicamento)
              put_prescricao.dosagem = data.get('dosagem', put_prescricao.dosagem)
              put_prescricao.frequencia = data.get('frequencia', put_prescricao.frequencia)
              put_prescricao.datainicio = data.get('datainicio', put_prescricao.datainicio)
              put_prescricao.datafim = data.get('datafim', put_prescricao.datafim)
              db.session.commit()
              return 'Prescrição atualizada com sucesso', 200
         except Exception as e:
              return {'error': 'Erro ao atualizar prescrição. Erro {}'.format(e)}, 400
    
    elif request.method == 'DELETE':
        try:
            data = request.get_json()
            prescricao_id = data['codigo']
            prescricao = prescricoes.query.get(prescricao_id)
            if prescricao:
                db.session.delete(prescricao)
                db.session.commit()
                return 'Prescrição excluída com sucesso', 200
            else:
                return {'error': 'Prescrição não encontrada'}, 404
        except Exception as e:
            return {'error': 'Erro ao excluir prescrição. Erro {}'.format(e)}, 400