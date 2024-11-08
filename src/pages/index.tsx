import { InvisibleCB } from '@/components/invisible-cb';
import { Invisible } from '@/components/main/invisible';
import { StatusBar } from '@/components/main/status-bar';
import { Visible } from '@/components/main/visible';
import { StatusBarCB } from '@/components/status-bar';
import { VisibleCB } from '@/components/visible-cb';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { GTWalsheim } from '../styles/fonts';

export default function Component() {
  return (
    <>
      <title>{`Shadcn Combobox`}</title>
      <meta name="description" content={'Shadcn combobox lab'} />
      <div className={`flex flex-col gap-8 p-4 ${GTWalsheim.className}`}>
        <Link
          rel="noreferrer"
          target="_blank"
          className="flex items-center gap-2 text-gray-950"
          href="https://github.com/99yash/combo"
        >
          {' '}
          <span className="text-xs">Code</span>
          <GitHubLogoIcon className="size-6 opacity-50" />
        </Link>
        <Invisible />

        <Visible />

        <StatusBar />

        <p>Old Version</p>

        <InvisibleCB />

        <VisibleCB />

        <StatusBarCB />
      </div>
    </>
  );
}
