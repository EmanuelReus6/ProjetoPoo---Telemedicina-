from controllers.usuariosController import clientesController

def usuarios(app):
    app.route('/usuarios', methods=['POST', 'GET', 'PUT', 'DELETE'])(clientesController)