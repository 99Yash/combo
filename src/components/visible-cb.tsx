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
import { allItems, Item } from '@/lib/data';
import { Check, ChevronDown, Info, X } from 'lucide-react';
import * as React from 'react';

const groupedItems = allItems.reduce((acc, item) => {
  if (!acc[item.group]) {
    acc[item.group] = [];
  }
  acc[item.group].push(item);
  return acc;
}, {} as Record<string, Item[]>);

export function VisibleCB() {
  const [openVisible, setOpenVisible] = React.useState(false);
  const [val, setVal] = React.useState('');

  React.useEffect(() => {
    if (!openVisible) return;

    const handleNumberKeyPress = (e: KeyboardEvent) => {
      if (e.key >= '1' && e.key <= '9') {
        e.preventDefault();
        const index = parseInt(e.key, 10) - 1;
        if (index < allItems.length) {
          setVal(allItems[index].value);
          setOpenVisible(false);
        }
      }
    };

    document.addEventListener('keydown', handleNumberKeyPress);
    return () => document.removeEventListener('keydown', handleNumberKeyPress);
  }, [openVisible]);

  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm text-gray-1000">
        Combobox (Visible Placeholder)
      </span>
      <Popover open={openVisible} onOpenChange={setOpenVisible}>
        <PopoverTrigger
          asChild
          className="hover:outline hover:outline-[0.5px] hover:outline-purple-400 focus:outline-purple-400 focus:ring-purple-100 focus:ring-offset-2 focus:outline-[0.5px] focus-within:outline-[0.5px] focus-within:outline-purple-400 focus-within:ring-purple-100 focus-within:ring-offset-2"
        >
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={openVisible}
            className="flex max-w-[300px] items-center justify-between gap-2 px-3 py-2 rounded-lg text-gray-900 border-gray-300"
          >
            <div className="flex items-center line-clamp-1 gap-2">
              {(() => {
                const selectedIcon = allItems.find(
                  (item) => item.value === val
                )?.icon;

                if (selectedIcon) {
                  return React.createElement(selectedIcon, {
                    className: 'size-4 shrink-0',
                  });
                }

                if (!val) {
                  return <X className="size-4 shrink-0" />;
                }

                return null;
              })()}

              {val
                ? allItems.find((item) => item.value === val)?.label
                : 'No Framework'}
            </div>
            <ChevronDown className="ml-2 size-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[--radix-popover-trigger-width] outline-none p-0 backdrop-blur-sm bg-transparent">
          <Command loop>
            <CommandInput
              placeholder="Search..."
              className="text-gray-1000 my-1"
            />
            <span className="text-xs ml-2.5 flex items-center gap-1.5 pt-2 px-0.5 text-gray-700">
              <Info className="size-4" />
              This is info text
            </span>
            <CommandSeparator className="my-2" />

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
                              setOpenVisible(false);
                            }}
                            className="flex items-center justify-between text-gray-1000 m-1.5"
                          >
                            <div className="flex items-center gap-2">
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
          <div className="absolute bottom-0 left-0 w-[99%] h-12 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        </PopoverContent>
      </Popover>
    </div>
  );
}
