import { Modal } from "@mantine/core";
import { IconExclamationMark } from "@tabler/icons-react";

export const DeleteModal = ({ opened, onClose, onDelete }) => {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      centered
      className="rounded-full overflow-hidden"
      suppressHydrationWarning
      radius={"md"}
      padding={"xl"}
      size={"30%"}
      shadow="md"
      withCloseButton={false}
    >
      <div className="w-full flex items-center justify-center flex-col gap-3">
        <div className="h-20 w-20 rounded-full bg-red-300/30 flex items-center justify-center">
          <IconExclamationMark className="text-red-400" size={42} />
        </div>

        <div className="w-full text-center py-5 space-y-2">
          <h2 className="text-xl font-semibold">
            Are you sure you want to delete this folder?
          </h2>
          <p className="text-base text-gray-600 text-center">
            This action is irreversable. It cannot be undone.
            Please take this action with caution.
          </p>
        </div>

        <div className="w-full flex items-center justify-center gap-5">
          <button
            className="w-full p-3 rounded-md cursor-pointer bg-gray-400/30 hover:bg-gray-400/50 text-black font-semibold transition-all ease-in-out"
            type="button"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="w-full p-3 rounded-md cursor-pointer font-semibold bg-red-500 hover:bg-red-600 text-white transition-all ease-in-out"
            type="button"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </Modal>
  );
};

// export const ConfirmUsersDeleteModal = ({ opened, onClose, onUserDelete }) => {
//   return (
//     <Modal
//       opened={opened}
//       onClose={onClose}
//       centered
//       className="rounded-full overflow-hidden"
//       suppressHydrationWarning
//       radius={"md"}
//       padding={"xl"}
//       size={"30%"}
//     >
//       <div className="w-full flex items-center justify-center flex-col gap-3">
//         <div className="h-20 w-20 rounded-full bg-red-300/30 flex items-center justify-center">
//           <CgDanger className="text-red-400" size={42} />
//         </div>

//         <div className="w-full text-center py-5 space-y-2">
//           <h2 className="text-xl font-semibold">
//             Are you sure you want to delete user?
//           </h2>
//           <p className="text-base text-gray-600 text-center">
//             This action is irreversable. Once initiated, it cannot be undone.
//             Please take this action with caution.
//           </p>
//         </div>

//         <div className="w-full flex items-center justify-center gap-5">
//           <button
//             className="w-full p-3 rounded-md cursor-pointer bg-gray-400/30 hover:bg-gray-400/50 text-black font-semibold transition-all ease-in-out"
//             type="button"
//             onClick={onClose}
//           >
//             Cancel
//           </button>
//           <button
//             className="w-full p-3 rounded-md cursor-pointer font-semibold bg-red-500 hover:bg-red-600 text-white transition-all ease-in-out"
//             type="button"
//             onClick={onUserDelete}
//           >
//             Delete
//           </button>
//         </div>
//       </div>
//     </Modal>
//   );
// };
