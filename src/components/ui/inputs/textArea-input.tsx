type TextareaInputProps = {
  name: string;
  placeholder: string;
  required?: boolean;
  id: string;
};

export default function TextareaInput({
  name,
  placeholder,
  required,
  id,
}: TextareaInputProps) {
  return (
    <>
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        maxLength={255}
        className="max-w-48 resize-none rounded-sm border border-gray-200 py-1.5 pl-2 text-sm tracking-tight shadow-sm transition-colors hover:border-zinc-300 focus:border-zinc-500 focus:outline-hidden"
      />
    </>
  );
}
