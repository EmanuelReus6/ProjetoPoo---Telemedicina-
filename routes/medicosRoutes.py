from controllers.medicosController import clientesController

def medicos(app):
    app.route('/medicos', methods=['POST', 'GET', 'PUT', 'DELETE'])(clientesController)