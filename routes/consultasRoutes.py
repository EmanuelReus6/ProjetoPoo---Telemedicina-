from controllers.consultasController import clientesController

def consultas(app):
    app.route('/consultas', methods=['POST', 'GET', 'PUT', 'DELETE'])(clientesController)