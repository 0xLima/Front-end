"use client";

import { ReactNode, useContext } from "react";

import { SuccessDialog } from "./successDialog";
import { UserContext } from "./userContextProvider";

export const SuccessDialogRoot = ({ children }: { children: ReactNode }) => {
  const { successDialogProps, setSuccessDialogProps } = useContext(UserContext);
  return (
    <>
      {successDialogProps && (
        <SuccessDialog
          onOpenChange={() => setSuccessDialogProps(undefined)}
          {...successDialogProps}
        />
      )}
      {children}
    </>
  );
};
