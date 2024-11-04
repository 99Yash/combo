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
import { allItems, Item } from '@/lib/data';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { Check, ChevronDown, Hash } from 'lucide-react';
import * as React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';

const groupedItems = allItems.reduce((acc, item) => {
  if (!acc[item.group]) {
    acc[item.group] = [];
  }
  acc[item.group].push(item);
  return acc;
}, {} as Record<string, Item[]>);

export function InvisibleCB() {
  const [openInvisible, setOpenInvisible] = React.useState(false);
  const [val, setVal] = React.useState('');

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
        if (index < allItems.length) {
          setVal(allItems[index].value);
          setOpenInvisible(false);
        }
      }
    };

    document.addEventListener('keydown', handleNumberKeyPress);
    return () => document.removeEventListener('keydown', handleNumberKeyPress);
  }, [openInvisible]);

  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm">Combobox (Invisible Placeholder)</span>
      <span className="text-xs">hover to see shortcut</span>
      <Popover open={openInvisible} onOpenChange={setOpenInvisible}>
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger asChild>
              <PopoverTrigger
                asChild
                className="hover:outline hover:outline-[0.5px] hover:outline-purple-400 focus:outline-purple-400 focus:ring-purple-100 focus:ring-offset-2 focus:outline-1"
              >
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={openInvisible}
                  className="flex max-w-[300px] items-center justify-between gap-2 px-3 text-gray-950 py-2 rounded-lg border-gray-400"
                >
                  <div className="flex items-center line-clamp-1 gap-2">
                    {(() => {
                      const icon = allItems.find(
                        (item) => item.value === val
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
                      ? allItems.find((item) => item.value === val)?.label
                      : 'Select framework...'}
                  </div>
                  <ChevronDown className="ml-2 size-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
            </TooltipTrigger>
            <TooltipContent sideOffset={14}>
              Select framework &nbsp; &nbsp; ⌘ &nbsp; E
              <TooltipPrimitive.Arrow className="fill-gray-50 bottom-0 left-1/2" />
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <PopoverContent className="w-[--radix-popover-trigger-width] relative outline-none p-0 backdrop-blur-sm">
          <Command loop>
            <CommandInput
              placeholder="Search..."
              className="text-gray-1000 my-1"
            />

            <CommandEmpty className="text-gray-900 self-center text-sm py-6">
              No framework found.
            </CommandEmpty>

            <CommandList className="scrollbar-hide">
              {(() => {
                let itemCount = 0;
                return Object.entries(groupedItems).map(
                  ([groupName, items]) => (
                    <CommandGroup key={groupName} heading={groupName}>
                      {items.map((item) => {
                        itemCount++;
                        return (
                          <CommandItem
                            key={item.value}
                            value={item.value}
                            onSelect={(currentValue) => {
                              setVal(currentValue);
                              setOpenInvisible(false);
                            }}
                            className="flex items-center justify-between text-gray-900 m-1.5"
                          >
                            <div className="flex line-clamp-1 items-center gap-2">
                              {item.icon && (
                                <item.icon className="size-4 shrink-0" />
                              )}
                              {item.label}
                            </div>
                            <div className="flex items-center gap-2">
                              {val === item.value && (
                                <Check className="size-4 opacity-50" />
                              )}
                              {itemCount <= 9 && (
                                <span className="text-xs opacity-50">
                                  {itemCount}
                                </span>
                              )}
                            </div>
                          </CommandItem>
                        );
                      })}
                    </CommandGroup>
                  )
                );
              })()}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
