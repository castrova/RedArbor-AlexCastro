# RedArbor-AlexCastro
Prueba técnica de Alex Castro para Red Arbor.

Para acceder a la aplicación, hay tres posibles credenciales de login que se proporcionan en la siguiente lista:

- Mail: alexcastro@gmail.com | Pw: 12345678
- Mail: testmail@marvel.com | Pw: Test_123
- Mail: bar@marvel.com | Pw: B@rRed827


Una vez descargado el proyecto, para iniciarlo es necesario clonarlo en el directorio deseado y ejecutar el comando npm i. Luego, se debe usar el comando expo start y se podrá ver la aplicación a través de Expo Go.

La aplicación cuenta con un sistema de login simulado que permite el ingreso con las credenciales mencionadas anteriormente. Al ingresar, se muestra un mensaje breve de login con el nombre del usuario. Se puede ver el nombre y apellido del usuario al acceder a la pantalla de usuario presionando el icono que aparece arriba a la derecha en la lista de héroes.

Una vez que el login ha sido validado, el usuario permanecerá activo en el cliente hasta que se use el botón de cerrar sesión. Este sistema se realiza usando "AsyncStorage".

El componente principal de la aplicación es el MarvelList, el cual gestiona el estado mediante el uso de useReducer. Este componente cuenta con un scroll infinito que muestra thumbnails de héroes de Marvel y solicita más información a la API al llegar al final.

Al hacer click en una de las thumbnails, se abrirá el panel de héroe, en donde se puede ver el nombre, la imagen, la descripción y una lista tipo scroll infinito de los cómics, mostrando la imagen de la portada y el título de cada uno de ellos.

Las llamadas a la API se realizan en el archivo "Utiles". Donde declaro y exporto las funciones que retornan las respuestas del servidor.
