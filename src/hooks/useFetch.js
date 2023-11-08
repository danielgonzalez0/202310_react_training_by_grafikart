import { useState } from 'react';

export function useFetch(url, options) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [errors, setErrors] = useState(null);

  return { loading, data, errors };
}
