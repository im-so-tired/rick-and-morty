'use client';

import { createDomain, restore } from 'effector';
import { GenderFilter, StatusFilter } from './types';

const filtersDomain = createDomain('character filters');

export const nameChanged = filtersDomain.createEvent<string>();
export const $name = restore(nameChanged, '');

export const genderChanged = filtersDomain.createEvent<GenderFilter>();
export const $gender = restore(genderChanged, 'all');

export const statusChanged = filtersDomain.createEvent<StatusFilter>();
export const $status = restore(statusChanged, 'all');
