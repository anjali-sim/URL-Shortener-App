import React, { useEffect } from 'react';
import { db, doc, getDoc } from '@/service/firebaseConfig';
import { useNavigate } from 'react-router-dom';

const ShortenedUrlRedirect: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const shortenedId = window.location.pathname.substr(1);

    const getOriginalUrl = async () => {
      try {
        const docRef = doc(db, 'urls', shortenedId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          const { originalUrl } = data as { originalUrl: string };
          window.location.href = originalUrl;
        } else {
          navigate('/');
        }
      } catch (error) {
        console.error('Error retrieving original URL:', error);
        navigate('/');
      }
    };

    getOriginalUrl();
  }, [navigate]);

  return null;
};

export default ShortenedUrlRedirect;
