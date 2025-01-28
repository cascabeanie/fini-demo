type PriorityInputProps = {
  name: string;
  required?: boolean;
  id: string;
};

export default function PriorityInput({
  name,
  required,
  id,
}: PriorityInputProps) {
  return (
    <>
      <select
        id={id}
        name={name}
        required={required}
        className="max-w-48 rounded-sm border border-gray-200 py-1.5 pl-2 text-sm tracking-tight shadow-sm transition-colors hover:border-zinc-300 focus:border-zinc-500 focus:outline-hidden"
      >
        <option value="none">None</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </>
  );
}
