import * as React from "react";
import { INVITE_STATUS } from "../../utils/const";
import {
  CheckCircledIcon,
  MinusCircledIcon,
  QuestionMarkCircledIcon,
} from "@radix-ui/react-icons";

import './InviteStatusIcon.css';

type InviteStatusIconProps = {
  status: INVITE_STATUS;
};

export const InviteStatusIcon: React.FC<InviteStatusIconProps> = ({
  status,
}) => {
  return (
    <>
      {status === INVITE_STATUS.ACCEPTED && (
        <CheckCircledIcon className="icon accepted" />
      )}
      {status === INVITE_STATUS.DECLINED && (
        <MinusCircledIcon className="icon declined" />
      )}
      {status === INVITE_STATUS.INVITED && (
        <QuestionMarkCircledIcon className="icon invited" />
      )}
    </>
  );
};
