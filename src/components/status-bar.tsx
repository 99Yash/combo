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
import { Check, ExternalLink, MoreHorizontal } from 'lucide-react';
import React from 'react';
import { Button } from './ui/button';

export function StatusBar() {
  const [open, setOpen] = React.useState(false);
  const [val, setVal] = React.useState('');

  React.useEffect(() => {
    if (!open) return;

    const handleNumberKeyPress = (e: KeyboardEvent) => {
      if (e.key >= '1' && e.key <= '9') {
        e.preventDefault();
        const index = parseInt(e.key, 10) - 1;
        if (index < priorities.length) {
          setVal(priorities[index].value);
          setOpen(false);
        }
      }
    };

    document.addEventListener('keydown', handleNumberKeyPress);
    return () => document.removeEventListener('keydown', handleNumberKeyPress);
  }, [open]);

  return (
    <>
      <h3 className="font-medium tracking-tight">
        Priority Selector + Tooltip
      </h3>

      <div className="flex items-center gap-6 w-full">
        <h4 className="text-xxs text-gray-700 uppercase">hello-7</h4>
        <Popover open={open} onOpenChange={setOpen}>
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger asChild>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    role="combobox"
                    aria-expanded={open}
                    className="border-none bg-transparent"
                  >
                    <div className="flex items-center gap-2">
                      {(() => {
                        const icon = priorities.find(
                          (placeholder) => placeholder.value === val
                        )?.icon;
                        return icon ? (
                          React.createElement(icon, {
                            className: 'size-5 shrink-0 opacity-50',
                          })
                        ) : (
                          <MoreHorizontal className="size-5 shrink-0 opacity-50" />
                        );
                      })()}
                    </div>
                  </Button>
                </PopoverTrigger>
              </TooltipTrigger>

              <TooltipContent
                className={`${GTWalsheim.className} bg-muted text-gray-1000`}
              >
                {val
                  ? `Priority: ${
                      priorities.find((p) => p.value === val)?.label
                    }`
                  : 'Select priority'}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <PopoverContent className={`p-0 ${GTWalsheim.className}`}>
            <Command loop>
              <CommandInput
                placeholder="Search..."
                className="text-gray-1000 caret-purple-700"
              />

              <CommandEmpty className="text-gray-900 self-center text-sm py-6">
                Priority not found.
              </CommandEmpty>

              <CommandList className="scrollbar-hide">
                <CommandGroup className="m-0.5">
                  {priorities.map((p, i) => {
                    const icon = p.icon;
                    return (
                      <CommandItem
                        key={p.value}
                        value={p.value}
                        onSelect={(currentValue) => {
                          if (
                            priorities.some((p) => p.value === currentValue)
                          ) {
                            setVal(currentValue);
                          } else {
                            setVal(priorities[0].value);
                          }
                          setOpen(false);
                        }}
                        className="flex items-center justify-between text-gray-1000"
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
                            <Check className="size-4 text-gray-1000/40" />
                          )}
                          {i < 9 && (
                            <span className="text-sm text-gray-1000/40">
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
        <ExternalLink className="size-4 text-gray-700" />
        <p className="opacity-50 max-w-3xl">
          GT Walshiem is a typeface designed by Adrian Frutiger for the graphic
          design studio of Adrian Frutiger. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Accusamus, sapiente blanditiis?
          Perspiciatis.
        </p>
      </div>
    </>
  );
}
