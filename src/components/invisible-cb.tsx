import { Button } from '@/components/ui/button';
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
import { frameworks, nonReactFrameworks, placeholders } from '@/lib/data';
import { Check, ChevronDown, Hash } from 'lucide-react';
import * as React from 'react';
import { GTWalsheim } from '../styles/fonts';

export function InvisibleCB() {
  const [openInvisible, setOpenInvisible] = React.useState(false);
  const [val, setVal] = React.useState('');

  const arrays = React.useMemo(() => {
    return [...placeholders, ...frameworks, ...nonReactFrameworks];
  }, []);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'e' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpenInvisible((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  React.useEffect(() => {
    if (!openInvisible) return;

    const handleNumberKeyPress = (e: KeyboardEvent) => {
      if (e.key >= '1' && e.key <= '9') {
        e.preventDefault();
        const index = parseInt(e.key, 10) - 1;
        if (index < arrays.length) {
          setVal(arrays[index].value);
          setOpenInvisible(false);
        }
      }
    };

    document.addEventListener('keydown', handleNumberKeyPress);
    return () => document.removeEventListener('keydown', handleNumberKeyPress);
  }, [openInvisible, arrays]);

  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm">Combobox (Invisible Placeholder)</span>
      <span className="text-xs">hover to see shortcut</span>
      <Popover open={openInvisible} onOpenChange={setOpenInvisible}>
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger asChild>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={openInvisible}
                  className="max-w-[300px] justify-between default:ring hover:outline hover:outline-2 hover:outline-violet-700 focus:ring-1 focus:ring-violet-700 focus:ring-offset-2 focus-visible:ring-violet-500"
                >
                  <div className="flex items-center line-clamp-1 gap-2">
                    {(() => {
                      const icon = placeholders.find(
                        (placeholder) => placeholder.value === val
                      )?.icon;
                      return icon ? (
                        React.createElement(icon, {
                          className: 'size-4 shrink-0',
                        })
                      ) : val ? null : (
                        <Hash className="size-4 shrink-0" />
                      );
                    })()}
                    {val
                      ? arrays.find((item) => item.value === val)?.label
                      : 'Select framework...'}
                  </div>
                  <ChevronDown className="ml-2 size-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
            </TooltipTrigger>
            <TooltipContent
              sideOffset={14}
              className={`${GTWalsheim.className} bg-muted text-foreground`}
            >
              Select framework &nbsp; &nbsp; ⌘ &nbsp; E
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-1 rotate-180 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[6px] border-b-muted"></div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <PopoverContent
          className={`w-[--radix-popover-trigger-width] p-0 max-h-[300px] backdrop-blur-md ${GTWalsheim.className}`}
        >
          <Command loop>
            <CommandInput placeholder="Search..." className="text-foreground" />
            <CommandEmpty>No framework found.</CommandEmpty>

            <CommandList className="scrollbar-hide">
              <CommandGroup>
                {placeholders.map((placeholder, i) => (
                  <CommandItem
                    key={placeholder.value}
                    value={placeholder.value}
                    onSelect={(currentValue) => {
                      setVal(currentValue === val ? '' : currentValue);
                      setOpenInvisible(false);
                    }}
                    className="flex items-center justify-between text-foreground m-1"
                  >
                    <div className="flex items-center gap-2">
                      {placeholder.icon && (
                        <placeholder.icon className="size-4 shrink-0" />
                      )}
                      {placeholder.label}
                    </div>
                    <div className="flex items-center gap-2">
                      {val === placeholder.value && (
                        <Check className="size-4 opacity-50" />
                      )}
                      {i < 9 && (
                        <span className="text-sm opacity-50">{i + 1}</span>
                      )}
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>

              <CommandGroup heading="React">
                {frameworks.map((framework, i) => (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={(currentValue) => {
                      setVal(currentValue === val ? '' : currentValue);
                      setOpenInvisible(false);
                    }}
                    className="flex items-center justify-between text-foreground m-1"
                  >
                    <div className="flex items-center gap-2">
                      {framework.label}
                    </div>
                    <div className="flex items-center gap-2">
                      {val === framework.value && (
                        <Check className="size-4 opacity-50" />
                      )}
                      {i + placeholders.length < 9 && (
                        <span className="text-sm opacity-50">
                          {i + placeholders.length + 1}
                        </span>
                      )}
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>

              <CommandGroup heading="Non-React">
                {nonReactFrameworks.map((framework, i) => (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={(currentValue) => {
                      setVal(currentValue === val ? '' : currentValue);
                      setOpenInvisible(false);
                    }}
                    className="flex items-center justify-between text-foreground m-1"
                  >
                    <div className="flex items-center gap-2">
                      {framework.label}
                    </div>
                    <div className="flex items-center gap-2">
                      {val === framework.value && (
                        <Check className="size-4 text-foreground/40" />
                      )}
                      {i + frameworks.length + placeholders.length < 9 && (
                        <span className="text-sm text-foreground/40">
                          {i + placeholders.length + frameworks.length + 1}
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
