import { InvisibleCB } from '@/components/invisible-cb';
import { VisibleCb } from '@/components/visible-cb';
import { GTWalsheim } from '../styles/fonts';

export default function Component() {
  return (
    <>
      <title>{`Shadcn Combobox`}</title>
      <meta
        name="description"
        content={'Check your inbox to confirm your email'}
      />
      <div
        className={`flex w-[300px] flex-col gap-8 p-4 ${GTWalsheim.className}`}
      >
        {/* Invisible Placeholder Combobox */}
        <InvisibleCB />

        {/* Visible Placeholder Combobox */}
        <VisibleCb />
      </div>
    </>
  );
}
