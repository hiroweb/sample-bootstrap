const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin }  = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const webpack = require('webpack');

module.exports = {
  mode:'development',
  devtool:'source-map',
  entry:{
    photo:'./src/js/photo.js',
  },

  output:{
    path:path.resolve(__dirname,'./dist'),
    filename:'./js/[name].js',
  },
  module :{
    rules:[
      {
        test:/\.(ts|tsx)/,
        exclude:/node_modules/,
        use:[
          {
            loader:'ts-loader',
          }
        ]
      },
      {
        test:/\.vue/,
        exclude:/node_modules/,
        use:[
          {
            loader:'vue-loader',
          }
        ]
      },
      {
        test: /\.(js|jsx)/,
        exclude:/node_modules/,
        use:[
          {
            loader:'babel-loader',
            options:{
              presets:[
                ['@babel/preset-env',{'targets':'> 0.25%, not dead'},],
                '@babel/preset-react',
              ],
            },
          },
        ],
      },
      {
        test: /\.(css|sass|scss)/,
        exclude:/node_modules/,
        use:[
          {
            loader:MiniCssExtractPlugin.loader,
          },
          {
            loader:'css-loader',
            options:{
              sourceMap:true,
            }
          },
          {
            loader:'sass-loader',
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|otf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/resource',
        generator:{
          filename:'fonts/[name][ext]'
        }
      },
      // {
      //   test: /\.(woff(2)?|ttf|otf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: '[name].[ext]',
      //         outputPath: 'fonts/',
      //         output:{
      //           crlf:false
      //         }
      //       }
      //     }
      //   ]
      // },
      {
        test: /\.(png|jpg|jpeg)/,
        type:'asset/resource',
        generator:{
          filename:'images/[name][ext]'
        },
        use:[
          // {
          //   loader:'file-loader',
          //   options:{
          //     esModule: false,
          //     name: 'images/[name].[ext]',
          //   }
          // },
          {
            loader:'image-webpack-loader',
            options:{
              mozjpeg:{
                progressive:true,
                quality:65,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                enabled: false,
              },
              webp: {
                quality: 75,
              },
              maxWidth:1600, //画像の最大横幅を指定
            }
          }
        ],
      },
    ],
  },
  plugins:[
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    }),
    new MiniCssExtractPlugin({
      filename:'./css/[name].css',
    }),

    new HtmlWebpackPlugin({
      template: 'src/photo.html',
      filename: 'index.html',
      inject: 'body',
      chunks: ['photo'],
      minify: false,
      indentSize: 4,
      indentWithTabs: false,
      preserveNewlines: true,
      collapseWhitespace: false,
      quoteCharacter: "'"
    }),
    new CleanWebpackPlugin(),

  ],
  devServer: {
    static: path.resolve(__dirname, 'src'),
  },
}
