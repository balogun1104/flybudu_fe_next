'use client';

import { DatePicker } from '@nextui-org/date-picker';
import { DateValue, parseAbsoluteToLocal } from '@internationalized/date';
import { I18nProvider } from '@react-aria/i18n';
import { useState } from 'react';

export default function App() {
  let [date, setDate] = useState<DateValue>(
    parseAbsoluteToLocal('2021-04-07T18:45:22Z')
  );

  return (
    <div className="flex flex-col gap-4">
      <I18nProvider locale="hi-IN-u-ca-indian">
        <DatePicker
          showMonthAndYearPickers
          variant="flat"
          label="Date"
          value={date}
          onChange={setDate}
        />
      </I18nProvider>
    </div>
  );
}
