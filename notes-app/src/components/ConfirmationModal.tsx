import type { Note } from "../models/note";

type ConfirmationModalProps = {
  showModal: boolean;
  note: Note | null;
  onConfirmation: (confirmed: boolean) => void;
};

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  showModal,
  note,
  onConfirmation,
}) => {
  if (!showModal) return null;
  return (
    <>
      <div className="fixed inset-0 top-0 left-0 w-full h-full flex items-center justify-center z-50">
        <div
          className="absolute inset-0 bg-gray-500/50"
          onClick={() => onConfirmation(false)}
        ></div>
        <div className="bg-white p-6 rounded shadow-lg text-center z-10">
          <h2 className="text-lg font-semibold">
            Are you sure you want to delete this note ?
          </h2>
          {note && <p className="mt-2">"{note.title}"</p>}
          <button
            className="mt-4 bg-red-500 transition hover:bg-red-600 text-white px-4 py-2 rounded"
            type="button"
            onClick={() => onConfirmation(true)}
          >
            Confirm
          </button>
          <button
            className="mt-4 bg-gray-300 transition hover:bg-gray-400 text-black px-4 py-2 rounded ml-2"
            type="button"
            onClick={() => onConfirmation(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default ConfirmationModal;
