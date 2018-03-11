import { openNewPage } from 'jest-puppe-shots'; // or use the ES module import if you like

import { LoginPage } from '../pages'; // 2. Import your React component

let page;

describe('LoginPage', () => {
  beforeEach(async () => {
    page = await openNewPage(); // 3. Open new page for taking screenshots
  });

  it('should render LoginPage', async () => {
    const component = await page.mount( // 4. Mount your component
      <LoginPage />
    );
  
    const screenshot = await page.takeScreenshot(component); // 5. Take a screenshot of your component
  
    expect(screenshot).toMatchImageSnapshot(); // 6. Assert image snapshots and you're done!
  });
})
