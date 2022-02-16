import { SerializedError } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

const commonErrorProperties: Array<keyof SerializedError> = ['name', 'message', 'stack', 'code'];

export const serializeAxiosError = (value: any): AxiosError | SerializedError => {
  if (typeof value === 'object' && value !== null) {
    if (value.isAxiosError) {
      return value;
    } else {
      const simpleError: SerializedError = {};
      for (const property of commonErrorProperties) {
        if (typeof value[property] === 'string') {
          simpleError[property] = value[property];
        }
      }

      return simpleError;
    }
  }
  return { message: String(value) };
};

export interface EntityState<T> {
  loading: boolean;
  errorMessage: string | null;
  entities: ReadonlyArray<T>;
  entity: T;
  links?: any;
  updating: boolean;
  totalItems?: number;
  updateSuccess: boolean;
}
