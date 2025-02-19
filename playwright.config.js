module.exports = {
    projects: [
      {
        name: 'chromium',
        use: {
          browserName: 'chromium', //chromium 브라우저로 실행(실행 할 브라우저 명시)
          headless: false, //브라우저 실행되는 모습 확인
        },
      },
    ],
  };