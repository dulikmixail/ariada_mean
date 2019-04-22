// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: '/api',
  authUrl: '/api/auth',
  srcImages: '/api/download',
  matSnackBar: {
    duration: 6000
  },
  source: {
    images: {
      notHaveAvatar: '/assets/images/icon/baseline-portrait-24px.svg'
    }
  },
  errors: {
    panelClass: ['error-snackbar'],
    e1: 'Помилка',
    e2: 'Не вдалося відобразити аватар',
    e3: 'Не вдалося відобразити зображення',
    e4: 'Обраний тип файлу не підтримується',
    e5: 'Не вдалося обробити форму',
    e6: 'Підтримуються лише зображення'
  },
  info: {
    panelClass: ['info-snackbar'],
    i1: 'Інформація',
    i2: 'Успіх'
  },
  components: {
    matPaginator: {
      defaultPageSizeOptions: [5, 10, 25, 50, 100],
      defaultPageSize: 10
    }
  },
  defaultPageModel: {
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
