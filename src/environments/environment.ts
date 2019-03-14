// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: '/api',
  authUrl: '/api/auth',
  srcImages: '/api/images',
  matSnackBar: {
    duration: 10000
  },
  source: {
    images: {
      notHaveAvatar: '/assets/images/icon/baseline-portrait-24px.svg'
    }
  },
  errors: {
    panelClass: ['error-snackbar'],
    1: 'Помилка',
    2: 'Не вдалося відобразити аватар',
    3: 'Не вдалося відобразити зображення',
    4: 'Обраний тип файлу не підтримується',
    5: 'Не вдалося обробити форму',
    6: 'Підтримуються лише зображення'
  },
  info: {
    panelClass: ['info-snackbar'],
    1: 'Інформація',
    2: 'Успіх'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
