import fs from 'fs';
import path from 'path';
import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';
import App from './App';
import * as url from 'url';
import { ServerStyleSheet } from 'styled-components';

const app = express();
const html = fs.readFileSync(
    path.resolve(__dirname, '../dist/index.html'),
    'utf-8'
);

app.use('/dist', express.static('dist'));
app.get('*', (req, res) => {
    //* 문자열로 된 주소값을 구조체 변환
    const parsedUrl = url.parse(req.url, true);
    const page = parsedUrl.pathname ? parsedUrl.pathname.substr(1) : 'console';

    //* 스타일을 추출하는데 사용될 객체
    const sheet = new ServerStyleSheet();

    //* renderToString 함수를 이용해 App 컴포넌트를 렌더링
    const renderString = renderToString(
        sheet.collectStyles(<App page={page} />)
    );

    //* 스타일 정보 추출
    const styles = sheet.getStyleTags();

    //* client에 전달할 초기 데이터
    const initialData = { page };
    const result = html
        .replace(
            '<div id="root"></div>',
            `<div id="root">${renderString}</div>`
        )
        .replace('__DATA_FROM_SERVER__', JSON.stringify(initialData))
        .replace('__STYLE_FROM_SERVER__', styles);

    res.send(result);
});

app.listen(3000);
