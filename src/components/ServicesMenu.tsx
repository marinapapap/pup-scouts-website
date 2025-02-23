import Link from "next/link";

type Props = {
  onClose: () => void;
};

const ServicesMenu = ({ onClose }: Props) => {
  return (
    <div className="min-h-screen grid place-items-center bg-[hsl(40,58%,84%)] mb-20">
      <div className="space-y-8 text-center">
        <button onClick={onClose} className="text-4xl mb-6">
          &larr; Back
        </button>
        <div className="flex flex-col space-y-4">
          <Link href="/service-1" className="text-3xl hover:text-gray-300">
            WALKING
          </Link>
          <Link href="/service-2" className="text-3xl hover:text-gray-300">
            TRAINING
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesMenu;
