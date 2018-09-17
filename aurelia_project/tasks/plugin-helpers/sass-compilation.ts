import * as gulp from 'gulp';
import * as sourcemaps from 'gulp-sourcemaps';
import * as sass from 'gulp-sass';
import * as path from 'path';
import * as project from '../../aurelia.json';

const root = path.resolve(__dirname, '../../..');

export default function createStylesCompilationTask() {
  const task = 'styles-all';
  gulp.task(task, () => {
    let result = gulp
      .src(path.join(root, project.plugin.src, '**/*.{scss,css}'))
      .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(sourcemaps.write());
    for (const moduleName in project.plugin.outputs) {
      result = result
        .pipe(gulp.dest(path.join(project.plugin.output, moduleName)));
    }
    return result;
  });
  return gulp.task(task);
}
