from flask import request, render_template
from database.db import db
from models.usuarios import usuarios

def usuariosController():
        if request.method == 'POST':
            try:
                data = request.get_json()
                print(data)
                user = usuarios(data['nome'], data['email'])
                db.session.add(user)
                db.session.commit()
                return 'Usuário criado com sucesso', 200
            except:
                return 'O usuário não foi criado', 405
            
        elif request.method == 'GET':
            try:
                data = usuarios.query.all()
                return render_template('usuarios.html', data={'usuarios': [cliente.to_dict() for cliente in data]})
            except Exception as e:
                return 'Não foi possível buscar usuários', 405
        elif request.method == 'PUT':
             try:
                  data = request.get_json()
                  put_cliente_id = data['id']
                  put_cliente = usuarios.query.get(put_cliente_id)
                  if put_cliente is None:
                       return {'error': 'Cliente não encontrado'}, 404
                  put_cliente.nome = data.get('nome', put_cliente.nome)
                  put_cliente.email = data.get('email', put_cliente.email)
                  print(put_cliente.nome, put_cliente.email)
                  db.session.commit()
                  return 'Cliente atualizado com sucesso', 200
             except Exception as e:
                  return {'error': 'erro ao atualizar cliente. Erro {}'.format(e)}, 400