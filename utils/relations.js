function applyRelations(sequelize){
    console.log(sequelize.models);
    const Universidad = sequelize.models.Universidad;
    const Investigador = sequelize.models.Investigador;
    const Proyectodoctorado = sequelize.models.Proyectodoctorado;

    // Una Universidad puede tener varios investigadores
    Universidad.hasMany(Investigador);
    // Un investigador puede tener varios proyectosdoctorado
    Investigador.hasMany(Proyectodoctorado);
}

module.exports = {applyRelations};