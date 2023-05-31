# MARVEL APP Alex Castro

To access the application, there are three possible login credentials provided in the following list:

- Email: alex.castro.ver@gmail.com | Password: 12345678
- Email: testmail@marvel.com | Password: Test_123
- Email: bar@marvel.com | Password: B@rRed827

Once the project is downloaded, to start it, you need to clone it into the desired directory and run the command npm i. Then, you should use the command expo start, and the application can be viewed through Expo Go.

The application has a simulated login system that allows login with the mentioned credentials. Upon login, a brief login message with the user's name is displayed. The user's first name and last name can be seen on the user screen by pressing the icon that appears at the top right in the heroes list.

Once the login is validated, the user will remain active on the client until the logout button is used. This system is implemented using "AsyncStorage".

The main component of the application is MarvelList, which manages state using useReducer. This component has an infinite scroll that displays thumbnails of Marvel heroes and requests more information from the API when reaching the end.

By clicking on one of the thumbnails, the hero panel will open, where the name, image, description, and an infinite scroll list of comics are displayed, showing the cover image and title of each comic.

API calls are made in the "Utiles" file, where functions that return server responses are declared and exported.

The app has been tested on the Android operating system on a Samsung S10 device.
