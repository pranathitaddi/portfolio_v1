import React from 'react';
import { RESUME_PDF } from '@/app/constants';

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-background">
      <iframe
        src={RESUME_PDF}
        title="Resume PDF"
        className="h-screen w-full"
      />
    </main>
  );
}
