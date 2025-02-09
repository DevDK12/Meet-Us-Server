//? Tsconfig options
//* Make sourceMap = true


//* By default, TypeScript will merge the declarations of '*d.ts' files  include them in project

//_ include[]
//* We can specify them in { "include": [] } in tsconfig.json

//_ files[]
//* We can specify the files to be included in the project

//_ typeRoots[]
//* We can specify the folders to be included
//* By deault typescript is pointing to '@types' folder in node_modules

//_ types[]
//* limiting packages from typeRoots folder that can be included in the project using types[]