import { TestCase, TestResult } from '@playwright/test/reporter';
import ListReporter from '@playwright/test/lib/test/reporters/list';

class CustomListReporter extends ListReporter {
  onTestEnd(test: TestCase, result: TestResult): void {
    console.log('override onTestEnd on standart ListReporter')
  }
}

export default CustomListReporter;
