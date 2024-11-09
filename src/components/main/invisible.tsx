import { allItems } from '@/lib/data';
import { ChevronDown, Hash } from 'lucide-react';
import * as React from 'react';
import { Button } from '../ui/button';
import { SingleCombobox } from '../ui/combobox';

export function Invisible() {
  const [search, setSearch] = React.useState('');
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'e' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen?.((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [open, setOpen]);

  return (
    <SingleCombobox
      options={allItems}
      value={search}
      setValue={setSearch}
      open={open}
      onOpenChange={setOpen}
      trigger={
        <Button
          id="combobox-trigger"
          variant="outline"
          role="combobox"
          className="text-gray-950 max-w-[300px] items-center justify-between gap-2 rounded-lg border-gray-400 hover:outline hover:outline-[0.5px] hover:outline-purple-400 focus:outline-purple-400 focus:ring-purple-100 focus:ring-offset-2 focus:outline-1"
        >
          <div className="flex items-center gap-2">
            {(() => {
              const icon = allItems.find((item) => item.value === search);
              return icon?.icon ? (
                <icon.icon className="size-4 shrink-0" />
              ) : search ? null : (
                <Hash className="size-4 shrink-0" />
              );
            })()}

            {allItems.find((item) => item.value === search)?.label ??
              'No framework'}
          </div>
          <ChevronDown className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      }
    />
  );
}
