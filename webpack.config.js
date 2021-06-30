const path = require("path");

module.exports = {
    mode: "development",
    entry: "./source/index.js",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "index_bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/, // 확장자가 css 파일만을 확인하는 정규표현식
                use: [
                    'style-loader', // 가져온 css 파일 코드를 웹페이지 안에 style tag로 주입해주는 loader
                    'css-loader' // css 파일을 읽어와서 webpack으로 가져오는 loader
                ]
            }
        ]
    }
}