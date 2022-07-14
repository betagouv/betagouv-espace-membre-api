{
    "compilerOptions": {
      "baseUrl": ".",
      "target": "es2017",
      "module": "CommonJS",
      "lib": ["esnext"],
      "moduleResolution": "node",
      "esModuleInterop": true,
      "strict": true,
      "strictNullChecks": true,
      "resolveJsonModule": true,
      "skipDefaultLibCheck": true,
      "emitDecoratorMetadata": true,
      "experimentalDecorators": true,
      "outDir": "./dist",
      "strictPropertyInitialization": false,
      "paths": {
        "~/*": ["./src/*"],
        "~~/*": ["./*"]
      }
    },
    "ts-node": {
      "require": ["tsconfig-paths/register"]
    }
  }
  