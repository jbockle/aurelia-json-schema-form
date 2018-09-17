import * as gulp from 'gulp';
import { Settings, createProject } from 'gulp-typescript';
import * as sourcemaps from 'gulp-sourcemaps';
import * as project from '../../aurelia.json';
import * as path from 'path';
import * as typescript from 'typescript';

const root = path.resolve(__dirname, '../../..');

function compileTypeScriptFor(moduleType: string) {
  const options = project.plugin.outputs[moduleType].settings;
  const compile = createCompiler(options);

  return gulp
    .src(path.join(root, project.plugin.src, '**/*.ts'))
    .pipe(sourcemaps.init())
    .pipe(compile())
    .pipe(sourcemaps.write({ sourceRoot: project.plugin.src }))
    .pipe(gulp.dest(path.join(project.plugin.output, moduleType)));
}

function createCompiler(options: Settings) {
  const mergedSettings = Object.assign(
    {
      typescript,
      declaration: true,
      rootDir: project.plugin.src
    }, options);

  const compile = createProject('tsconfig.json', mergedSettings);

  return compile;
}

function createTypeScriptCompilationTask(moduleName: string) {
  const task = `typescript-${moduleName}`;

  gulp.task(task, () => compileTypeScriptFor(moduleName));

  return task;
}

export function createTypeScriptCompilationTasks() {
  const tasks: string[] = [];

  for (const moduleName in project.plugin.outputs) {
    tasks
      .push(createTypeScriptCompilationTask(moduleName));
  }

  return gulp.parallel(tasks);
}
