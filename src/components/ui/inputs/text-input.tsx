type TextInputProps = {
  name: string;
  placeholder: string;
  required?: boolean;
  minimumLength?: number;
  id: string;
};

export default function TextInput({
  name,
  placeholder,
  required,
  minimumLength,
  id,
}: TextInputProps) {
  return (
    <>
      <input
        id={id}
        type="text"
        name={name}
        placeholder={placeholder}
        required={required}
        minLength={minimumLength}
        maxLength={255}
        className="max-w-48 rounded-sm border border-gray-200 py-1.5 pl-2 text-sm tracking-tight shadow-sm transition-colors hover:border-zinc-300 focus:border-zinc-500 focus:outline-hidden"
      />
    </>
  );
}
