const provider = async (locale: string): Promise<string> => {
  const path = `http://localhost:3000/locales/${locale}/words.json`;

  const req = await fetch(path);
  const data = <Array<string>>await req.json();

  const day = new Date().getUTCDay();

  return data[day % data.length];
};

export const wordProvider = provider;
