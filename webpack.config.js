import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(import.meta.dirname, "dist"),
    clean: true, // αδειάζει το dist πριν από κάθε build
  },
  devtool: "eval-source-map", // errors δείχνουν στον πραγματικό src κώδικα
  devServer: {
    watchFiles: ["./src/template.html"], // παρακολουθεί και το HTML (default δεν το κάνει)
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/template.html" })],
  module: {
    rules: [{ test: /\.css$/i, use: ["style-loader", "css-loader"] }],
  },
};
