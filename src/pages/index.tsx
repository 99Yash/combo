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
import { Check, ChevronsUpDown, Hash, X } from 'lucide-react';
import * as React from 'react';

const frameworks = [
  {
    value: 'next.js',
    label: 'Next.js',
    shortcut: '1',
  },
  {
    value: 'sveltekit',
    label: 'SvelteKit is longer than usual',
    shortcut: '2',
  },
  {
    value: 'nuxt.js',
    label: 'Nuxt.js',
    shortcut: '3',
  },
  {
    value: 'remix',
    label: 'Remix',
    shortcut: '4',
  },
  {
    value: 'astro',
    label: 'Astro',
    shortcut: '5',
  },
  {
    value: 'gatsby',
    label: 'Gatsby',
    shortcut: '6',
  },
  {
    value: 'react',
    label: 'React',
    group: 'Non-React',
    shortcut: '7',
  },
];

export default function Component() {
  const [openInvisible, setOpenInvisible] = React.useState(false);
  const [valueInvisible, setValueInvisible] = React.useState('');
  const [openVisible, setOpenVisible] = React.useState(false);
  const [valueVisible, setValueVisible] = React.useState('');

  return (
    <div className="dark flex min-h-[350px] w-[300px] flex-col gap-8 rounded-lg bg-background p-4">
      {/* Invisible Placeholder Combobox */}
      <div className="flex flex-col gap-2">
        <span className="text-sm text-foreground">
          Combobox (Invisible Placeholder)
        </span>
        <span className="text-xs text-muted-foreground">
          hover to see shortcut
        </span>
        <Popover open={openInvisible} onOpenChange={setOpenInvisible}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={openInvisible}
              className="w-full justify-between bg-gray-100/5 text-foreground hover:bg-gray-100/10"
            >
              <div className="flex items-center gap-2">
                <Hash className="h-4 w-4 shrink-0 opacity-50" />
                {valueInvisible
                  ? frameworks.find(
                      (framework) => framework.value === valueInvisible
                    )?.label
                  : 'Select framework...'}
              </div>
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[300px] bg-background p-0">
            <Command className="bg-background">
              <CommandInput
                placeholder="Search..."
                className="text-foreground"
              />
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandList>
                <CommandGroup>
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
                        {framework.group && (
                          <span className="text-sm text-muted-foreground">
                            {framework.group}
                          </span>
                        )}
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
              className="w-full justify-between bg-gray-100/5 text-foreground hover:bg-gray-100/10"
            >
              <div className="flex items-center gap-2">
                {valueVisible ? (
                  <X className="h-4 w-4 shrink-0 opacity-50" />
                ) : null}
                {valueVisible
                  ? frameworks.find(
                      (framework) => framework.value === valueVisible
                    )?.label
                  : 'No Framework'}
              </div>
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[300px] bg-background p-0">
            <Command className="bg-background">
              <CommandInput
                placeholder="Search..."
                className="text-foreground"
              />
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandList>
                <CommandGroup>
                  <CommandItem className="flex items-center justify-between text-muted-foreground">
                    <span>This is info text</span>
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
    </div>
  );
}
