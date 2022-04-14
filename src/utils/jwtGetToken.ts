import { AUTH_TOKEN_KEY } from 'config/env';
import { readFromStorage } from './storage/webStorage';

export const jwtGetToken = (): string | null => readFromStorage(AUTH_TOKEN_KEY, 'localStorage');
