'use client';

import Link from 'next/link';
import { useVisitorLens, type VisitorType } from './VisitorLensContext';

interface LensNoteProps {
  messages: Partial<Record<NonNullable<VisitorType>, { text: string; href?: string; linkLabel?: string }>>;
}

// Renders nothing until a lens is selected, and nothing if the current lens
// has no message defined for this section — so sections stay exactly as
// they were for visitors who don't use the selector.
export function LensNote({ messages }: LensNoteProps) {
  const { lens } = useVisitorLens();
  if (!lens) return null;

  const message = messages[lens];
  if (!message) return null;

  return (
    <div className="mb-6 -mt-2 flex items-center gap-2 text-sm text-accent-text bg-accent-subtle/30 border border-accent/20 rounded-md px-4 py-2.5 w-fit">
      <span aria-hidden="true">→</span>
      <span>{message.text}</span>
      {message.href && (
        <Link href={message.href} className="font-medium underline underline-offset-2 hover:text-accent-hover">
          {message.linkLabel ?? 'Go'}
        </Link>
      )}
    </div>
  );
}
