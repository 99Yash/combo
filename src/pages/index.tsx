import { InvisibleCB } from '@/components/invisible-cb';
import { StatusBar } from '@/components/status-bar';
import { VisibleCB } from '@/components/visible-cb';
import { GTWalsheim } from '../styles/fonts';

export default function Component() {
  return (
    <>
      <title>{`Shadcn Combobox`}</title>
      <meta
        name="description"
        content={'Check your inbox to confirm your email'}
      />
      <div className={`flex flex-col gap-8 p-4 ${GTWalsheim.className}`}>
        {/* Invisible Placeholder Combobox */}
        <InvisibleCB />

        {/* Visible Placeholder Combobox */}
        <VisibleCB />

        <StatusBar />
      </div>
    </>
  );
}
