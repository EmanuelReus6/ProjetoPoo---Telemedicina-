from flask import request, render_template
from database.db import db
from models.consultas import consultas

def consultasController():
    if request.method == 'POST':
        try:
            data = request.get_json()
            cons = consultas(data['horariodata'], data['status'], data['descricao'])
            db.session.add(cons)
            db.session.commit()
            return 'Consulta criada com sucesso', 200
        except:
            return 'A consulta não foi criada', 405
        
    elif request.method == 'GET':
        try:
            data = consultas.query.all()
            return render_template('consultas.html', data={'Consultas': [consulta.to_dict() for consulta in data]})
        except Exception as e:
            return 'Não foi possível buscar consultas', 405
        
    elif request.method == 'PUT':
         try:
              data = request.get_json()
              put_consulta_id = data['codigo']
              put_consulta = consultas.query.get(put_consulta_id)
              if put_consulta is None:
                   return {'error': 'Consulta não encontrada'}, 404
              put_consulta.horariodata = data.get('horariodata', put_consulta.horariodata)
              put_consulta.status = data.get('status', put_consulta.status)
              put_consulta.descricao = data.get('descricao', put_consulta.descricao)
              db.session.commit()
              return 'Consulta atualizada com sucesso', 200
         except Exception as e:
              return {'error': 'Erro ao atualizar consulta. Erro {}'.format(e)}, 400
         
    elif request.method == 'DELETE':
        try:
            data = request.get_json()
            consulta_id = data['codigo']
            consulta = consultas.query.get(consulta_id)
            if consulta:
                db.session.delete(consulta)
                db.session.commit()
                return 'Consulta excluída com sucesso', 200
            else:
                return {'error': 'Consulta não encontrada'}, 404
        except Exception as e:
            return {'error': 'Erro ao excluir consulta. Erro {}'.format(e)}, 400