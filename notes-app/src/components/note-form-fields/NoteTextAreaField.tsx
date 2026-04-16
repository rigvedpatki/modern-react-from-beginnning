type NoteTextAreaFieldProps = {
  label: string;
  name: string;
  value: string;
  required: boolean;
  onChangeTextAreaFieldChange: (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
};

const NoteTextAreaField: React.FC<NoteTextAreaFieldProps> = ({
  label,
  name,
  value,
  required = false,
  onChangeTextAreaFieldChange,
}) => {
  return (
    <>
      <div className="mb-4">
        <label htmlFor={name} className="block font-semibold">
          {label}
        </label>
        <textarea
          name={name}
          id={name}
          className="w-full p-2 border rounded-lg"
          value={value}
          onChange={onChangeTextAreaFieldChange}
          required={required}
        />
      </div>
    </>
  );
};

export default NoteTextAreaField;
