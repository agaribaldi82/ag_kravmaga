from flask import Flask
from flask import render_template, redirect, request, Response, session
from flask_mysqldb import MySQL, MySQLdb

app = Flask(__name__,template_folder='template')
app.config['MYSQL_HOST']='10.0.10.54'
app.config['MYSQL_USER']='morwicjv_agaribaldi'
app.config['MYSQL_PORT']=3306
app.config['MYSQL_PASSWORD']=''
app.config['MYSQL_DB']='morwicjv_alumnos-kmg.login'
app.config['MYSQL_CURSORCLASS']='DictCursor'
app.config['MYSQL_CONNECT_TIMEOUT']=60


mysql = MySQL(app)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/admin')
def admin():
    return render_template('admin.html')

#Funcion de LOGIN
@app.route('/acceso_login', methods= ["GET", "POST"])
def login():
    
    if request.method == 'POST' and 'txtCorreo' in request.form and 'txtPassword':
        _correo = request.form['txtCorreo']
        _password = request.form['txtPassword']
        cur = mysql.connection.cursor()
        cur.execute('SELECT * FROM login WHERE email = %s and contrasena =%s', (_correo, _password,))
        account = cur.fetchone()
        
        if account:
            session['logueado'] = True
            session['usuario_id'] = account['usuario_id']
            return render_template('admin.html')
        
        else:
            return render_template('index.html')

    return render_template('index.html')


if __name__ == '__main__':
    app.secret_key='adrian_g'
    app.run(debug=True, host='0.0.0.0', port=5000, threaded=True)
    
