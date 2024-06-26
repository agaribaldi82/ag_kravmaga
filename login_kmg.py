from flask import Flask
from flask import render_template, redirect, request, Response, session
from flask_mysqldb import MySQL, MySQLdb
import pymysql


app= Flask(__name__)

conexion = pymysql.connect(host='193.203.175.68', 
                           port= 3306,
                           user = 'u540045792_agaribaldi', 
                           password= 'Bruno2906-',
                           db = 'u540045792_socios')


@app.route('/')
def home():
    return render_template('login.html')

@app.route('/admin')
def admin():
    return render_template('admin.html')

#Funcion de LOGIN
@app.route('/acceso_login', methods= ["GET", "POST"])
def login():
    
    if request.method == 'POST' and 'usuario' in request.form and 'password':
        usuario = request.form['usuario']
        password = request.form['password']
        cur = conexion.cursor(pymysql.cursors.DictCursor)
        cur.execute('SELECT * FROM login WHERE usuario = %s and password =%s', (usuario, password,))
        account = cur.fetchone()
        
        if account:
            session['logueado'] = True
            session['id'] = account['id']
            return render_template('admin.html')
        
        else:
            return render_template('login.html')

    return render_template('login.html')


if __name__ == '__main__':
    app.secret_key='adrian_g'
    app.run(debug=True, host='0.0.0.0', port=5000, threaded=True)
    
