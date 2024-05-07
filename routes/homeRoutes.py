from controllers.homeController import clientesController

def home(app):
    app.route('/')(clientesController)