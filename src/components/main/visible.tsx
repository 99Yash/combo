import { allItems } from '@/lib/data';
import * as React from 'react';
import { SingleCombobox } from '../ui/combobox';

export function Visible() {
  const [search, setSearch] = React.useState('');

  return (
    <SingleCombobox options={allItems} value={search} setValue={setSearch} />
  );
}
