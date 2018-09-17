import * as del from 'del';
import * as path from 'path';
import * as project from '../aurelia.json';
import * as gulp from 'gulp';
import { createTypeScriptCompilationTasks } from './plugin-helpers/typescript-compilation';
import copyMarkup from './plugin-helpers/copy-markup';
import createStylesCompilationTask from './plugin-helpers/sass-compilation';

const root = path.resolve(__dirname, '../..');

function clean() {
  const dist = path.join(root, project.plugin.output);
  return del([dist]);
}

const build = gulp.series(
  clean,
  gulp.parallel(
    createTypeScriptCompilationTasks(),
    copyMarkup(),
    createStylesCompilationTask()
  )
);

export { build as default };
