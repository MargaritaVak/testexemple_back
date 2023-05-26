# Документация по эндпоинтам
## Эндпоинт createPost
**Описание: Этот эндпоинт используется для создания нового поста.**

HTTP-метод: POST

Endpoint: /createPost

#### Тело запроса:
- userId (строка): ID пользователя, создающего пост.
- message (строка): Содержание/сообщение поста.
- mediaUrl (строка): URL медиа-файла (например, изображение, видео), связанного с постом.

#### Пример запроса:

<code>
POST /createPost
Content-Type: application/json
{
  "userId": "123",
  "message": "Привет, мир!",
  "mediaUrl": "https://example.com/image.jpg"
}
</code>

#### Пример ответа:

<code>
200 OK
Content-Type: application/json

"4" // ID вновь созданного поста
</code>
## Эндпоинт deletePost

**Описание: Этот эндпоинт используется для удаления поста.**

HTTP-метод: DELETE

Endpoint: /deletePost/:id

#### Параметры запроса:
<code>id (строка): ID поста, который нужно удалить.</code>
#### Пример запроса:
<code>
DELETE /deletePost/4
</code>

#### Пример ответа:

<code>
200 OK
Content-Type: application/json

{
  "rowCount": 1 // Количество удаленных строк (постов)
}
</code>

## Эндпоинт updatePost
**Описание: Этот эндпоинт используется для обновления поста.**

HTTP-метод: PUT

Endpoint: /updatePost/:id

#### Параметры запроса:

<code>id (строка): ID поста, который нужно обновить.</code>

#### Тело запроса:
- message (строка): Обновленное содержание/сообщение поста.
- mediaUrl (строка): Обновленный URL медиа-файла, связанного с постом.

#### Пример запроса:

<code>PUT /updatePost/4
Content-Type: application/json

{
  "message": "Обновленное сообщение",
  "mediaUrl": "https://example.com/updated-image.jpg"
} </code>

#### Пример ответа:


<code>200 OK
Content-Type: application/json

{
  "id": "4",
  "message": "Обновленное сообщение",
  "media_url": "https://example.com/updated-image.jpg",
  "created_at": "2023-05-26T12:34:56.789Z"
}</code>

## Эндпоинт getAllPosts
**Описание: Этот эндпоинт используется для получения всех постов.**

HTTP-метод: GET

Endpoint: /getAllPosts

#### Пример запроса:

<code>GET /getAllPosts</code>
#### Пример ответа:


<code>200 OK
Content-Type: application/json

[
  {
    "id": "1",
    "login": "john",
    "message": "Пост 1",
    "media_url": "https://example.com/image1.jpg",
    "created_at": "2023-05-26T12:34:56.789Z"
  },
  {
    "id": "2",
    "login": "jane",
    "message": "Пост 2",
    "media_url": "https://example.com/image2.jpg",
    "created_at": "2023-05-27T09:12:34.567Z"
  },
  ...
]</code>

## Эндпоинт registerClient
**Описание: Этот эндпоинт используется для регистрации нового клиента.**

HTTP-метод: POST

Endpoint: /registerClient

#### Тело запроса:
- login (строка): Логин пользователя.
- password (строка): Пароль пользователя.
- username (строка): Имя пользователя.

####Пример запроса:

<code>POST /registerClient
Content-Type: application/json

{
  "login": "example_user",
  "password": "secretpassword",
  "username": "John Doe"
}</code>

#### Пример ответа при успешной регистрации:


<code>201 Created
Content-Type: application/json

{
  "message": "Пользователь успешно зарегистрирован",
  "token": "<JWT-токен>"
}</code>

#### Пример ответа при ошибке регистрации:


<code>400 Bad Request
Content-Type: application/json

{
  "error": "Login уже существует. Нет необходимости повторно регистрироваться."
}
</code>
    
## Эндпоинт loginClient
**Описание: Этот эндпоинт используется для входа клиента в систему.**

HTTP-метод: POST

Endpoint: /loginClient

#### Тело запроса:
    - login (строка): Логин пользователя.
    - password (строка): Пароль пользователя.
    
#### Пример запроса:


<code>POST /loginClient
Content-Type: application/json

{
  "login": "example_user",
  "password": "secretpassword"
}</code>
    
#### Пример ответа при успешном входе в систему:

<code>
200 OK
Content-Type: application/json

{
  "token": "<JWT-токен>",
  "user": {
    "id": "<ID пользователя>",
    "login": "example_user",
    "username": "John Doe"
  }
}
    </code>
#### Пример ответа при ошибке входа в систему:

<code>
400 Bad Request
Content-Type: application/json

{
  "error": "Пользователь не зарегистрирован. Сначала зарегистрируйтесь."
}
</code>
**Пожалуйста, обратите внимание, что для работы этих эндпоинтов требуется корректная настройка базы данных, модулей bcrypt и jwt, а также наличие переменных окружения (dotenv) для конфигурации.**
