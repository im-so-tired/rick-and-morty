'use client';
import { FC, FormEvent } from 'react';
import { useStore } from 'effector-react';
import {
  $gender,
  $name,
  $status,
  genderChanged,
  nameChanged,
  statusChanged
} from '@/app/characters/components/Filters/ClientFilters/store';
import { Chip, Flex, Input, Space } from '@mantine/core';
import {
  GENDER_VALUES,
  STATUS_VALUES
} from '@/app/characters/components/Filters/ClientFilters/constants';

interface ClientFiltersProps {
  filters?: {
    name?: string;
    status?: string;
    gender?: string;
  };
}

export const ClientFilters: FC<ClientFiltersProps> = ({ filters }) => {
  const name = useStore($name);
  const status = useStore($status);
  const gender = useStore($gender);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <Input.Label>Name</Input.Label>
      <Input
        w={250}
        id={'name'}
        name={'name'}
        value={name}
        onChange={(e) => nameChanged(e.target.value)}
      />
      <Space h="xs" />
      <Input.Label>Status</Input.Label>
      <Chip.Group multiple={false} value={status} onChange={statusChanged}>
        <Flex gap="xs">
          {STATUS_VALUES.map((status) => (
            <Chip key={status} value={status}>
              {status}
            </Chip>
          ))}
        </Flex>
      </Chip.Group>
      <Space h="xs" />
      <Input.Label>Gender</Input.Label>
      <Chip.Group multiple={false} value={gender} onChange={genderChanged}>
        <Flex gap="xs">
          {GENDER_VALUES.map((gender) => (
            <Chip key={gender} value={gender}>
              {gender}
            </Chip>
          ))}
        </Flex>
      </Chip.Group>
    </form>
  );
};
