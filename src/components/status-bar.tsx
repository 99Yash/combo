import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { priorities } from '@/lib/data';
import { GTWalsheim } from '@/styles/fonts';
import { Check, MoreHorizontal } from 'lucide-react';
import React from 'react';
import { Button } from './ui/button';

export function StatusBar() {
  const [openVisible, setOpenVisible] = React.useState(false);
  const [val, setVal] = React.useState('');

  return (
    <Popover open={openVisible} onOpenChange={setOpenVisible}>
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger asChild>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                role="combobox"
                aria-expanded={openVisible}
                className="bg-transparent"
              >
                <div className="flex items-center gap-2">
                  {(() => {
                    const icon = priorities.find(
                      (placeholder) => placeholder.value === val
                    )?.icon;
                    return icon ? (
                      React.createElement(icon, {
                        className: 'size-4 shrink-0 opacity-50',
                      })
                    ) : (
                      <MoreHorizontal className="size-4 shrink-0 opacity-50" />
                    );
                  })()}
                </div>
              </Button>
            </PopoverTrigger>
          </TooltipTrigger>

          <TooltipContent
            className={`${GTWalsheim.className} bg-muted text-foreground`}
          >
            {val
              ? `Priority: ${priorities.find((p) => p.value === val)?.label}`
              : 'Select priority'}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <PopoverContent className={`p-0 ${GTWalsheim.className}`}>
        <Command loop>
          <CommandInput
            placeholder="Search..."
            className="text-foreground caret-violet-500"
          />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandList className="scrollbar-hide">
            <CommandGroup className="m-0.5">
              {priorities.map((p, i) => {
                const icon = p.icon;
                return (
                  <CommandItem
                    key={p.value}
                    value={p.value}
                    onSelect={(currentValue) => {
                      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                      priorities.some((p) => p.value === currentValue)
                        ? setVal(currentValue)
                        : setVal(priorities[0].value);
                      setOpenVisible(false);
                    }}
                    className="flex items-center justify-between text-foreground"
                  >
                    <div className="flex items-center gap-3.5">
                      {icon &&
                        React.createElement(icon, {
                          className: 'size-4 shrink-0 opacity-50',
                        })}
                      {p.label}
                    </div>
                    <div className="flex items-center gap-2">
                      {val === p.value && (
                        <Check className="size-4 text-foreground/40" />
                      )}
                      {i < 9 && (
                        <span className="text-sm text-foreground/40">
                          {i + 1}
                        </span>
                      )}
                    </div>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
