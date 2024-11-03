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
import { frameworks, nonReactFrameworks, placeholders } from '@/lib/data';
import { Check, ChevronDown, Info, X } from 'lucide-react';
import * as React from 'react';
import { GTWalsheim } from '../styles/fonts';

export function VisibleCB() {
  const [openVisible, setOpenVisible] = React.useState(false);
  const [val, setVal] = React.useState('');

  const arrays = React.useMemo(() => {
    return [...placeholders, ...frameworks, ...nonReactFrameworks];
  }, []);

  React.useEffect(() => {
    if (!openVisible) return;

    const handleNumberKeyPress = (e: KeyboardEvent) => {
      if (e.key >= '1' && e.key <= '9') {
        e.preventDefault();
        const index = parseInt(e.key, 10) - 1;
        if (index < arrays.length) {
          setVal(arrays[index].value);
          setOpenVisible(false);
        }
      }
    };

    document.addEventListener('keydown', handleNumberKeyPress);
    return () => document.removeEventListener('keydown', handleNumberKeyPress);
  }, [openVisible, arrays]);

  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm text-gray-1000">
        Combobox (Visible Placeholder)
      </span>
      <Popover open={openVisible} onOpenChange={setOpenVisible}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={openVisible}
            className="max-w-[300px] flex items-center justify-between focus:outline-purple-100 default:ring hover:outline hover:outline-1 hover:outline-purple-100 focus:ring-1 focus:ring-purple-100 focus:ring-offset-2 focus-visible:ring-purple-400"
          >
            <div className="flex items-center line-clamp-1 gap-2">
              {(() => {
                const selectedIcon = placeholders.find(
                  (placeholder) => placeholder.value === val
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
                ? arrays.find((item) => item.value === val)?.label
                : 'No Framework'}
            </div>
            <ChevronDown className="ml-2 size-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className={`w-[--radix-popover-trigger-width] outline-none p-0 ${GTWalsheim.className}`}
        >
          <Command loop>
            <CommandInput
              placeholder="Search..."
              className="text-gray-1000 caret-purple-700"
            />
            <span className="text-xs ml-2.5 flex items-center gap-1.5 pt-2 px-0.5 text-gray-700">
              <Info className="size-4" />
              This is info text
            </span>

            <CommandEmpty className="text-gray-900 self-center text-sm py-6">
              No framework found.
            </CommandEmpty>

            <CommandList className="scrollbar-hide">
              <CommandSeparator className="my-2" />

              <CommandGroup className="m-0.5">
                {placeholders.map((framework, i) => (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={(currentValue) => {
                      setVal(currentValue === val ? '' : currentValue);
                      setOpenVisible(false);
                    }}
                    className="flex items-center justify-between text-gray-1000"
                  >
                    <div className="flex items-center gap-2">
                      {framework.icon && (
                        <framework.icon className="size-4 shrink-0" />
                      )}
                      {framework.label}
                    </div>
                    <div className="flex items-center gap-2">
                      {val === framework.value && (
                        <Check className="size-4 text-gray-1000/40" />
                      )}
                      {i < 9 && (
                        <span className="text-xs text-gray-1000/40">
                          {i + 1}
                        </span>
                      )}
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>

              <CommandGroup heading="React" className="m-0.5">
                {frameworks.map((framework, i) => (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={(currentValue) => {
                      setVal(currentValue === val ? '' : currentValue);
                      setOpenVisible(false);
                    }}
                    className="flex items-center justify-between text-gray-1000"
                  >
                    <div className="flex items-center gap-2">
                      {framework.label}
                    </div>
                    <div className="flex items-center gap-2">
                      {val === framework.value && (
                        <Check className="size-4 text-gray-1000/40" />
                      )}
                      {i + placeholders.length < 9 && (
                        <span className="text-xs text-gray-1000/40">
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
                      setOpenVisible(false);
                    }}
                    className="flex items-center justify-between text-gray-1000"
                  >
                    <div className="flex items-center gap-2">
                      {framework.label}
                    </div>
                    <div className="flex items-center gap-2">
                      {val === framework.value && (
                        <Check className="size-4 text-gray-1000/40" />
                      )}
                      {i + frameworks.length + placeholders.length < 9 && (
                        <span className="text-xs text-gray-1000/40">
                          {i + frameworks.length + placeholders.length + 1}
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
