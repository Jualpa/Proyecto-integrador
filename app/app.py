from flask import Flask ,jsonify ,request
# del modulo flask importar la clase Flask y los métodos jsonify,request
from flask_cors import CORS       # del modulo flask_cors importar CORS
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
app=Flask(__name__)  # crear el objeto app de la clase Flask
CORS(app) #modulo cors es para que me permita acceder desde el frontend al backend


# configuro la base de datos, con el nombre el usuario y la clave
#jualpa.mysql.pythonanywhere-services.com
app.config['SQLALCHEMY_DATABASE_URI']='mysql+pymysql://jualpa:root12345@jualpa.mysql.pythonanywhere-services.com/jualpa$curso'
# URI de la BBDD                          driver de la BD  user:clave@URLBBDD/nombreBBDD
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False #none
db= SQLAlchemy(app)   #crea el objeto db de la clase SQLAlquemy
ma=Marshmallow(app)   #crea el objeto ma de de la clase Marshmallow


# defino la tabla
class Cursos(db.Model):   # la clase Producto hereda de db.Model
    id=db.Column(db.Integer, primary_key=True)   #define los campos de la tabla
    nombre=db.Column(db.String(100))
    descripcion=db.Column(db.String(400))
    contenido_teo=db.Column(db.String(400))
    contenido_pra=db.Column(db.String(400))
    precio=db.Column(db.Integer)
    vacantes=db.Column(db.Integer)
    imagen=db.Column(db.String(400))
    def __init__(self,nombre,descripcion,contenido_teo,contenido_pra,precio,vacantes,imagen):   #crea el  constructor de la clase
        self.nombre=nombre   # no hace falta el id porque lo crea sola mysql por ser auto_incremento
        self.descripcion=descripcion
        self.contenido_teo=contenido_teo
        self.contenido_pra=contenido_pra
        self.vacantes=vacantes
        self.precio=precio
        self.imagen=imagen


    #  si hay que crear mas tablas , se hace aqui


with app.app_context():
    db.create_all()  # aqui crea todas las tablas
#  ************************************************************
class CursoSchema(ma.Schema):
    class Meta:
        fields=('id','nombre','descripcion','contenido_teo','contenido_pra','precio','vacantes','imagen')

curso_schema=CursoSchema()            # El objeto curso_schema es para traer un producto
cursos_schema=CursoSchema(many=True)  # El objeto cursos_schema es para traer multiples registros de producto


# crea los endpoint o rutas (json)
@app.route('/cursos',methods=['GET'])
def get_Cursos():
    all_cursos=Cursos.query.all()         # el metodo query.all() lo hereda de db.Model
    result=cursos_schema.dump(all_cursos)  # el metodo dump() lo hereda de ma.schema y
                                                # trae todos los registros de la tabla
    return jsonify(result)                      # retorna un JSON de todos los registros de la tabla




@app.route('/cursos/<id>',methods=['GET'])
def get_curso(id):
    curso=Cursos.query.get(id)
    return curso_schema.jsonify(curso)   # retorna el JSON de un producto recibido como parametro




@app.route('/cursos/<id>',methods=['DELETE'])
def delete_curso(id):
    curso=Cursos.query.get(id)
    db.session.delete(curso)
    db.session.commit()
    return curso_schema.jsonify(curso)   # me devuelve un json con el registro eliminado


@app.route('/cursos', methods=['POST']) # crea ruta o endpoint
def create_curso():
    #print(request.json)  # request.json contiene el json que envio el cliente
    nombre=request.json['nombre']
    descripcion=request.json['descripcion']
    contenido_teo=request.json['contenido_teo']
    contenido_pra=request.json['contenido_pra']
    precio=request.json['precio']
    vacantes=request.json['vacantes']
    imagen=request.json['imagen']
    new_curso=Cursos(nombre,descripcion,contenido_teo,contenido_pra,precio,vacantes,imagen)
    db.session.add(new_curso)
    db.session.commit()
    return curso_schema.jsonify(new_curso)


@app.route('/cursos/<id>' ,methods=['PUT'])
def update_curso(id):
    curso=Cursos.query.get(id)
    nombre=request.json['nombre']
    descripcion=request.json['descripcion']
    contenido_teo=request.json['contenido_teo']
    contenido_pra=request.json['contenido_pra']
    precio=request.json['precio']
    vacantes=request.json['vacantes']
    imagen=request.json['imagen']


    curso.nombre=nombre   # no hace falta el id porque lo crea sola mysql por ser auto_incremento
    curso.descripcion=descripcion
    curso.contenido_teo=contenido_teo
    curso.contenido_pra=contenido_pra
    curso.vacantes=vacantes
    curso.precio=precio
    curso.imagen=imagen


    db.session.commit()
    return curso_schema.jsonify(curso)



# programa principal *******************************
if __name__=='__main__':
    app.run(debug=True, port=5000)    # ejecuta el servidor Flask en el puerto 5000

# A very simple Flask Hello World app for you to get started with...

# from flask import Flask

# app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello from Flask!'