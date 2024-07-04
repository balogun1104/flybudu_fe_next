"use client";

import { DatePicker } from "@nextui-org/date-picker";
import { DateValue } from "@internationalized/date";
import { I18nProvider } from "@react-aria/i18n";
import { useState } from "react";

export default function App() {
  const [date, setDate] = useState<DateValue | null>(null);

  return (
    <div className="flex flex-col gap-4">
      <I18nProvider locale="hi-IN-u-ca-indian">
        <DatePicker
          showMonthAndYearPickers
          variant="flat"
          label="Date"
          value={date as any}
          onChange={(newDate: any) => setDate(newDate)}
        />
      </I18nProvider>
    </div>
  );
}
