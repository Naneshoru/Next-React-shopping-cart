'use client'
import { useEffect, useState } from 'react';

export default function PostDetails({ params }: { params: { postId: string } }) {
  const [postId, setPostId] = useState<string | null>(null);

  useEffect(() => {
    // Simula a obtenção de parâmetros de forma assíncrona
    async function fetchParams() {
      const resolvedParams = await params;
      setPostId(resolvedParams.postId);
    }

    fetchParams();
  }, [params]);

  if (!postId) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>PostDetails {postId}</h1>
    </div>
  );
}