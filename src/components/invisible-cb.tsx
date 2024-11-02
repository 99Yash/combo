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
import { frameworks } from '@/lib/data';
import { Check, ChevronDown, Hash } from 'lucide-react';
import * as React from 'react';
import { GTWalsheim } from '../styles/fonts';

export function InvisibleCB() {
  const [openInvisible, setOpenInvisible] = React.useState(false);
  const [valueInvisible, setValueInvisible] = React.useState('');

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
                  className="w-full justify-between"
                >
                  <div className="flex items-center gap-2">
                    <Hash className="size-4 shrink-0 opacity-50" />
                    {valueInvisible
                      ? frameworks.find(
                          (framework) => framework.value === valueInvisible
                        )?.label
                      : 'Select framework...'}
                  </div>
                  <ChevronDown className="ml-2 size-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
            </TooltipTrigger>
            <TooltipContent
              className={`${GTWalsheim.className} bg-muted text-foreground`}
            >
              Select framework ⌘ E
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <PopoverContent
          className={`w-[--radix-popover-trigger-width] p-0 ${GTWalsheim.className}`}
        >
          {' '}
          <Command loop>
            <CommandInput placeholder="Search..." className="text-foreground" />
            <CommandEmpty>No framework found.</CommandEmpty>

            <CommandList>
              <CommandGroup heading="React">
                {frameworks.map((framework, i) => (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={(currentValue) => {
                      setValueInvisible(
                        currentValue === valueInvisible ? '' : currentValue
                      );
                      setOpenInvisible(false);
                    }}
                    className="flex items-center justify-between text-foreground m-1"
                  >
                    <div className="flex items-center gap-2">
                      {framework.label}
                    </div>
                    <div className="flex items-center gap-2">
                      {valueInvisible === framework.value && (
                        <Check className="size-4" />
                      )}
                      {i < 9 && (
                        <span className="text-sm text-muted-foreground">
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
