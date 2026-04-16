type NoteSelectFieldProps = {
  label: string;
  name: string;
  value: string;
  options: { value: string; label: string }[];
  required: boolean;
  onChangeSelectFieldChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const NoteSelectField: React.FC<NoteSelectFieldProps> = ({
  label,
  name,
  value,
  options,
  required = false,
  onChangeSelectFieldChange,
}) => {
  return (
    <>
      <div className="mb-4">
        <label htmlFor={name} className="block font-semibold">
          {label}
        </label>
        <select
          name={name}
          id={name}
          className="w-full p-2 border rounded-lg"
          value={value}
          required={required}
          onChange={onChangeSelectFieldChange}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default NoteSelectField;
