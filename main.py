from flask import Flask
from database.db import db
from routes.index import default_routes
from flask_cors import CORS

class App:
    def __init__(self):
        self.app = Flask(__name__)
        CORS(self.app)
        self.app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:030506@localhost/hospital'
        db.init_app(self.app)
        default_routes(self.app)

        with self.app.app_context():
             db.create_all()
        default_routes(self.app)

    def run(self):
        return self.app.run(port=3000, host='localhost', debug=True)
    
app = App()
app.run()