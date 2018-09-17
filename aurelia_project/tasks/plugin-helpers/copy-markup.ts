import * as gulp from 'gulp';
import * as path from 'path';
import * as project from '../../aurelia.json';

const root = path.resolve(__dirname, '../../..');

export default function copyMarkup() {
  const tasks = [];
  for (const moduleName in project.plugin.outputs) {
    const task = `markup-${moduleName}`;
    gulp.task(task, () => {
      return gulp
        .src(path.join(root, project.plugin.src, '**/*.html'))
        .pipe(gulp.dest(path.join(project.plugin.output, moduleName)))
    })
    tasks.push(task);
  }
  return gulp.parallel(tasks);
}
