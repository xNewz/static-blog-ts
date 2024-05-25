import Image from "next/image";

const notFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <Image
        src="/404.png"
        alt="404"
        width={75}
        height={75}
        className="rounded-lg animate-bounce"
      />
      <h1 className="text-xl">404 - Page Not Found</h1>
    </div>
  );
};

export default notFound;
