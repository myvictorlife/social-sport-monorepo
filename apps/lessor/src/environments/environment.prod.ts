export const environment = {
  production: true,
  baseUrl: 'https://social-sport-api.herokuapp.com',
  paths: {
    login: '/signin',
    courts: '/api/courts',
    courtsProviders: 'api/courts/{court_id}/providers',
    sportCenter: '/api/sport-center'
  }
};
