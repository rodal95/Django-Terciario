import os
from pathlib import Path
from decouple import config
# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = config("SECRET_KEY")

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['*']

# Application definition
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'rest_framework.authtoken',
    'rest_framework_simplejwt',
    'corsheaders',
    'coreapi',
    'clientes',
    'productos',
    'pedidos',
    'carritos'
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'papeleriaProject.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [
             os.path.join(BASE_DIR, 'frontend', 'build')
            ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'papeleriaProject.wsgi.application'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': config('MYSQL_DBNAME'),
        'USER':config('MYSQL_USER'),
        'PASSWORD': config('MYSQL_PASSWORD'),
        'HOST':config('MYSQL_HOST'),
        'PORT':config('MYSQL_PORT'),
    }
}

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True

<<<<<<< HEAD
# Establecer la ruta de archivos estáticos
STATIC_URL = '/static/'

STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')  # Carpeta para archivos estáticos generados

# Configurar las rutas para los archivos estáticos de React
STATICFILES_DIRS = [
     os.path.join(BASE_DIR, 'frontend', 'build', 'static'),   # Ruta a la carpeta 'static' dentro de 'build'
]

=======


# Establecer la ruta de archivos estáticos
STATIC_URL = '/static/'

STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')  # Carpeta para archivos estáticos generados

# Configurar las rutas para los archivos estáticos de React
STATICFILES_DIRS = [
     os.path.join(BASE_DIR, 'frontend', 'build', 'static'),   # Ruta a la carpeta 'static' dentro de 'build'
]

>>>>>>> 7b774792c2565cd8af95d8885cd936a54e06a23f
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

CORS_ALLOW_ALL_ORIGINS = True

CORS_ALLOW_CREDENTIALS = True

<<<<<<< HEAD
CORS_ALLOWED_HEADERS = ['*']
=======
CORS_ALLOWED_HEADERS = [  # Agrega las cabeceras que deseas permitir
    'Authorization',
    'Content-Type',
    # Otras cabeceras permitidas
]
>>>>>>> 7b774792c2565cd8af95d8885cd936a54e06a23f


REST_FRAMEWORK={
    'DEFAULT_SCHEMA_CLASS':'rest_framework.schemas.coreapi.AutoSchema',
}

EMAIL_BACKEND = config("EMAIL_BACKEND")
EMAIL_HOST = config("EMAIL_HOST")  # Ejemplo de servidor SMTP de Gmail
EMAIL_PORT = config("EMAIL_PORT")  # Puerto de Gmail para SMTP
EMAIL_USE_TLS = config("EMAIL_USE_TLS")  # Utiliza TLS para la conexión segura
EMAIL_HOST_USER = config("EMAIL_HOST_USER")  # Tu dirección de correo
EMAIL_HOST_PASSWORD = config("EMAIL_HOST_PASSWORD") # Contraseña de tu correo

