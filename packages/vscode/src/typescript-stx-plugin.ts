import * as ts from 'typescript/lib/tsserverlibrary';

function init(modules: { typescript: typeof ts }): ts.server.PluginModule {
  return {
    create(info: ts.server.PluginCreateInfo): ts.LanguageService {
      // Get the original language service
      const languageService = info.languageService;

      // Return the original language service with minimal changes
      // Just register STX files with the language service
      return languageService;
    },

    getExternalFiles(project: ts.server.Project): string[] {
      // Add STX files to the project
      return project.getFileNames().filter(file => file.endsWith('.stx'));
    },
  };
}

export = init;
