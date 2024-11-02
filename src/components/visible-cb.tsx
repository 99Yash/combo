import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { frameworks } from '@/lib/data';
import { Check, ChevronDown, Info, X } from 'lucide-react';
import * as React from 'react';
import { GTWalsheim } from '../styles/fonts';

export function VisibleCb() {
  const [openVisible, setOpenVisible] = React.useState(false);
  const [val, setVal] = React.useState('');

  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm text-foreground">
        Combobox (Visible Placeholder)
      </span>
      <Popover open={openVisible} onOpenChange={setOpenVisible}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={openVisible}
            className="w-full justify-between hover:outline hover:outline-2 hover:outline-violet-700 focus:ring-1 focus:ring-violet-700 focus:ring-offset-2 focus-visible:ring-violet-500"
          >
            <div className="flex items-center gap-2">
              {!val && <X className="size-4 shrink-0 opacity-50" />}
              {val
                ? frameworks.find((framework) => framework.value === val)?.label
                : 'No Framework'}
            </div>
            <ChevronDown className="ml-2 size-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className={`w-[--radix-popover-trigger-width] p-0 ${GTWalsheim.className}`}
        >
          <Command loop>
            <CommandInput placeholder="Search..." className="text-foreground" />
            <CommandEmpty>No framework found.</CommandEmpty>

            <CommandList>
              <CommandGroup title="React" className="m-0.5">
                <span className="text-xs ml-2.5 flex items-center gap-1.5 py-2 px-0.5 text-foreground/60">
                  <Info className="size-4" />
                  This is info text
                </span>

                <CommandSeparator className="my-1" />
                {frameworks.map((framework, i) => (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={(currentValue) => {
                      setVal(currentValue === val ? '' : currentValue);
                      setOpenVisible(false);
                    }}
                    className="flex items-center justify-between text-foreground"
                  >
                    <div className="flex items-center gap-2">
                      {framework.label}
                    </div>
                    <div className="flex items-center gap-2">
                      {val === framework.value && (
                        <Check className="size-4 text-foreground/40" />
                      )}
                      {i < 9 && (
                        <span className="text-sm text-foreground/40">
                          {i + 1}
                        </span>
                      )}
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
