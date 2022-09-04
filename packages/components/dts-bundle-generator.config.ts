import packageJson from './package.json';

export default {
  entries: [
    {
      filePath: "./src/index.ts",
      outFile: `./dist/${packageJson.name}.d.ts`,
      noCheck: false
    }
  ]
};
