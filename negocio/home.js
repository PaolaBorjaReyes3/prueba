var modelo = require("../persistencia/consultas");
var ruta = require("../configuracion/routes");

//consultar, traer y redirigir datos a la vista.
exports.consultaDatos = function (req, res) {
	var sql = 'select * from libro';
	modelo.traerDatos(req, res, sql);
}

exports.datos = function (res, datos) {
	ruta.datos2(res, datos);
	//res.render("index",{Data: datos})
}

//insercion de datos en la BD y patron reposytory este patron dice que se deben validar los datos antes de 
//ingresarlos a la base de datos:
exports.insertar = (req, res) => {
	const data = req.body
	var sql = 'INSERT INTO libro SET?'
	modelo.agregarData(req, res, sql, data)
}

exports.direccionar = (res) => {
	ruta.direccionar2(res);
	//res.redirect('/');
}

//eliminacionde datos de la BD
exports.borrar = function (req, res) {
	var ID = req.params.id
	var sql = 'DELETE FROM libro WHERE id = ?'
	modelo.eliminar(req, res, sql, ID);
}


//modificacion de datos
exports.editar = function (req, res) {
	var ID = req.params.id
	var sql = 'select * from libro where id = ?'
	modelo.editar(req, res, sql, ID);
}

exports.datosEditados = function (res, datos) {
	ruta.datosEditados2(res, datos)
	//res.render("resultados_editar",{Data: datos})
}


//actualizacion de datos
exports.actualiza = function (req, res) {
	const data = req.body;
	var ID = req.params.id;
	var sql = 'UPDATE producto set ? where id = ?'
	modelo.actualizar(req, res, sql, data, ID);
}

exports.fallo = (req, res) => {
	res.render('404');
}





