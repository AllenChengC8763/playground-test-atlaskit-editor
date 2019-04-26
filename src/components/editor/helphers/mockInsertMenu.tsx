import { youtubeReg, vimeoReg } from '../../../constants/urls';
import { InsertMenuCustomItem } from '@atlaskit/editor-core/types';
import { createEditorMenuItem } from '../../../utils/editor';

interface Params {
  type: string;
  url: any;
}

const mockInsertMenu: InsertMenuCustomItem[] = [
  createEditorMenuItem({
    content: 'Movie extension',
    onClick: editorActions => {
      const url = prompt('Input Url') || '';
      const youtubeMatch = url.match(youtubeReg);
      const vimeoMatch = url.match(vimeoReg);
      const newParameters: Params = {} as Params;

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
    }
  })
]

export default mockInsertMenu;