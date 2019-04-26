import * as React from 'react';
import CustomSVG from '../../common/CustomSVG';
import { youtubeReg, vimeoReg } from '../../../constants/urls';
import { testIcon } from '../../../constants/svg';

const mockInsertMenu = [
  {
    content: 'Movie extension',
    value: { name: 'movie' },
    tooltipDescription: 'Movie extension',
    tooltipPosition: 'right',
    elemBefore: (
      <CustomSVG width="24" height="24" d={testIcon} />
    ),
    onClick: editorActions => {
      const url = prompt('Input Url') || '';
      const youtubeMatch = url.match(youtubeReg);
      const vimeoMatch = url.match(vimeoReg);
      const newParameters = {};

      if (youtubeMatch && youtubeMatch[2].length === 11) {
        newParameters.type = 'youtube';
        newParameters.url = youtubeMatch;
      } else if (vimeoMatch && url[1]) {
        newParameters.type = 'vimeo';
        newParameters.url = vimeoMatch;
      } else {
        return null;
      }

      editorActions.replaceSelection({
        type: 'extension',
        attrs: {
          extensionType: 'com.haniplanet.macro.core',
          extensionKey: 'movie',
          text: 'Movie extension',
          parameters: newParameters
        }
      });
    },
  },
]

export default mockInsertMenu;