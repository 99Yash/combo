import { priorities } from '@/lib/data';
import { ExternalLink, MoreHorizontal } from 'lucide-react';
import React from 'react';
import { Button } from '../ui/button';
import { SingleCombobox } from '../ui/combobox';

export function StatusBar() {
  const [status, setStatus] = React.useState('');

  return (
    <div className="mt-56 ml-3">
      <h3 className="font-medium tracking-tight">
        Priority Selector + Tooltip
      </h3>

      <div className="flex items-center gap-6 w-full">
        <h4 className="text-xxs text-gray-700 uppercase">hello-7</h4>
        <SingleCombobox
          options={priorities}
          value={status}
          matchTriggerWidth={false}
          placeholder="Select priority..."
          setValue={setStatus}
          trigger={
            <Button
              variant="outline"
              size="icon"
              role="combobox"
              className="border-none bg-transparent text-gray-950"
            >
              {(() => {
                const icon = priorities.find(
                  (placeholder) => placeholder.value === status
                );
                return icon?.icon ? (
                  <icon.icon className="size-5 shrink-0 opacity-50" />
                ) : (
                  <MoreHorizontal className="size-5 shrink-0 opacity-50" />
                );
              })()}
            </Button>
          }
        />
        <ExternalLink className="size-4 text-gray-700" />
        <p className="opacity-50 max-w-3xl">
          GT Walshiem is a typeface designed by Adrian Frutiger for the graphic
          design studio of Adrian Frutiger.
        </p>
      </div>
    </div>
  );
}
