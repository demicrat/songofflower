import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

export async function GET() {
  try {
    const minutesDirectory = path.join(process.cwd(), 'public', 'minutes');
    const files = fs.readdirSync(minutesDirectory);

    // Sort files by date assuming the filenames are in the format 'YYYY-MM-DD.pdf'
    const sortedFiles = files.sort((a, b) => {
      return new Date(b.replace('.pdf', '')).getTime() - new Date(a.replace('.pdf', '')).getTime();
    });

    const recentMinutes = sortedFiles.map(file => ({
      date: file.replace('.pdf', ''),
      link: `/minutes/${file}`,
    }));

    return NextResponse.json(recentMinutes);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch meeting minutes' }, { status: 500 });
  }
}
