// SPDX-FileCopyrightText: NOI Techpark <digital@noi.bz.it>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

export interface RoomVenueEntry {
  Id?: string;
  Shortname?: string;
  Title?: string;    
  MaxCapacity?: string;
  Placement?: string;
  Active?: boolean;
  SquareMeters?: string;
  RoomWidthInMeters?: string;
  RoomHeightInCentimeters?: string;
  RoomDepthInMeters?: string;
  DoorWidthInCentimeters?: string;
  DoorHeightInCentimeters?: string;
  TagIds?: string[];
}
