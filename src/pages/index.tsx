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
import { Check, ChevronDown, Hash, X } from 'lucide-react';
import * as React from 'react';
import { GTWalsheim } from './fonts';

export default function Component() {
  const [openInvisible, setOpenInvisible] = React.useState(false);
  const [valueInvisible, setValueInvisible] = React.useState('');

  const [openVisible, setOpenVisible] = React.useState(false);
  const [valueVisible, setValueVisible] = React.useState('');

  return (
    <div
      className={`
      dark flex min-h-[350px] w-[300px] flex-col gap-8 rounded-lg p-4 ${GTWalsheim.className}`}
    >
      {/* Invisible Placeholder Combobox */}
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
                      <Hash className="h-4 w-4 shrink-0 opacity-50" />
                      {valueInvisible
                        ? frameworks.find(
                            (framework) => framework.value === valueInvisible
                          )?.label
                        : 'Select framework...'}
                    </div>
                    <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
              </TooltipTrigger>
              <TooltipContent
                className={`${GTWalsheim.className} bg-slate-800`}
              >
                <p>Select framework ⌘ E</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <PopoverContent className="w-[300px] box-border">
            <Command loop>
              <CommandInput
                placeholder="Search..."
                className="text-foreground"
              />
              <CommandEmpty>No framework found.</CommandEmpty>

              <CommandList title="Select framework">
                <CommandGroup title="Frameworks">
                  {frameworks.map((framework) => (
                    <CommandItem
                      key={framework.value}
                      value={framework.value}
                      onSelect={(currentValue) => {
                        setValueInvisible(
                          currentValue === valueInvisible ? '' : currentValue
                        );
                        setOpenInvisible(false);
                      }}
                      className="flex items-center justify-between text-foreground"
                    >
                      <div className="flex items-center gap-2">
                        {framework.label}
                      </div>
                      <div className="flex items-center gap-2">
                        {valueInvisible === framework.value && (
                          <Check className="h-4 w-4" />
                        )}
                        <span className="text-sm text-muted-foreground">
                          {framework.shortcut}
                        </span>
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>

      {/* Visible Placeholder Combobox */}
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
              className="w-full justify-between text-foreground"
            >
              <div className="flex items-center gap-2">
                {!valueVisible && <X className="size-4 shrink-0 opacity-50" />}
                {valueVisible
                  ? frameworks.find(
                      (framework) => framework.value === valueVisible
                    )?.label
                  : 'No Framework'}
              </div>
              <ChevronDown className="ml-2 size-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[300px] bg-background p-0">
            <Command className="bg-background">
              <CommandInput
                placeholder="Search..."
                className="text-foreground"
              />
              <CommandEmpty>
                <X className="ml-2 size-4 opacity-50" /> No framework found.
              </CommandEmpty>
              <CommandList>
                <CommandGroup>
                  <CommandItem className="flex items-center justify-between text-muted-foreground">
                    <span className="text-xs">This is info text</span>
                  </CommandItem>
                  {frameworks.map((framework) => (
                    <CommandItem
                      key={framework.value}
                      value={framework.value}
                      onSelect={(currentValue) => {
                        setValueVisible(
                          currentValue === valueVisible ? '' : currentValue
                        );
                        setOpenVisible(false);
                      }}
                      className="flex items-center justify-between text-foreground"
                    >
                      <div className="flex items-center gap-2">
                        {framework.label}
                      </div>
                      <div className="flex items-center gap-2">
                        {valueVisible === framework.value && (
                          <Check className="size-4" />
                        )}
                        <span className="text-sm text-muted-foreground">
                          {framework.shortcut}
                        </span>
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
