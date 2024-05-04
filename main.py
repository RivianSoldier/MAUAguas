from flask import Flask
from config import Config

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # Registrar rotas
    from back.api.routes import bp  
    app.register_blueprint(bp)

    return app

app = create_app()

if __name__ == '__main__':
    app.run()
