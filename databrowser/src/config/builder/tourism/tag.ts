// SPDX-FileCopyrightText: NOI Techpark <digital@noi.bz.it>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { CellComponent } from '../../../domain/cellComponents/types';
import {
  DetailElements,
  PropertyConfig,
} from '../../../domain/datasets/config/types';
import { withOdhBaseUrl } from '../../utils';

export const tagCell = (
  mainentity?: string,
  options?: { withSourceFilter?: boolean }
): PropertyConfig => {
  const filterParam =
    mainentity == null
      ? ''
      : `?validforentity=${mainentity}&fields=Id,TagName&pagesize=0`;
  const url = withOdhBaseUrl('/v1/Tag') + filterParam;

  return {
    title: 'Assigned Tags',
    component: options?.withSourceFilter
      ? CellComponent.TagReferenceCellSourceFiltered
      : CellComponent.TagReferenceCell,
    arrayMapping: {
      targetPropertyName: 'items',
      pathToParent: 'TagIds',
    },
    params: {
      url,
      keySelector: 'Id',
      labelSelector: 'TagName.{language}',
      showAdditionalData: 'true',
    },
  };
};

export const tagCategory = (
  mainentity?: string,
  options?: { withSourceFilter?: boolean }
): DetailElements => {
  return {
    name: 'Tags',
    slug: 'Tags',
    subcategories: [
      {
        name: '',
        properties: [tagCell(mainentity, options)],
      },
    ],
  };
};
