import Image from "next/image";

type Props = {
  label: string;
  name: string;
  placeholder: string;
  type: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

export default function InputField({
  label,
  name,
  placeholder,
  type,
  src,
  alt,
  width,
  height,
}: Props) {
  return (
    <>
      <div>
        {label && (
          <label
            className="block mb-2 text-sm font-medium text-gray-700 mt-5"
            htmlFor="input-field"
          >
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            className="bg-gray-300 border border-gray-300 text-sm rounded-lg block w-full p-2.5 "
          />
          <div className="absolute right-0">
            <div className="bg-purple-600 w-[40px] h-[40px] flex justify-center rounded">
              <Image src={src} alt={alt} width={width} height={height} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
