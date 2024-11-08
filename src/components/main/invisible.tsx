import { allItems } from '@/lib/data';
import * as React from 'react';
import { SingleCombobox } from '../ui/combobox';

export function Invisible() {
  const [search, setSearch] = React.useState('');

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'e' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        // setOpenInvisible((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <SingleCombobox options={allItems} value={search} setValue={setSearch} />
  );
}
