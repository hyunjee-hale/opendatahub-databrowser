// SPDX-FileCopyrightText: NOI Techpark <digital@noi.bz.it>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { CellComponent } from '@/domain/cellComponents/types';
import { DetailElements } from '@/domain/datasets/config/types';

export const siagmuseumdataCategory = (
  options = { visible: false }
): DetailElements => ({
  name: 'Museum Properties',
  slug: 'siagmuseumdata',
  visible: options.visible,
  subcategories: [
    {
      name: '',
      properties: [
        {
          title: 'OpeningTimes',
          component: CellComponent.StringCell,
          objectMapping: {
            text: 'AdditionalProperties.SiagMuseumDataProperties.OpeningTimes.{language}',
          },
        },
        {
          title: 'Entry',
          component: CellComponent.StringCell,
          objectMapping: {
            text: 'AdditionalProperties.SiagMuseumDataProperties.Entry.{language}',
          },
        },
        {
          title: 'Supporter',
          component: CellComponent.StringCell,
          objectMapping: {
            text: 'AdditionalProperties.SiagMuseumDataProperties.Supporter.{language}',
          },
        },
      ],
    },
  ],
});
