import * as React from "react";
import { INVITE_STATUS } from "../../utils/const";

import "./Avatar.css";

type AvatarProps = {
  status?: INVITE_STATUS;
};

export const Avatar: React.FC<AvatarProps> = () => {
  return <div className="avatar "><div className="face">A</div></div>;
};
