from controllers.pacientesController import clientesController

def pacientes(app):
    app.route('/pacientes', methods=['POST', 'GET', 'PUT', 'DELETE'])(clientesController)