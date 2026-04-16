type NoteInputFieldProps = {
  label: string;
  name: string;
  value: string;
  required: boolean;
  onChangeInputFieldChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const NoteInputField: React.FC<NoteInputFieldProps> = ({
  label,
  name,
  value,
  required = false,
  onChangeInputFieldChange,
}) => {
  return (
    <>
      <div className="mb-4">
        <label htmlFor={name} className="block font-semibold">
          {label}
        </label>
        <input
          type="text"
          name={name}
          id={name}
          className="w-full p-2 border rounded-lg"
          value={value}
          onChange={onChangeInputFieldChange}
          required={required}
        />
      </div>
    </>
  );
};

export default NoteInputField;
