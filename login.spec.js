const { test, expect } = require('@playwright/test');

test('Wadiz 로그인 테스트', async ({ page }) => {
  // Wadiz 메인 페이지로 이동
  await page.goto('https://www.wadiz.kr/web/main');

  // 로그인 버튼 클릭 (여기서 'selector-for-login-button'은 로그인 버튼의 실제 선택자로 교체)
  await page.click('.User_btnSign__1URTs');

  // 로그인 폼이 로드될 때까지 기다림 (선택자 수정 필요)
  await page.waitForSelector('selector-for-login-form');

  // 이메일과 비밀번호 입력 (실제 입력 필드 선택자로 변경)
  await page.fill('selector-for-email-input', 'your-email@example.com');
  await page.fill('selector-for-password-input', 'your-password');

  // 로그인 제출 버튼 클릭 (선택자 수정 필요)
  await page.click('selector-for-submit-button');

  // 로그인 후 페이지 이동 또는 특정 요소 로드 대기
  await page.waitForNavigation();

  // 로그인 성공 여부 확인 (예: 특정 URL이나 요소 검증)
  expect(page.url()).toContain('expected-url-after-login');
});
