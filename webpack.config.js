module.exports = {
  output: {
    libraryTarget: "commonjs"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
    "styled-components": "styled-components"
  }
};
