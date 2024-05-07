from controllers.prescricoesController import clientesController

def prescricoes(app):
    app.route('/prescricoes', methods=['POST', 'GET', 'PUT', 'DELETE'])(clientesController)