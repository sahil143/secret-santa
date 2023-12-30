import * as React from "react";
import { INVITE_STATUS } from "../../utils/const";
import { InviteStatusIcon } from "./InviteStatusIcon";
import santaHat from './santa-hat.png';

import "./Avatar.css";

type AvatarProps = {
  /** Status of sent invite */
  status?: INVITE_STATUS;
  /** PErson initials */
  initials?: string;
  /** source for User image */
  source?: string;
  /** is user also santa */
  isSanta?: boolean
};

export const Avatar: React.FC<AvatarProps> = ({
  source,
  initials,
  status,
  isSanta,
}) => {
  return (
    <div className="avatar">
      {source && <img className="height-width border-round" src={source} alt="User Image" />}
      {initials && !source && (
        <div className="initial height-width border-round green-background">
          {initials}
        </div>
      )}
      {status && (
        <span className="icon">
          <InviteStatusIcon status={status} />
        </span>
      )}
      {isSanta && (
        <img
          src={santaHat}
          alt="Santa Hat"
          className="santa-hat"
        />
      )}

    </div>
  );
};
