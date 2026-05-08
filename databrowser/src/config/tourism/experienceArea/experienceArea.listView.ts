// SPDX-FileCopyrightText: NOI Techpark <digital@noi.bz.it>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ListViewConfig } from '../../../domain/datasets/config/types';
import {
  imageTableCell,
  languageTableCell,
  lastChangesTableCell,
  lastSyncTableCell,
  odhActiveTableCell,
  sourceTableCell,
  titleTableCell,
} from '../../builder/tourism';

export const experienceAreaListView: ListViewConfig = {
  elements: [
    titleTableCell(),
    imageTableCell(),
    languageTableCell(),
    lastChangesTableCell(),
    lastSyncTableCell(true, 'Detail.{language}.Title'),
    sourceTableCell(),
    odhActiveTableCell(),
  ],
};
