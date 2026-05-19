// SPDX-FileCopyrightText: NOI Techpark <digital@noi.bz.it>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { CellComponent } from '@/domain/cellComponents/types';
import { DetailElements } from '@/domain/datasets/config/types';

export const stavendingpointdataCategory = (
  options = { visible: false }
): DetailElements => ({
  name: 'VendingPoint Properties',
  slug: 'stavendingpointdata',
  visible: options.visible,
  subcategories: [
    {
      name: '',
      properties: [
        {
          title: 'Has Website',
          component: CellComponent.ToggleTriStateCell,
          objectMapping: {
            enabled: 'AdditionalProperties.StaVendingPointsDataProperties.HasWebsite',
          },
        },
        {
          title: 'Suedtirol PassServices',
          component: CellComponent.ToggleTriStateCell,
          objectMapping: {
            enabled: 'AdditionalProperties.StaVendingPointsDataProperties.SuedtirolPassServices',
          },
        },
        {
          title: 'Suedtirolpass Over 65 apply',
          component: CellComponent.ToggleTriStateCell,
          objectMapping: {
            enabled: 'AdditionalProperties.StaVendingPointsDataProperties.SuedtirolpassOver65apply',
          },
        },
        {
          title: 'Duplicate',
          component: CellComponent.ToggleTriStateCell,
          objectMapping: {
            enabled: 'AdditionalProperties.StaVendingPointsDataProperties.Duplicate',
          },
        },
        {
          title: 'Charge Card',
          component: CellComponent.ToggleTriStateCell,
          objectMapping: {
            enabled: 'AdditionalProperties.StaVendingPointsDataProperties.ChargeCard',
          },
        },
        {
          title: 'City Card Bus',
          component: CellComponent.ToggleTriStateCell,
          objectMapping: {
            enabled: 'AdditionalProperties.StaVendingPointsDataProperties.CityCardBus',
          },
        },
        {
          title: 'Mobile Card',
          component: CellComponent.ToggleTriStateCell,
          objectMapping: {
            enabled: 'AdditionalProperties.StaVendingPointsDataProperties.MobileCard',
          },
        },
        {
          title: 'Bike Mobile Card',
          component: CellComponent.ToggleTriStateCell,
          objectMapping: {
            enabled: 'AdditionalProperties.StaVendingPointsDataProperties.BikeMobileCard',
          },
        },
        {
          title: 'Museum Mobile Card',
          component: CellComponent.ToggleTriStateCell,
          objectMapping: {
            enabled: 'AdditionalProperties.StaVendingPointsDataProperties.MuseumMobileCard',
          },
        },
      ],
    },
  ],
});
