import { useState } from 'react';

export function useDocumentUploader() {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const upload = async (file) => {
    setUploading(true);
    setProgress(30);
    await new Promise((res) => setTimeout(res, 600));
    setProgress(100);
    setUploading(false);
    return { success: true, name: file.name };
  };

  return { upload, uploading, progress };
}
