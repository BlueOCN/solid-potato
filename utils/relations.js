function applyRelations(sequelize){
    console.log(sequelize.models);
    const Universidad = sequelize.models.Universidad;
    const Investigador = sequelize.models.Investigador;
    const Proyectodoctorado = sequelize.models.Proyectodoctorado;

    // Una Universidad puede tener varios investigadores
    Universidad.hasMany(Investigador);
    Investigador.belongsTo(Universidad);
    // Un investigador puede tener varios proyectosdoctorado
    Investigador.hasMany(Proyectodoctorado);
    Proyectodoctorado.belongsTo(Investigador);
}

module.exports = {applyRelations};