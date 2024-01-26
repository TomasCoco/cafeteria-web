const { src, dest, watch, parallel } = require ('gulp');
const sass = require('gulp-sass')(require('sass'));

function css( done ) {
    // compilar SASS
    // pasos: 1) Identificar archivo 2) Compilar 3) Guardar el .css
    src('src/scss/app.scss')
        .pipe( sass() )
        .pipe( dest('build/css') )

        done();
}


function dev(){
    watch('src/scss/**/*.scss', css);

}


function tareaDefault(done){
    console.log('HOla tarea por default')
    done()
}


exports.css = css;
exports.dev = dev;
exports.default = parallel(css, dev);



/* TAREAS POR DEFAULT */

// Series >> Se inicia una tarea y cuando finaliza, inicia la siguiente tarea.

// Parallel >> Todas las tareas inician al mismo tiempo.
