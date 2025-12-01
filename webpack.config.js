import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const isESM = process.env.NODE_MODE === "esm" ? true : false;

const config = {
  entry: "./lib/index.js",
  target: "web",
  mode: "production",
  devtool: "inline-source-map",

  experiments: {
    outputModule: isESM ? true : false,
  },
  //devtool: "inline-source-map",
  output: {
    path: path.resolve("dist"),
    filename: isESM ? "index.mjs" : "index.cjs",
    libraryTarget: isESM ? "module" : "commonjs2",
    chunkFormat: isESM ? "module" : "commonjs",

    module: isESM ? true : false,
  },
  resolve: {
    extensions: [".js", ".jsx",".ts",".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
     
     
    ],
  },
};

export default config;
