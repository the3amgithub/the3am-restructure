export const myLoader = (src: string) => {
    return `${process.env.NEXT_PUBLIC_API_IMG_URL}/${src}`;
  };