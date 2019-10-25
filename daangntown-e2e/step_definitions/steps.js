const { I } = inject();
// Add in your custom step files

Given(/^내가 "(.*?)"에 간다면$/, () => {
  I.amOnPage("/");
});

When('지역선택 box에서 {string}로 두었을 때', (string) => {
  I.selectOption('regions', string);
});

Then('나는 {string}란 타이틀을 볼 수 있다.', (string) => {
  I.see(string);
});

Then('나는 {string}의 공동구매 게시물을 볼 수 없다.', (string) => {
  I.dontSee(string);
});
