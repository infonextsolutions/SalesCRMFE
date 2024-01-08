import SimpleButton from "@/utils/Button/SimpleButton";
import React from "react";

const DeleteCategory = ({ cancel, submit, title }: any) => {
  return (
    <div className="p-6 text-black">
      <h2 className="text-3xl font-bold text-center">
        Are you sure you want to delete &quot;{title}&quot;?
      </h2>
      <p className="bg-[#ffe3b077] mt-3 p-3">
        <span className="font-semibold">Note :</span> Associated score will also
        be deleted and will remain unchanged for other indicator categories.
      </p>

      <div className="w-[100%] mt-6 flex justify-end">
        <SimpleButton
          theme={2}
          click={cancel}
          text={"Cancel"}
          left={20}
          right={0}
        />
        <SimpleButton
          theme={1}
          click={submit}
          text={"Delete"}
          left={20}
          right={0}
        />
      </div>
    </div>
  );
};

export default DeleteCategory;
