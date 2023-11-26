export const ROUTES = {
  CHARACTERS: {
    SERVER: '/characters/server',
    CLIENT: '/characters/client'
  },
  CHARACTER: (id: string | number) => `/characters/${id}`,
  LOCATIONS: '/locations'
};
