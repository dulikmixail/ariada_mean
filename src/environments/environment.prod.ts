export const environment = {
  production: true,
  apiUrl: '/api',
  authUrl: '/api/auth',
  srcImages: '/api/images',
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
  }
};
