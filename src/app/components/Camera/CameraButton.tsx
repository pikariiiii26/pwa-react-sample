import React from 'react';
import styled from 'styled-components';
import VideocamIcon from '@material-ui/icons/Videocam';
import VideocamOffIcon from '@material-ui/icons/VideocamOff';
type Props = {
  muted: boolean;
  setter: any;
};

//styled-componentを使いbuttonのoutlineを0に
const Button = styled.button`
  &:focus {
    outline: 0;
  }
`;

export const CameraOnOfButton = ({ muted, setter }: Props) => {
  let icon;
  if (muted) {
    icon = <VideocamIcon />;
  } else {
    icon = <VideocamOffIcon />;
  }
  const handleOnClick = () => {
    setter(!muted);
  };
  return <Button onClick={handleOnClick}>{icon}</Button>;
};
