from flask import request, render_template
from database.db import db
from models.medicos import medicos

def pacientesController():
    if request.method == 'POST':
        try:
            data = request.get_json()
            user = medicos(data['nome'], data['email'], data['senha'], data['papel'])
            db.session.add(user)
            db.session.commit()
            return 'Usuário criado com sucesso', 200
        except:
            return 'O usuário não foi criado', 405
        
    elif request.method == 'GET':
        try:
            data = medicos.query.all()
            return render_template('medicos.html', data={'medicos': [cliente.to_dict() for cliente in data]})
        except Exception as e:
            return 'Não foi possível buscar usuários', 405
    
    elif request.method == 'PUT':
         try:
              data = request.get_json()
              put_cliente_id = data['codigo']
              put_cliente = medicos.query.get(put_cliente_id)
              if put_cliente is None:
                   return {'error': 'Cliente não encontrado'}, 404
              put_cliente.nome = data.get('nome', put_cliente.nome)
              put_cliente.email = data.get('email', put_cliente.email)
              put_cliente.senha = data.get('senha', put_cliente.senha)
              put_cliente.papel = data.get('papel', put_cliente.papel)
              db.session.commit()
              return 'Cliente atualizado com sucesso', 200
         except Exception as e:
              return {'error': 'Erro ao atualizar cliente. Erro {}'.format(e)}, 400
    
    elif request.method == 'DELETE':
        try:
            data = request.get_json()
            cliente_id = data['codigo']
            cliente = medicos.query.get(cliente_id)
            if cliente:
                db.session.delete(cliente)
                db.session.commit()
                return 'Cliente excluído com sucesso', 200
            else:
                return {'error': 'Cliente não encontrado'}, 404
        except Exception as e:
            return {'error': 'Erro ao excluir cliente. Erro {}'.format(e)}, 400